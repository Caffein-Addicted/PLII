import React, { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
=======
import { useParams, Link } from 'react-router-dom';
>>>>>>> 5be7e782f7cb665d441e321f7f0c8c7d122ca23a
import * as S from './Search.styled';

const Search = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const { inputValue } = useParams();
  const api_key = 'AIzaSyAZnWv1VW6jvGMVhmMHyUexlF5G8E6qxJw';
  const channel_id = 'UCRbI1cqUoaea8LTJA2q9ShA';

  useEffect(() => {
    const fetchPlaylistsAndVideos = async () => {
      try {
        const {
          data: { items: playlists }
        } = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channel_id}&maxResults=50&key=${api_key}`
        );

        const videoPromises = playlists.map(async (playlist) => {
          const {
            data: { items: videos }
          } = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlist.id}&key=${api_key}`
          );
          return videos;
        });

        const videoLists = await Promise.all(videoPromises);
        const allVideos = videoLists.flat();
        setVideos(allVideos);
        setFilteredVideos(allVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchPlaylistsAndVideos();
  }, []);

  useEffect(() => {
    const trimmedInput = inputValue.trim().replace(/\s/g, '').toLowerCase();
    if (!trimmedInput) {
      setFilteredVideos(videos);
    } else {
      const filterVideos = videos.filter((video) =>
        video.snippet.title.replace(/\s/g, '').toLowerCase().includes(trimmedInput)
      );
      setFilteredVideos(filterVideos);
    }
  }, [inputValue, videos]);

  return (
    <>
<<<<<<< HEAD
      <S.Title>
        검색 결과 <S.SearchText>{inputValue}</S.SearchText>
      </S.Title>
      <S.SearchItemList>
        {filteredVideos.length === 0 ? (
          <p>검색결과가 없습니다. </p>
        ) : (
          filteredVideos.map((video) => {
            return (
              <S.VideoItem key={video.id} to={`/detail/${video.snippet.resourceId.videoId}`}>
                <S.Figure>
                  <S.ImgVideo src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                </S.Figure>
                <S.SubTitle>{video.snippet.title}</S.SubTitle>
              </S.VideoItem>
            );
          })
        )}
      </S.SearchItemList>
=======
      
      <S.SearchList>
          {filteredVideos.length === 0 ? (
            <S.ResultNone>
              <div> 검색결과가 없습니다. </div>
            </S.ResultNone>
          ) : (
            filteredVideos.map((video) => {
              return (
                <S.SearchCard key={video.id}>
                  <Link to={`/video/${video.snippet.resourceId.videoId}`}>
                    <S.ImgCard src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                  </Link>
                   <S.CardTitle>{video.snippet.title}</S.CardTitle>                    
                </S.SearchCard>
              );
            })
          )}
        
      </S.SearchList>
>>>>>>> 5be7e782f7cb665d441e321f7f0c8c7d122ca23a
    </>
  );
};

export default Search;
