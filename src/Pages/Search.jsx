import axios from 'axios';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

const Search = () => {
  const queryClient = new useQueryClient();

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
      <div>
        {data.map((searchResultItem) => {
          return (
            <>
              <div key={searchResultItem.id}>{searchResultItem.title}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;
