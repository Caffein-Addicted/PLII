import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { YoutubeDataContext } from '../context/YoutubeDataContext';
import { Link } from 'react-router-dom';

const Playlist = () => {
  const { videosList, playlists } = useContext(YoutubeDataContext);
  const { playlistId } = useParams();
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
          <div style={playlistInfoStyle}>
            <img src={playlist.snippet.thumbnails.medium.url} alt={`${playlist.snippet.title} 썸네일`} />
            <div>
              <h2
                style={{
                  fontSize: '30px',
                  marginBottom: '30px'
                }}
              >
                {playlist.snippet.title}
              </h2>
              <p>{playlist.snippet.description}</p>
              <p>노래 {totalCount}곡</p>
            </div>
          </div>
          <div style={videoListStyle}>
            {videosList[playlistId] ? (
              videosList[playlistId].map((video) => (
                <div style={{ margin: '10px' }} key={video.id}>
                  <input type="checkbox" id={video.id} name={video.snippet.title} />
                  <label style={{ margin: '10px' }} htmlFor={video.id}>
                    {video.snippet.title}
                  </label>
                </div>
              ))
            ) : (
              <div>로딩중...</div>
            )}
          </div>
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
