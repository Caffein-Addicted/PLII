import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SearchDetail = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const api_key = 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw';

  console.log(videoId);
  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const {
          data: { items },
        } = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${api_key}`
        );
        setVideo(items[0]);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  return (
    <>
    <div style={{backgroundColor:"white", width:"800px",height:"500px",}}>
      {video ? (
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h1>{video.snippet.title}</h1>
        </div>
      ) : (
        <p>Loading video details...</p>
      )}
      </div>
    </>
  );
};

export default SearchDetail;
