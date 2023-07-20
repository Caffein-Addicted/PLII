import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate를 불러옴
import { app } from '../firebase';

const Editprofile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옴

  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');
  const [error, setError] = useState(null);

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleSave = async () => {
    try {
      setError(null);

      // 프로필 정보 저장 로직

      console.log('프로필 정보 저장 성공:', displayName, photoURL);
      window.alert('프로필 정보를 저장했습니다.');
      navigate('/mypage'); // 마이페이지로 이동
    } catch (error) {
      console.error('프로필 정보 저장 실패:', error.message);
      setError('프로필 정보 저장에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <h2>프로필 편집</h2>
      <form>
        <div>
          <label>이름:</label>
          <input type="text" value={displayName} onChange={handleDisplayNameChange} />
        </div>
        <div>
          <label>프로필 사진 URL:</label>
          <input type="text" value={photoURL} onChange={handlePhotoURLChange} />
        </div>
        <button type="button" onClick={handleSave}>
          저장
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <Link to="/mypage">마이페이지로 돌아가기</Link>
      </div>
    </div>
  );
};

export default Editprofile;
