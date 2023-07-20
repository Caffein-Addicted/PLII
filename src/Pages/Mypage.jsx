import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase';

const Mypage = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('로그아웃 성공');
      // 로그아웃 후에 필요한 추가적인 작업을 수행할 수 있습니다.
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
          <img src={user.photoURL} alt="프로필 사진" style={{ width: '100px', height: '100px' }} />
          <p>이메일: {user.email}</p>
          <p>이름: {user.displayName}</p>
          <button onClick={handleLogout}>로그아웃</button>
          {/* 프로필 설정 페이지로 이동하는 버튼 */}
          <Link to="/editprofile">프로필 설정</Link>
        </div>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default Mypage;
