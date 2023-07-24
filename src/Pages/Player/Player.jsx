import React from 'react';
import * as S from './Player.styled';
import icoPlay from '../../Images/ico_play.svg';
import icoNext from '../../Images/ico_next.svg';
import icoPrev from '../../Images/ico_prev.svg';
import icoShuffle from '../../Images/ico_shuffle.svg';
import icoRandom from '../../Images/ico_random.svg';

const Player = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  return (
    <>
      <S.playBar>
        <div></div>
        <div>
          <S.playIconWrapper>
            <li>
              <a>
                <img src={`${icoShuffle}`}></img>
              </a>
            </li>
            <li>
              <S.Prev>
                <img src={`${icoPrev}`}></img>
              </S.Prev>
            </li>
            <li>
              <S.Play>
                <img src={`${icoPlay}`}></img>
              </S.Play>
            </li>
            <li>
              <S.Next>
                <img src={`${icoNext}`}></img>
              </S.Next>
            </li>
            <li>
              <a>
                <img src={`${icoRandom}`}></img>
              </a>
            </li>
          </S.playIconWrapper>
        </div>
        <div></div>
      </S.playBar>
    </>
  );
};

export default Player;
