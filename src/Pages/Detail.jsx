// Detail.js

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { YoutubeDataContext } from '../context/YoutubeDataContext';

const Detail = () => {
  const { videosList } = useContext(YoutubeDataContext);
  const { videoId } = useParams();

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const videoInfo = videosList?.find((video) => video.id === videoId);

  console.log(videoInfo);

  if (!videoInfo) {
    return <div>비디오 로딩중...</div>;
  }

  const recommendedVideos = [
    { id: 'video1', title: '추천 영상 1' },
    { id: 'video2', title: '추천 영상 2' },
    { id: 'video3', title: '추천 영상 3' }
    // ...
  ];

  return (
    <div className="player-container">
      {/* <object
        title="Youtube Video Player"
        width="100%"
        height="100%"
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
      ></object> */}
      <div style={{ backgroundColor: 'white', width: '300px', height: '300px' }}>
        {videoInfo.map((video) => {
          return <div>{video.title}</div>;
        })}
      </div>

      {/* 추천 노래 리스트 */}
      <div>
        <h2>추천 노래</h2>
        {recommendedVideos.map((video) => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            {/* <img src={thumbnailUrl} alt="썸네일" /> */}
          </div>
        ))}
      </div>

      {/* 관련 플레이 리스트 (가상 데이터) */}
      <div>
        <h2>관련 플레이 리스트</h2>
        <div>{/* 관련 플레이 리스트 아이템들 표시 */}</div>
      </div>
    </div>
  );
};

export default Detail;
