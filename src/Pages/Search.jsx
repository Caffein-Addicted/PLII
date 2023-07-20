import React from 'react';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import uuid from 'react-uuid';

const Search = () => {
  const api_key = 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw';
  const channel_id = 'UCRbI1cqUoaea8LTJA2q9ShA';

  const { data, isLoading, isError, error } = useQuery('data', async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channel_id}&maxResults=50&key=${api_key}`
    );
    return response.data.items;
  });

  const mutation = useMutation(async () => {
    await axios.post('http://localhost:4000/searchData', data);
  });

  const mutation2 = useMutation(async () => {
    await axios.post('http://localhost:4000/searchData', {
      id: uuid(),
      title: '하하'
    });
  });

  if (isLoading) {
    return <div>검색 결과를 찾고 있어요.</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <button
        onClick={() => {
          mutation.mutate();
        }}
      >
        데이터 추가
      </button>
      <button
        onClick={() => {
          mutation2.mutate();
        }}
      >
        데이터 추가2
      </button>
      <div>
        {data.map((item) => {
          return (
            <>
              <div key={item.id}>{item.id}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;
