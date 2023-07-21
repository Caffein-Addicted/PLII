import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getYoutubeData } from '../Redux/modules/youtubeDataSlice';

const Detail = () => {
  const disPatch = useDispatch();

  const { youtubeDatas } = useSelector((state) => {
    return state.youtubeDataSlice.youtubeDatas;
  });

  useEffect(() => {
    disPatch(__getYoutubeData());
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default Detail;
