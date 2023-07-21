import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [videosList, setVideosList] = useState({});

  const api_key = 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw';
  const channel_id = 'UCRbI1cqUoaea8LTJA2q9ShA';

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

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

  return (
    <>
      {playlists.map((playlist) => (
        <>
          <div className="playlist-item" key={playlist.id}>
            <img src={playlist.snippet.thumbnails.default.url} alt={`${playlist.snippet.title} 썸네일`} />
            <span className="playlist-item-text">{playlist.snippet.title}</span>
          </div>
          {videosList[playlist.id] && (
            <div>
              <Carousel
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
              >
                {videosList[playlist.id].map((video) => (
                  <div className="card" key={video.id} style={{ textAlign: 'center', padding: '10px' }}>
                    <img
                      style={{ maxWidth: '100%', maxHeight: 'auto' }}
                      src={video.snippet.thumbnails.medium.url}
                      alt={`${video.snippet.title} 썸네일`}
                    />
                    <h3>{video.snippet.title}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default App;
