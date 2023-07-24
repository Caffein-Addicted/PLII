import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  text-decoration: none;
  margin-top: 24px;
  color: var(--color-white);
`;

export const SearchText = styled.span`
  font-size: 18px;
  color: var(--color-gray);
  margin-left: 14px;
`;

export const SearchItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
`;

export const VideoItem = styled(Link)`
  margin-right: 20px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 18px;
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
  margin-top: 6px;
  line-height: 1.4;
  font-weight: 400;
  color: var(--color-white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
