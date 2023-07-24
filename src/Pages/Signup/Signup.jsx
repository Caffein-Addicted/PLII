import React, { useState } from 'react';
import { db } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { query, where, getDocs } from 'firebase/firestore';
import { app } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../Redux/UserInfo';
import * as S from './Signup.styled';
import { Link } from 'react-router-dom';

const Signup = () => {
  // 입력값을 상태로 관리하기 위한 useState 훅 사용
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [nickName, setNickname] = useState('');
  const [bio, setBio] = useState(''); // 사용자의 소개글을 저장하는 상태 추가
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    const dbUsers = query(collection(db, 'users'), where('email', '==', email));

    const usersData = [];

    const userSnapshot = await getDocs(dbUsers);
    userSnapshot.forEach((doc) => {
      usersData.push(doc.data());
    });
    dispatch(getUserInfo(...usersData));
  };

  // 각 입력값의 변경을 처리하는 이벤트 핸들러 함수들
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  // 회원가입 버튼 클릭 이벤트 처리 함수
  const handleSignup = async () => {
    const auth = getAuth();

    // 이메일과 비밀번호의 유효성 검사
    if (!email) {
      setError('이메일을 입력해주세요.');
      return;
    }

    if (!password) {
      setError('비밀번호를 입력해주세요.');
      return;
    }

    // 비밀번호와 확인용 비밀번호가 일치하는지 확인
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 비밀번호 유효성 검사 추가
    const isPasswordValid = (password) => {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[@$!%*?&]/.test(password);

      return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    };

    if (!isPasswordValid(password)) {
      setError(
        '올바른 형식의 비밀번호를 입력해주세요. 비밀번호는 영문 대문자, 소문자, 숫자, 특수문자를 모두 포함하고 최소 8자 이상이어야 합니다.'
      );
      return;
    }

    // 닉네임과 소개글 유효성 검사
    if (!nickName) {
      setError('닉네임을 입력해주세요.');
      return;
    }

    setError('');

    try {
      // Firebase 인증 서비스를 사용하여 회원가입 처리
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('회원가입 성공:', user.email);

      // Firebase Firestore를 사용하여 회원 정보 저장
      const db = getFirestore(app);

      const usersCollectionRef = collection(db, 'users');
      await addDoc(usersCollectionRef, {
        uid: user.uid,
        email: user.email,
        name: name,
        nickName: nickName,
        bio: bio, // 소개글도 사용자 정보에 추가로 저장
        imgfile: ''
      });

      console.log('회원 정보 저장 완료');
      window.alert('회원가입이 성공적으로 완료되었습니다.');
      fetchUserData();
      navigate('/');
    } catch (error) {
      console.error('회원가입 실패:', error.message);
      window.alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // JSX를 사용하여 회원가입 폼 표시
  return (
    <S.Signup>
      <S.SignBgOverlay />
      <S.SignupCard>
        <S.Title>회원가입</S.Title>
        <form>
          <S.inputGrid>
            <S.InputItem>
              <S.Label>아이디:</S.Label>
              <S.Input type="text" value={nickName} onChange={handleNicknameChange} />
            </S.InputItem>
            <S.InputItem>
              <S.Label>이름:</S.Label>
              <S.Input type="text" value={name} onChange={handleNameChange} />
            </S.InputItem>
          </S.inputGrid>
          <S.InputItem>
            <S.Label>이메일:</S.Label>
            <S.Input type="text" value={email} onChange={handleEmailChange} />
          </S.InputItem>
          <S.InputItem>
            <S.Label>비밀번호:</S.Label>
            <S.Input type="password" value={password} onChange={handlePasswordChange} />
          </S.InputItem>
          <S.InputItem>
            <S.Label>비밀번호 확인:</S.Label>
            <S.Input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </S.InputItem>

          {/* <S.InputItem>
            <S.Label>한 줄 소개:</S.Label>
            <S.Textarea style={{ resize: 'none' }} value={bio} onChange={handleBioChange} />
          </S.InputItem> */}
          {error && <div style={{ color: 'red', marginTop: '4px', fontSize: '14px' }}>{error}</div>}
          <S.Button type="button" onClick={handleSignup}>
            등록
          </S.Button>
        </form>
        <S.AuthLink>
          이미 회원이신가요?
          <Link to="/signin">
            <S.ButtonText>로그인</S.ButtonText>
          </Link>
        </S.AuthLink>
      </S.SignupCard>
    </S.Signup>
  );
};

export default Signup;
