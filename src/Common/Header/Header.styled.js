import styled from 'styled-components';
import * as Style from '../Style';
import { Link } from 'react-router-dom';

export const Header = styled.header({
  top: '0',
  position: 'fixed',
  width: '245px',
  height: '100%',
  borderRight: '1px solid #1a1a1a',
  padding: '20px',
  backgroundColor: 'var(--color-black)'
});

export const Logo = styled.img({
  height: '16px',
  marginBottom: '24px'
});

export const Button = styled(Style.Button)`
  width: 100%;
`;

export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
  margin-bottom: '12px';
`;

export const ProfileAvatar = styled.figure`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--color-gray);

  & img {
    object-fit: cover;
  }
`;
// 작업
export const ProfileName = styled.h3`
  font-size: 18px;
  color: var(--color-gray);
  margin-left: 9px;
`;

export const ProfileLoginLink = styled(Link)`
  font-size: 18px;
  color: var(--color-gray);
  margin-left: 9px;
  text-decoration: none;
  cursor: pointer;
`;
