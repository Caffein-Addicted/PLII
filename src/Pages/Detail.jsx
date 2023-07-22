import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getYoutubeData } from '../Redux/modules/youtubeDataSlice';

const Detail = () => {
  const disPatch = useDispatch();

  const { youtubeDatas, isLoading, error } = useSelector((state) => {
    return state.youtubeDataSlice;
  });

  useEffect(() => {
    disPatch(__getYoutubeData());
    console.log({ youtubeDatas });
  }, []);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>에러</div>;
  }

  return (
    <>
      <div>
        {youtubeDatas.map((youtubeData) => {
          return <div>{youtubeData.title}</div>;
        })}
      </div>
    </>
  );
};

export default Detail;
