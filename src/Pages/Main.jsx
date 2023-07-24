import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { YoutubeDataContext } from '../context/YoutubeDataContext';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Main = () => {
  const { playlists, videosList, setVideoId } = useContext(YoutubeDataContext);
  const navigate = useNavigate();
  const handleCardClick = (videoId, ClickVideoId, playListId) => {
    setVideoId(videoId);
    navigate(`/detail/${ClickVideoId}`, {
      state: {
        videoId: ClickVideoId,
        playListId: playListId
      }
    });
  };

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

  return (
    <div
      style={{
        backgroundColor: 'black',
        top: 0
      }}
    >
      {playlists.map((playlist) => (
        <>
          <div className="playlist-item" key={playlist.id}>
            <Link
              to={`/playlist/${playlist.id}`}
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >
              <span className="playlist-item-text">{playlist.snippet.title}</span>
            </Link>
          </div>

          {videosList[playlist.id] && (
            <div>
              <Carousel
                autoPlay
                autoPlaySpeed={2000}
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
              >
                {videosList[playlist.id].map((video) => (
                  <div
                    className="card"
                    key={video.id}
                    style={{ textAlign: 'center', padding: '10px' }}
                    onClick={() => {
                      handleCardClick(video.snippet.resourceId.videoId, video.id, playlist.id);
                    }}
                  >
                    {/* <Link to={`/detail/${playlist.id}`}> */}
                    <img
                      style={{ maxWidth: '100%', maxHeight: 'auto' }}
                      src={video.snippet.thumbnails.medium.url}
                      alt={`${video.snippet.title} 썸네일`}
                    />
                    {/* </Link> */}
                    <h3>{video.snippet.title}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Main;
