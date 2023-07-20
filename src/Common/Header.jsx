import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Side = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]); //검색후 초기화

  const getYoutubeVideos = async () => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: AIzaSyCJlI79J6cyWmy3TlwB1DcafG3R5lvNT8s,
        type: 'video',
        part: 'snippet',
        videoCategoryId: '10',
        maxResults: 50
      }
    });
    setVideos(response.data.items);
  };
  console.log({ videos });

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const [userInput, setUserInput] = useState('');

  const getSearchData = (e) => {
    setUserInput(e.target.value);
  };

  const searchHandler = () => {
    if (userInput.trim() === '') {
      return alert('검색어를 입력해주세요');
    } else {
      const filteredVideos = videos.filter((video) =>
        video.snippet.title.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredVideos(filteredVideos);
    }
  };
  // 인풋값이 비어있을 때 원래 비디오 목록 보여주기
  useEffect(() => {
    if (userInput.trim() === '') {
      setFilteredVideos(videos);
    }
  }, [userInput, videos]);

  return (
    <>
      <h1>검색</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input placeholder="검색어를 입력하세요" onChange={getSearchData}></input>
        <button
          onClick={() => {
            searchHandler();
          }}
        >
          {' '}
          검색버튼{' '}
        </button>
      </form>
      <div>
        <h2>searchingPage</h2>
        {filteredVideos.map((video) => {
          return (
            <div key={video.id}>
              <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
              <h3>{video.snippet.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Side;
