import styled from 'styled-components';

export const Title = styled.h2`
  display: inline-block;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
  text-decoration: none;
  color: var(--color-white);
`;

export const Description = styled.p`
  font-size: 18px;
  color: var(--color-gray);
  margin-top: 4px;
`;

export const Count = styled.p`
  font-size: 18px;
  color: var(--color-white);
  margin-top: 4px;
`;

export const PlayListWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 280px;
  margin-bottom: 48px;
`;

export const PlayListInner = styled.div`
  padding: 30px 60px;
  display: flex;
`;

export const PlayListInfo = styled.div`
  margin: 16px 0 0 32px;
`;

export const PlayListFigure = styled.figure`
  /* width: 200px; */
  height: 200px;
  overflow: hidden;
`;

export const PlayListImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlayListBackground = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
export const PlayListBackgroundImg = styled.img`
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

export const PlaylistInner = styled.div`
  position: relative;
  display: flex;
  z-index: 99;
  padding: 30px 60px;
`;

export const PlaylistInfo = styled.div`
  margin: 16px 0 0 32px;
`;

export const VideoList = styled.div`
  margin-bottom: 64px;
`;

export const VideoListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ItemTitle = styled.label`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-white);
`;

export const iconWrapper = styled.ul`
  height: 100%;
  display: flex;

  li {
    margin-left: 18px;
  }
`;

export const iconList = styled.li`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;
