// Detail.js

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import { YoutubeDataContext } from '../context/YoutubeDataContext';

const Detail = () => {
  const { videosList } = useContext(YoutubeDataContext);
  const location = useLocation();

  const videoSrc = `https://www.youtube.com/embed/${location.state.videoId}?autoplay=1`;

  const videoInfo = videosList[location.state.playListId]?.find((video) => video.id === location.state.videoId);

  console.log(videoInfo.snippet.title);

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
    <div className="player-container" style={{ color: 'white' }}>
      {
        // <iframe
        //   title="Youtube Video Player"
        //   width="100%"
        //   height="800px"
        //   src={videoSrc}
        //   frameBorder="0"
        //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        //   allowFullScreen
        // ></iframe>
      }
      <img src={videoInfo.snippet.thumbnails.high.url} alt="썸네일" />
      <h3>제목 : {videoInfo.snippet.title}</h3>
      <br />
      <p> 설명 : {videoInfo.snippet.description}</p>
      <br />

      <p>플레이리스트 채널명 : {videoInfo.snippet.channelTitle}</p>
      <br />
      <p>오리지널 비디오 채널명 : {videoInfo.snippet.videoOwnerChannelTitle}</p>
      <br />
      {/* 추천 노래 리스트 */}
      {/*       
      <div style={{ color: 'white' }}>
        <h2>추천 노래</h2>
        {recommendedVideos.map((video) => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            <img src={thumbnailUrl} alt="썸네일" />
          </div>
        ))}
      </div>

      관련 플레이 리스트 (가상 데이터)
      <div style={{ color: 'white' }}>
        <h2>관련 플레이 리스트</h2>
        <div>관련 플레이 리스트 아이템들 표시</div>
      </div> 
    */}
    </div>
  );
};

export default Detail;
