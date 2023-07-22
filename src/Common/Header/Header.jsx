import React, { useState, useEffect } from 'react';
import * as S from './Header.styled';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { encode } from 'url-safe-base64';
import { db } from '../../firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { getUserInfo, resetUserInfo } from '../../redux/UserInfo';

import Logo from '../../Images/logo.svg';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const auth = getAuth();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 로그인 상태 감지
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setId(user.email);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe(); // 컴포넌트가 언마운트될 때 이벤트 구독 해제
  }, [auth]);

  // 로그아웃 시 호출되는 함수
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('로그아웃 성공');
      setIsLoggedIn(false); // 로그아웃 시 로그인 상태를 false로 업데이트
      window.location.replace('/');
      navigate('/'); // 로그아웃 시 메인 페이지로 이동
    } catch (error) {
      console.error('로그아웃 실패:', error.message);
    }
  };

  const fetchUserData = async () => {
    const dbUsers = query(collection(db, 'users'), where('email', '==', id));

    const usersData = [];

    const userSnapshot = await getDocs(dbUsers);
    userSnapshot.forEach((doc) => {
      usersData.push(doc.data());
    });
    dispatch(getUserInfo(...usersData));
  };

  const handleLoginOrLogout = () => {
    if (isLoggedIn) {
      handleLogout(); // 이미 로그인된 상태이면 로그아웃 처리
    } else {
      navigate('/signin'); // 비로그인 상태이면 로그인 페이지로 이동
    }
  };

  const moveMyPage = () => {
    navigate(`/mypage/${encode(btoa(id))}`);
  };

  if (isLoggedIn) {
    fetchUserData();
  }

  return (
    <>
      <S.Header>
        <S.Logo src={Logo}></S.Logo>
        <S.ProfileWrap>
          <img src={userInfo.imgfile ?? '/user.png'} alt="프로필 사진" style={{ width: '40px', height: '40px' }} />
          {isLoggedIn ? (
            // 로그인 상태일 때 로그아웃 버튼을 보여줌
            <>
              <S.ProfileName onClick={moveMyPage}>{userInfo.nickName} </S.ProfileName>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            // 비로그인 상태일 때 로그인 버튼을 보여줌
            <Link to="/signin" onClick={handleLoginOrLogout}>
              로그인
            </Link>
          )}
        </S.ProfileWrap>
        <p>로그인하고 숨은 플리 듣기</p>
        <S.Button varient="solid">AI 플리 찾기</S.Button>
      </S.Header>
    </>
  );
};

export default Header;
