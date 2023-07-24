import styled from 'styled-components';

export const playBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  background-color: #191919;
  width: 100%;
  height: 65px;
  padding: 0 62px;
`;

export const playIconWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

export const Play = styled.a`
  margin: 0 22px;
`;

export const Next = styled.a`
  margin-right: 34px;
`;

export const Prev = styled.a`
  margin-left: 34px;
`;

export const YoutubeVideo = styled.iframe`
  /* display: none; */
`;

export const playIconRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SoundBarWrapper = styled.div`
  width: 120px;
  height: 4px;
  border-radius: 10px;
  background-color: #3c3c3c;
`;

export const SoundBarProgress = styled.div`
  width: 50%;
  height: inherit;
  background-color: #5c5c5c;
`;

export const SoundBar = styled.div`
  display: flex;
  align-items: center;
`;

export const IcoSound = styled.img`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

export const IcoPlayList = styled.img`
  margin-left: 20px;
`;

export const VideoTime = styled.div`
  margin-right: 20px;
  color: #fff;
`;

export const PlayBarAlbum = styled.figure`
  width: 38px;
  height: 38px;
  background-color: #d9d9d9;
`;

export const PlayBarTitle = styled.figure`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
`;

export const PlayBarArtist = styled.figure`
  font-size: 14px;
  font-weight: 500;
  color: #999;
`;

export const PlayBarLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayBarContentWrapper = styled.div`
  margin-left: 14px;
`;
