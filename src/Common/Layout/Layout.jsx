import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as S from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <S.ContentWrapper>
        {children}
        <Footer />
      </S.ContentWrapper>
    </>
  );
};

export default Layout;
