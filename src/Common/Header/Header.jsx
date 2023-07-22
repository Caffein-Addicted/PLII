// Header.js

import React from 'react';
import * as S from './Header.styled';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.svg';
import { useState } from 'react';

const Header = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <S.Header>
        <Link to="/">
          <S.Logo src={Logo}></S.Logo>
        </Link>
        <S.ProfileWrap>
          <S.ProfileAvatar />
          <S.ProfileName>김선익</S.ProfileName>
        </S.ProfileWrap>
        <p>로그인하고 숨은 플리 듣기</p>
        <S.Button varient="solid">AI 플리 찾기</S.Button>
        <form>
          <input value={inputValue} onChange={handleInputChange}></input>
          <Link to={`/search/${inputValue}`}>
            <button disabled={!inputValue.trim()}>검색</button>
          </Link>
        </form>
      </S.Header>
    </>
  );
};

export default Header;
