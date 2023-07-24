import React, { useState, useEffect } from 'react';
import * as S from './Player.styled';
import icoPlay from '../../Images/ico_play.svg';
import icoNext from '../../Images/ico_next.svg';
import icoPrev from '../../Images/ico_prev.svg';
import icoShuffle from '../../Images/ico_shuffle.svg';
import icoRandom from '../../Images/ico_random.svg';
import icoPause from '../../Images/ico_pause.svg';

const Player = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const player = document.getElementById('player');
    player.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: isPlaying ? 'playVideo' : 'pauseVideo'
      }),
      '*'
    );
  }, [isPlaying]);

  useEffect(() => {
    const player = document.getElementById('player');
    player.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: 'setVolume',
        args: [volume]
      }),
      '*'
    );
  }, [volume]);

  const videoSrc = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0`;

  const onVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <>
      <S.playBar>
        <div>
          <S.Iframe
            id="player"
            title="Youtube Video Player"
            width="120px"
            height="65px"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></S.Iframe>
        </div>
        <div>
          <S.playIconWrapper>
            <li>
              <a>
                <img src={`${icoShuffle}`} />
              </a>
            </li>
            <li>
              <S.Prev>
                <img src={`${icoPrev}`} />
              </S.Prev>
            </li>
            <li>
              <S.Play onClick={togglePlay}>
                <img src={isPlaying ? `${icoPause}` : `${icoPlay}`} />
              </S.Play>
            </li>
            <li>
              <S.Next>
                <img src={`${icoNext}`} />
              </S.Next>
            </li>
            <li>
              <a>
                <img src={`${icoRandom}`} />
              </a>
            </li>
          </S.playIconWrapper>
        </div>
        <input type="range" min="0" max="100" value={volume} onChange={onVolumeChange} />
      </S.playBar>
    </>
  );
};

export default Player;
