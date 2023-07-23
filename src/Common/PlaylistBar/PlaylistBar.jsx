import React, { useState } from 'react';
import * as S from './PlaylistBar.styled';

const PlaylistBar = () => {
  let isPlay = false;

  const isPlayVideo = () => {
    isPlay = !isPlay;
    if (isPlay) {
      document
        .querySelector('#ytVideo')
        .contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    } else {
      document
        .querySelector('#ytVideo')
        .contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
  };

  return (
    <>
      <S.playListBar>
        <div>
          <iframe
            id="ytVideo"
            width="375"
            height="200"
            src={`https://www.youtube.com/embed/IRyJe-0Uie0?autoplay=0&mute=0&autohide='2'&modestbranding=1&enablejsapi=1&version=3&playerapiid=ytplayer`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button onClick={() => isPlayVideo()}>플레이</button>
      </S.playListBar>
    </>
  );
};

export default PlaylistBar;
