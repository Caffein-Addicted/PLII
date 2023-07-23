import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../Redux/UserInfo';
import * as S from './Signin.styled';
import ButtonGoogle from '../../Images/btn_google.svg';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const auth = getAuth();

    try {
      setError(null); // 이전 에러 초기화
      if (!email || !password) {
        setError('이메일과 비밀번호를 모두 입력해주세요.');
        return;
      }

      await signInWithEmailAndPassword(auth, email, password);
      console.log('로그인 성공:', email);
      window.alert('로그인에 성공했습니다.');
      fetchUserData();
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error.message);
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const fetchUserData = async () => {
    const dbUsers = query(collection(db, 'users'), where('email', '==', email));

    const usersData = [];

    const userSnapshot = await getDocs(dbUsers);
    userSnapshot.forEach((doc) => {
      usersData.push(doc.data());
    });
    dispatch(getUserInfo(...usersData));
  };

  return (
    <S.Signin>
      <S.SigninCard>
        <S.Title>로그인</S.Title>
        <form>
          <S.ButtonGoogle>
            <img src={ButtonGoogle} alt="Button Google" />
          </S.ButtonGoogle>
          <div>
            <label>이메일:</label>
            <input type="text" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>비밀번호:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="button" onClick={handleLogin}>
            로그인
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
        </div>
      </S.SigninCard>
    </S.Signin>
  );
};

export default Signin;
