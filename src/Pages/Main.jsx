import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
  const [videos, setVideos] = useState([]);

  const getYoutubeVideos = async () => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw',
        type: 'video',
        part: 'snippet',
        videoCategoryId: '10',
        maxResults: 50
      }
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  return (
    <div>
      <h1>음악 카테고리 영상</h1>
      <div>
        {videos.map((video) => (
          <div key={video.id}>
            <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
