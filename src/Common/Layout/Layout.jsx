import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as S from './Layout.styled';
import PlaylistBar from '../PlaylistBar/PlaylistBar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <S.ContentWrapper>
        {children}
        <Footer />
      </S.ContentWrapper>
      <PlaylistBar />
    </>
  );
};

export default Layout;
