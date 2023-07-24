import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { YoutubeDataContext } from '../../context/YoutubeDataContext';
import { Link } from 'react-router-dom';
import * as S from './PlayList.styled';
import { useSelector } from 'react-redux';
import icoPlayList from '../../Images/ico_add_playlist.svg';
import icoLike from '../../Images/ico_like.svg';

const Playlist = () => {
  const { videosList, playlists } = useContext(YoutubeDataContext);
  const { playlistId } = useParams();
  const userInfo = useSelector((state) => state.userInfo);

  const selectAll = (selectAll) => {
    const checkboxes = document.getElementsByName('checkBox');

    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked;
    });
  };

  const playlist = playlists.find((p) => p.id === playlistId);
  const totalCount = videosList[playlistId] ? videosList[playlistId].length : 0;
  const scrollBarStyle = `
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f0f0f0;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #c0c0c0;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #a0a0a0;
    }
  `;
  const backgroundColorStyle = `
  body {
    background-color: #000;
  }
`;

  const playlistInfoStyle = {
    paddingTop: '30px',
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  };

  const videoListStyle = {
    maxHeight: '300px',
    overflowY: 'scroll',
    margin: '0.5rem 0',
    marginTop: '50px',
    color: 'white',
    borderBottom: '1px solid #222222'
  };

  const carouselStyle = {
    display: 'flex',
    overflowX: 'scroll',
    marginTop: '30px',
    marginLeft: '10px',
    gap: '16px',
    height: '250px',
    justifycontent: 'center',
    color: 'white'
  };

  return (
    <>
      <style>
        {scrollBarStyle}
        {backgroundColorStyle}
      </style>
      {playlist ? (
        <div>
          <S.PlayListWrapper>
            <S.PlayListBackground>
              <S.BgOverlay />
              <S.PlayListBackgroundImg src={playlist.snippet.thumbnails.medium.url} />
            </S.PlayListBackground>

            <S.PlaylistInner>
              <S.PlayListFigure>
                <S.PlayListImg src={playlist.snippet.thumbnails.medium.url} alt={`${playlist.snippet.title} 썸네일`} />
              </S.PlayListFigure>
              <S.PlaylistInfo>
                <S.Title>{playlist.snippet.title}</S.Title>
                <S.Description>{playlist.snippet.description}</S.Description>
                <S.Count> {totalCount}곡</S.Count>
              </S.PlaylistInfo>
            </S.PlaylistInner>
          </S.PlayListWrapper>

          <S.VideoList>
            <S.VideoListItem>
              <div>
                <input
                  name="allCheckBox"
                  type="checkbox"
                  value="checkBox"
                  onClick={() => {
                    selectAll();
                  }}
                />
                <S.ItemTitle>{totalCount}곡</S.ItemTitle>
              </div>

              <S.iconWrapper>
                <S.iconList>
                  <img src={`${icoLike}`} />
                </S.iconList>
                <S.iconList>
                  <img src={`${icoPlayList}`} />
                </S.iconList>
              </S.iconWrapper>
            </S.VideoListItem>

            {videosList[playlistId] ? (
              videosList[playlistId].map((video) => (
                <S.VideoListItem key={video.id}>
                  <div>
                    <input type="checkbox" id={video.id} value="checkBox" name={video.snippet.title} />
                    <S.ItemTitle htmlFor={video.id}>{video.snippet.title}</S.ItemTitle>
                  </div>

                  <S.iconWrapper>
                    <S.iconList>
                      <img src={`${icoLike}`} />
                    </S.iconList>
                    <S.iconList>
                      <img src={`${icoPlayList}`} />
                    </S.iconList>
                  </S.iconWrapper>
                </S.VideoListItem>
              ))
            ) : (
              <div>로딩중...</div>
            )}
          </S.VideoList>
          <h1
            style={{
              marginTop: '20px',
              fontSize: '30px',
              color: 'white'
            }}
          >
            다른 플레이리스트
          </h1>

          <div style={carouselStyle}>
            {playlists
              .filter((p) => p.id !== playlistId)
              .map((p) => (
                <Link
                  style={{
                    color: 'white',
                    textDecoration: 'none'
                  }}
                  to={`/playlist/${p.id}`}
                >
                  <div key={p.id}>
                    <img src={p.snippet.thumbnails.medium.url} alt={`${p.snippet.title} 썸네일`} />
                    <p>{p.snippet.title}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <div>플레이리스트 로딩중...</div>
      )}
    </>
  );
};

export default Playlist;
