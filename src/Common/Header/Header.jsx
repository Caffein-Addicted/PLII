import React from 'react';
import * as S from './Header.styled';
import Logo from '../../Images/logo.svg';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const Header = () => {
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
          <ul>
            <li>
              <Link to="/search">검색</Link>
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
