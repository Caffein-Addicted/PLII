import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { app } from '../firebase';

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

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
    } catch (error) {
      console.error('로그인 실패:', error.message);
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form>
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
      {user ? (
        <div>
          <button onClick={() => setUser(null)}>로그아웃</button>
        </div>
      ) : (
        <div>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
