import styled from 'styled-components';

export const Main = styled.div`
  top: 0;
`;

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

export const Banner = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin-top: 63px;
  margin-bottom: 24px;
`;

export const BannerFigure = styled.figure`
  width: 100%;
  height: 100%;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerIcon = styled.img`
  height: 24px;
  margin-bottom: 8px;
`;

export const BannerWrapper = styled.div`
  padding: 40px 90px 40px 60px;
  background-color: #35393d;
`;

export const BannerTitle = styled.h2`
  color: var(--color-white);
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const BannerDesc = styled.p`
  font-size: 18px;
  color: var(--color-gray);
  line-height: 1.4;
`;

export const BannerTime = styled.p`
  font-size: 18px;
  color: var(--color-gray);
  line-height: 1.4;
  margin-top: 18px;
`;
