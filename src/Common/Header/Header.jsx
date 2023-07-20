import React from 'react';
import * as S from './Header.styled';

import Logo from '../../Images/logo.svg';

const Header = () => {
  return (
    <>
      <S.Header>
        <S.Logo src={Logo}></S.Logo>
        <S.ProfileWrap>
          <S.ProfileAvatar />
          <S.ProfileName>김선익</S.ProfileName>
        </S.ProfileWrap>
        <p>로그인하고 숨은 플s리 듣기</p>
        <S.Button varient="solid">AI 플리 찾기</S.Button>
      </S.Header>
    </>
  );
};

export default Header;