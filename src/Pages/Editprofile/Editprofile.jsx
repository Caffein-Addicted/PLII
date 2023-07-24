import React, { useState, useRef, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { decode } from 'url-safe-base64';
import * as S from './Editprofile.styled';
import { getUserInfo } from '../../Redux/UserInfo';
import { useSelector } from 'react-redux';

const Editprofile = () => {
  const auth = getAuth();
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [name, setName] = useState();
  const [nickName, setNickName] = useState();
  const [ref, setRef] = useState();
  const [bio, setBio] = useState();
  const [photoFile, setPhotoFile] = useState(null);
  const imgRef = useRef();
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    fetchUserData();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);

  const fetchUserData = async () => {
    const dbUsers = query(collection(db, 'users'), where('email', '==', atob(decode(params.id))));

    const userSnapshot = await getDocs(dbUsers);
    userSnapshot.forEach((doc) => {
      setRef(doc.id);
      setName(doc.data().name);
      setNickName(doc.data().nickName);
      setBio(doc.data().bio);
      setPhotoFile(doc.data().imgfile);
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  // 이미지 업로드 input의 onChange
  const handlePhotoFileChange = async () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhotoFile(reader.result);
    };
  };

  const handleSave = async () => {
    try {
      const updateInfoRef = doc(db, 'users', ref);

      await updateDoc(updateInfoRef, {
        name: name,
        bio: bio,
        nickName: nickName,
        imgfile: photoFile
      });
      setError(null);

      // 프로필 정보 저장 로직
      console.log('프로필 정보 저장 성공:', name, photoFile);
      window.alert('프로필 정보를 저장했습니다.');
      navigate(`/mypage/${params.id}`);
    } catch (error) {
      console.error('프로필 정보 저장 실패:', error.message);
      setError('프로필 정보 저장에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <S.Title>프로필 편집</S.Title>
      <S.ProfileFigure>
        <S.ProfileImg src={userInfo.imgfile ? userInfo.imgfile : '/user.png'} alt="프로필 사진" />
      </S.ProfileFigure>
      <form>
        <S.InputItem>
          <S.InputLabel>이름:</S.InputLabel>
          <S.Input type="text" value={name} onChange={handleNameChange} />
        </S.InputItem>
        <S.InputItem>
          <S.InputLabel>닉네임:</S.InputLabel>
          <S.Input type="text" value={nickName} onChange={handleNickNameChange} />
        </S.InputItem>
        <S.InputItem>
          <S.InputLabel>소개글:</S.InputLabel>
          <S.Input type="text" value={bio} onChange={handleBioChange} />
        </S.InputItem>
        <S.InputItem>
          <S.InputLabel>프로필 사진:</S.InputLabel>
          <S.InputImg
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            ref={imgRef}
            onChange={handlePhotoFileChange}
          />
        </S.InputItem>
        <S.Button type="button" onClick={handleSave}>
          저장
        </S.Button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <S.ButtonText to={`/mypage/${params.id}`}>마이페이지로 돌아가기</S.ButtonText>
      </div>
    </div>
  );
};

export default Editprofile;
