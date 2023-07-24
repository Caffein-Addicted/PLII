import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { YoutubeDataContext } from '../context/YoutubeDataContext';

const Detail = () => {
  const { videosList } = useContext(YoutubeDataContext);
  const { combinedVideoId } = useParams();
  const videoId = combinedVideoId.split(':')[1];

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const videoInfo = videosList?.find((video) => video.snippet.resourceId.videoId === videoId);

  if (!videoInfo) {
    return <div>비디오 로딩중...</div>;
  }

  return (
    <div className="player-container">
      <object
        title="Youtube Video Player"
        width="100%"
        height="100%"
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
      ></object>
      <div>
        <div style={{ backgroundColor: 'white', width: '300px', height: '300px' }}>
          <div>{videoInfo.snippet.title}</div>
          {/* 여기에 다른 정보들을 추가할 수 있습니다. */}
        </div>

        {/* 관련 플레이 리스트 (가상 데이터) */}
        <div>
          <h2>관련 플레이 리스트</h2>
          <div>{/* 관련 플레이 리스트 아이템들 표시 */}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
