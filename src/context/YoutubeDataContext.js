import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const YoutubeDataContext = createContext();

export const YoutubeDataProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [videosList, setVideosList] = useState({});

  const api_key = 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw';
  const channel_id = 'UCRbI1cqUoaea8LTJA2q9ShA';

  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channel_id}&maxResults=50&key=${api_key}`
      );
      setPlaylists(response.data.items);
      response.data.items.forEach(async (playlist) => {
        await fetchVideos(playlist.id);
      });
    };

    fetchPlaylists();
  }, []);

  const fetchVideos = async (playlistId) => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${api_key}`
    );
    setVideosList((prevState) => ({ ...prevState, [playlistId]: response.data.items }));
  };

  return <YoutubeDataContext.Provider value={{ playlists, videosList }}>{children}</YoutubeDataContext.Provider>;
};
