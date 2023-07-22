import React, { useState } from 'react';
import * as S from './Header.styled';
import Logo from '../../Images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <S.Header>
        <S.Logo src={Logo}></S.Logo>
        <S.ProfileWrap>
          <S.ProfileAvatar />
          <S.ProfileName>김선익</S.ProfileName>
        </S.ProfileWrap>
        <p>로그인하고 숨은 플리 듣기</p>
        <S.Button varient="solid">AI 플리 찾기</S.Button>

        <div>
          <input value={searchValue} onChange={onChangeHandler}></input>
          <Link to={`/search/${searchValue}`}>검색</Link>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/search/1">검색</Link>
            </li>
            <li>
              <Link to="/detail/2">디테일</Link>
            </li>
            <li>
              <Link to="/">투데이</Link>
            </li>
            <li>
              <Link to="/">투데이</Link>
            </li>
            <li>
              <Link to="/">투데이</Link>
            </li>
          </ul>
        </div>
      </S.Header>
    </>
  );
};

export default Header;
