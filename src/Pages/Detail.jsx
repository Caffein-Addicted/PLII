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
      <img src={videoInfo.snippet.thumbnails.high.url} alt="썸네일" />
      <h3>제목 : {videoInfo.snippet.title}</h3>
      <br />
      <p> 설명 : {videoInfo.snippet.description}</p>
      <br />

      <p>플레이리스트 채널명 : {videoInfo.snippet.channelTitle}</p>
      <br />
      <p>오리지널 비디오 채널명 : {videoInfo.snippet.videoOwnerChannelTitle}</p>
      <br />
    </div>
  );
};

export default Detail;
