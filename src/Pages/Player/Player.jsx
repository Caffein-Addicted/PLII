import React, { useState, useEffect } from 'react';
import * as S from './Player.styled';
import icoPlay from '../../Images/ico_play.svg';
import icoNext from '../../Images/ico_next.svg';
import icoPrev from '../../Images/ico_prev.svg';
import icoShuffle from '../../Images/ico_shuffle.svg';
import icoRandom from '../../Images/ico_random.svg';
import icoPlayList from '../../Images/ico_playlist.svg';
import icoSound from '../../Images/ico_sound.svg';
import icoPause from '../../Images/ico_pause.svg';

const Player = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(true);
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

  const videoSrc = `https://www.youtube.com/embed/${videoId ? videoId : 'dQw4w9WgXcQ'}?enablejsapi=1`;

  const onVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <>
      <S.YoutubeVideo
        title="Youtube Video Player"
        width="100%"
        height="100%"
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
      ></S.YoutubeVideo>

      <S.playBar>

        <div>
          <iframe
            id="player"
            title="Youtube Video Player"
            width="100%"
            height="100%"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
        </div>
        <S.PlayBarLeftWrapper>
          <S.PlayBarAlbum>
            <img />
          </S.PlayBarAlbum>
          <S.PlayBarContentWrapper>
            <S.PlayBarTitle>Super Shy</S.PlayBarTitle>
            <S.PlayBarArtist>NewJeans</S.PlayBarArtist>
          </S.PlayBarContentWrapper>
        </S.PlayBarLeftWrapper>
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
        <S.playIconRightWrapper>
          <S.VideoTime>00:00 / 00:00</S.VideoTime>
          <S.SoundBar>
            <S.IcoSound src={`${icoSound}`} />
            <S.SoundBarWrapper>
              <S.SoundBarProgress>        <div>
          <input type="range" min="0" max="100" value={volume} onChange={onVolumeChange} />
        </div></S.SoundBarProgress>
            </S.SoundBarWrapper>
          </S.SoundBar>
          <S.IcoPlayList src={`${icoPlayList}`} />
        </S.playIconRightWrapper>
      </S.playBar>
    </>
  );
};

export default Player;
