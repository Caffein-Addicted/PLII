import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Style from '../../Common/Style';

export const Title = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  text-decoration: none;
  margin-top: 24px;
  color: var(--color-white);
`;

export const InputItem = styled.div`
  margin-top: 24px;
  width: 30%;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background-color: var(--color-gray-200);
  width: 100%;
  height: 42px;
  padding-left: 8px;
  border-radius: 4px;
`;

export const InputImg = styled.input`
  color: #fff;
`;

export const Button = styled(Style.Button)`
  width: 180px;
  background-color: #fff;
  color: #000;
  margin-top: 24px;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease;
  }
`;

export const ButtonText = styled(Link)`
  display: block;
  text-decoration: underline;
  margin-top: 60px;
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
