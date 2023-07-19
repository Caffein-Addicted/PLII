import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {

  const [jazzVideos, setJazzVideos] = useState([]);
  const [kpopVideos, setKpopVideos] = useState([]);
  const [jpopVideos, setJpopVideos] = useState([]);
  const [classicVideos, setClassicVideos] = useState([]);
  const [edmVideos, setEdmVideos] = useState([]);
  const [ncsVideos, setNcsVideos] = useState([]);

  const getYoutubeVideos = async (query, order = 'relevance') => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: 'AIzaSyBSiHZU7LRMcHyxxs49Tn-P7vqHXUdQNL0',
        type: 'video',
        part: 'snippet',
        q: query,
        order: order,
        videoCategoryId: '10',
        maxResults: 5
      }
    });
    return response.data.items;
  };

  useEffect(() => {
    const genres = ['jazz', 'kpop', 'jpop', 'classic', 'EDM', 'NCS'];
    const setStateFunctions = [
      setJazzVideos,
      setKpopVideos,
      setJpopVideos,
      setClassicVideos,
      setEdmVideos,
      setNcsVideos
    ];

    const fetchVideos = async () => {
      for (let i = 0; i < genres.length; i++) {
        const genreVideos = await getYoutubeVideos(genres[i], genres[i] === 'jazz' ? 'viewCount' : undefined);
        setStateFunctions[i](genreVideos);
      }
    };

    fetchVideos();
  }, []);


  const renderVideos = (videos) => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {videos.map((video) => (
        <div key={video.id.videoId} style={{ margin: '10px' }}>
          <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
          <p dangerouslySetInnerHTML={{ __html: video.snippet.title }}></p>
          <p>조회수: {video.statistics?.viewCount || 'N/A'}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1>PLII</h1>
      <h2>Jazz</h2>
      {renderVideos(jazzVideos)}
      <h2>K-Pop</h2>
      {renderVideos(kpopVideos)}
      <h2>J-Pop</h2>
      {renderVideos(jpopVideos)}
      <h2>Classic</h2>
      {renderVideos(classicVideos)}
      <h2>EDM</h2>
      {renderVideos(edmVideos)}
      <h2>NCS</h2>
      {renderVideos(ncsVideos)}

    </div>
  );
};

export default Main;
