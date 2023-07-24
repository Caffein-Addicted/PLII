import React, { useContext, useState } from 'react';
import { YoutubeDataContext } from '../../context/YoutubeDataContext';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import * as S from './Main.styled';
import '../../App.css';
import bannerImg from '../../Images/banner.png';
import IcoSpecial from '../../Images/icon_special.png';
import icoPlay from '../../Images/ico_play.svg';

const Main = () => {
  const { playlists, videosList, setVideoId } = useContext(YoutubeDataContext);
  const handleCardClick = (videoId) => {
    setVideoId(videoId);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <S.Main>
      <S.Banner>
        <S.BannerFigure>
          <S.BannerImg src={`${bannerImg}`} />
        </S.BannerFigure>
        <S.BannerWrapper>
          <S.BannerIcon src={`${IcoSpecial}`} />
          <S.BannerTitle>
            진짜는 앨범으로 말한다 : <br />
            이센스, 빈지노
          </S.BannerTitle>
          <S.BannerDesc>
            내로라하는 플레이어들이 앨범을 발표한 지금. 한국 힙합/알앤비 씬의 일원들은 그 어느 때보다도 방송이나
            챌린지가 아닌 앨범 단위의 결과물에 많은 관심을 기울이고 있다. - 힙합엘이
          </S.BannerDesc>
          <S.BannerTime> VIBE MAG · 2023.07.21</S.BannerTime>
        </S.BannerWrapper>
      </S.Banner>
      {playlists.map((playlist) => (
        <>
          <Link key={playlist.id} to={`/playlist/${playlist.id}`} style={{ textDecoration: 'none' }}>
            <S.Title className="playlist-item-text">{playlist.snippet.title}</S.Title>
          </Link>

          {videosList[playlist.id] && (
            <S.PlaylistWrapper>
              <Carousel
                autoPlay
                autoPlaySpeed={2000}
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
              >
                {videosList[playlist.id].map((video) => (
                  <S.VideoItem
                    key={video.id}
                    onClick={() => {
                      handleCardClick(video.snippet.resourceId.videoId);
                    }}
                  >
                    <div>
                      <S.Figure>
                        <S.ImgVideo src={video.snippet.thumbnails.medium.url} alt={`${video.snippet.title} 썸네일`} />

                        <S.ButtonPlayWrapper>
                          <S.ButtonPlay>
                            <img src={`${icoPlay}`} />
                          </S.ButtonPlay>
                        </S.ButtonPlayWrapper>
                      </S.Figure>
                    </div>
                    <S.SubTitle>{video.snippet.title}</S.SubTitle>
                  </S.VideoItem>
                ))}
              </Carousel>
            </S.PlaylistWrapper>
          )}
        </>
      ))}
    </S.Main>
  );
};

export default Main;
