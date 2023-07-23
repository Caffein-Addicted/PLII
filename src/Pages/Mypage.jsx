import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { decode } from 'url-safe-base64';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../redux/UserInfo';

const Mypage = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const params = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    fetchUserData();
  });

  const fetchUserData = async () => {
    const dbUsers = query(collection(db, 'users'), where('email', '==', atob(decode(params.id))));

    const usersData = [];

    const userSnapshot = await getDocs(dbUsers);
    userSnapshot.forEach((doc) => {
      usersData.push(doc.data());
    });
    dispatch(getUserInfo(...usersData));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('로그아웃 성공');
      // 로그아웃 후에 필요한 추가적인 작업을 수행할 수 있습니다.
      window.location.replace('/');
    } catch (error) {
      console.error('로그아웃 실패:', error.message);
    }
  };

  return (
    <div>
      <h2>마이페이지</h2>
      {user ? (
        <div>
          {/* 프로필 이미지 표시 */}
          <img
            src={userInfo.imgfile ? userInfo.imgfile : '/user.png'}
            alt="프로필 사진"
            style={{ width: '100px', height: '100px' }}
          />
          <p>이메일: {userInfo.email}</p>
          <p>이름: {userInfo.name}</p>
          <button onClick={handleLogout}>로그아웃</button>
          {/* 프로필 설정 페이지로 이동하는 버튼 */}
          <Link to={`/editprofile/${params.id}`}>프로필 설정</Link>
        </div>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default Mypage;
