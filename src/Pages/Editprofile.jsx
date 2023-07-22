import React, { useState, useRef, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { decode } from 'url-safe-base64';

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
      <h2>프로필 편집</h2>
      <form>
        <div>
          <label>이름:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>닉네임:</label>
          <input type="text" value={nickName} onChange={handleNickNameChange} />
        </div>
        <div>
          <label>소개글:</label>
          <input type="text" value={bio} onChange={handleBioChange} />
        </div>
        <div>
          <label>프로필 사진:</label>
          <input type="file" accept="image/png, image/jpeg, image/jpg" ref={imgRef} onChange={handlePhotoFileChange} />
        </div>
        <button type="button" onClick={handleSave}>
          저장
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <Link to={`/mypage/${params.id}`}>마이페이지로 돌아가기</Link>
      </div>
    </div>
  );
};

export default Editprofile;
