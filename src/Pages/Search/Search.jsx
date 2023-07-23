import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Search = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const { inputValue } = useParams();
  const api_key = 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw';
  const channel_id = 'UCRbI1cqUoaea8LTJA2q9ShA';

  useEffect(() => {
    const fetchPlaylistsAndVideos = async () => {
      try {
        const {
          data: { items: playlists }
        } = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channel_id}&maxResults=50&key=${api_key}`
        );

        const videoPromises = playlists.map(async (playlist) => {
          const {
            data: { items: videos }
          } = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlist.id}&key=${api_key}`
          );
          return videos;
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

  useEffect(() => {
    const trimmedInput = inputValue.trim().replace(/\s/g, '').toLowerCase();
    if (!trimmedInput) {
      setFilteredVideos(videos);
    } else {
      const filterVideos = videos.filter((video) =>
        video.snippet.title.replace(/\s/g, '').toLowerCase().includes(trimmedInput)
      );
      setFilteredVideos(filterVideos);
    }
  }, [inputValue, videos]);

  return (
    <>
      <div className="search-list">
        <div className="card">
          {filteredVideos.length === 0 ? (
            <p>검색결과가 없습니다. </p>
          ) : (
            filteredVideos.map((video) => {
              return (
                <div className="search-item" key={video.id}>
                  <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                  <p className="playlist-item-text">{video.snippet.title}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
