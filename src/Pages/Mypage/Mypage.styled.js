import styled from 'styled-components';
import { style } from 'styled-system';

export const PlaylistWrapper = styled.div`
  margin-bottom: 38px;
`;

export const Title = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  text-decoration: none;
  margin-top: 24px;
  color: var(--color-white);
`;

export const VideoItem = styled.div`
  margin-right: 20px;
  overflow: hidden;
  cursor: pointer;
`;

export const Figure = styled.figure`
  height: 160px;
`;

export const ImgVideo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 8px; */
`;

export const SubTitle = styled.p`
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.4;
  font-weight: 400;
  color: var(--color-white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const userName = styled.p`
  font-size: 32px;
  color: var(--color-white);
  font-weight: 700;
`;

export const userEmail = styled.p`
  font-size: 18px;
  color: var(--color-gray);
  margin-top: 4px;
`;

export const ProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  margin-bottom: 48px;
`;

export const ProfileInner = styled.div`
  padding: 30px 60px;
  display: flex;
`;

export const ProfileInfo = styled.div`
  margin: 16px 0 0 32px;
`;

export const ProfileFigure = styled.figure`
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileBackground = styled.div`
  position: absolute;
  z-index: -1;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
export const ProfileBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  filter: blur(30px);
  transform: scale(1.1);
  object-fit: cover;
`;

export const BgOverlay = styled.div`
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  opacity: 0.7;
`;

export const ButtonText = styled.a`
  display: block;
  text-decoration: underline;
  margin-top: 24px;
`;

export const ButtonLogOut = styled.button`
  display: block;
  margin-top: 48px;
`;

export const PlaylistTitle = styled.h2`
  font-size: 24px;
  color: #fff;
`;
