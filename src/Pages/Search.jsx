import React, { useContext, useEffect, useState } from 'react';
import { YoutubeDataContext } from '../context/YoutubeDataContext';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Search = () => {
  const { videosList, playlists } = useContext(YoutubeDataContext);
  const { searchValue } = useParams();
  const [data, setData] = useState([]);

  const getPlayLists = () => {
    const getData = playlists.map((playlist) => {
      return videosList[playlist.id].map((video) => {
        return video.snippet.title;
      });
    });

    return getData;
  };

  // const getDataResult = getPlayLists();

  console.log('playlists', playlists);
  console.log('getPlayLists: ', getPlayLists());

  useEffect(() => {
    getPlayLists();
  }, []);

  // 검색어에 일치하는 결과만 필터링
  const filteredData = playlists.filter((item) => item.snippet.title.toLowerCase().includes(searchValue.toLowerCase()));
  console.log('filteredData: ', filteredData);

  return (
    <>
      {/* <div style={{ color: '#fff' }}>{getDataResult}</div> */}
      <div>
        fiter : {filteredData}
        {filteredData.map((playlist) => {
          return (
            <>
              <div key={playlist.id}>
                <span>{playlist.snippet.title}</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;
