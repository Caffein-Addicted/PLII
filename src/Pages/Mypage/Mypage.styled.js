import styled from 'styled-components';

export const Title = styled.h2`
  color: white;
`;

export const PlaylistTitle = styled.h3`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  text-decoration: none;
  margin-top: 24px;
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
