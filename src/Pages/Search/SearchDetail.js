import React, { useState, useEffect } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './Search.styled';


const SearchDetail = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const api_key = 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw';
  const navigate = useNavigate();
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
    <S.DetailCard>
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
          <S.Title>{video.snippet.title}</S.Title>
        </div>
      ) : (
        <p>로딩중입니다...</p>
      )}
       <S.BackBtn onClick={() => navigate(-1)}>뒤로가기</S.BackBtn>
      </S.DetailCard>
     
    </>
  );
};

export default SearchDetail;
