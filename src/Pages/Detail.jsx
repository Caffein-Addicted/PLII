import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useContext } from 'react';
import { YoutubeDataContext } from '../context/YoutubeDataContext';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { videosList, playlists } = useContext(YoutubeDataContext);
  const { inputValue } = useParams();

  console.log('data : ', videosList);

  return <>데이터 테스트 :</>;
};

export default Detail;
