import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [userInput, setUserInput] = useState("");

  const api_key = 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw'; 

  
  useEffect(() => {
    const fetchPlaylistsAndVideos = async () => {
      const channel_id = 'UCRbI1cqUoaea8LTJA2q9ShA';

      try {
        const responsePlaylists = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channel_id}&maxResults=50&key=${api_key}`
        );

        const playlists = responsePlaylists.data.items;
        const videoPromises = playlists.map(async (playlist) => {
          const responseVideos = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlist.id}&key=${api_key}`
          );
          return responseVideos.data.items;
        });

        const videoLists = await Promise.all(videoPromises);
        const allVideos = videoLists.flat();
        setVideos(allVideos);
        setFilteredVideos(allVideos); 
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchPlaylistsAndVideos();
  }, []);

  const getSearchData = (e) => {
    setUserInput(e.target.value);
  };

  const searchHandler = () => {
    const trimmedInput = userInput.trim();
    if (trimmedInput === "") {
       //alert("검색어를 입력해주세요");
      setFilteredVideos(videos);
    } else {
      const filteredVideos = videos.filter((video) =>
        video.snippet.title.replace(/\s/g, '').toLowerCase().includes(trimmedInput.replace(/\s/g, '').toLowerCase())
      );
      setFilteredVideos(filteredVideos);
    }
  };

  return (
    <>
    <div>
      <h1>검색</h1>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={getSearchData}
        ></input>
        <button onClick={() => { searchHandler(); }}>검색버튼</button>
      </form>
      </div>
      <div>
        <h2>searchingArea</h2>
        {filteredVideos.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          filteredVideos.map((video) => {
            return (
              <div key={video.id}>
                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                <h3>{video.snippet.title}</h3>
              </div>
            );
          })
        )}
      </div>
   </>
  );
};

export default Search;