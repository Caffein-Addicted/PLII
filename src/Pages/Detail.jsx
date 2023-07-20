import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const Detail = () => {
  const { data, isLoading, isError, error } = useQuery('searchData', async () => {
    const response = await axios.get('http://localhost:4000/searchData');
    return response.data;
  });

  if (isLoading) {
    return <div>검색 결과를 찾고 있어요.</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <ul>
        {data[1].map((item) => {
          return <li key={item.snippet.id}>{item.snippet.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Detail;
