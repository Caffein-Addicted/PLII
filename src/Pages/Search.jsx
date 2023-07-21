import React, { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  const api_key = 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw';
  const channel_id = 'UCRbI1cqUoaea8LTJA2q9ShA';

  const queryClient = useQueryClient();

  const fetchData = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channel_id}&maxResults=50&key=${api_key}`
    );
    return response.data.items;
  };

  const { data, isLoading, isError, error } = useQuery('data', fetchData);

  const mutation = useMutation(
    async () => {
      await axios.post('http://localhost:4000/searchData', data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('data');
      }
    }
  );

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
        저장하기
      </button>

      <div>
        {data.map((playlist) => {
          return (
            <>
              <div>{playlist.snippet.title}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;
