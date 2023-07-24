import React, { useContext } from 'react';
import { YoutubeDataContext } from '../../context/YoutubeDataContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Player from '../../Pages/Player';
import * as S from './Layout.styled';

const Layout = ({ children }) => {
  const { videoId, handleVideoEnd } = useContext(YoutubeDataContext);

  return (
    <>
      <Header></Header>
      <S.ContentWrapper>
        {children}
        {videoId && <Player videoId={videoId} onVideoEnd={handleVideoEnd} />}
        <Footer />
      </S.ContentWrapper>
    </>
  );
};

export default Layout;
