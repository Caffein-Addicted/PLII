import styled from 'styled-components';
import * as Style from '../../Common/Style';
import bgSign from '../../Images/bg_sign.png';

export const Signin = styled.div`
  background: url(${bgSign});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const SignBgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  opacity: 0.7;
`;

export const SigninCard = styled.div`
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 430px;
  background-color: var(--color-white);
  padding: 34px 48px;
  border-radius: 14px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
`;

export const Button = styled(Style.Button)`
  width: 100%;
  background-color: var(--color-black);
  color: var(--color-white);
  margin-top: 24px;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease;
  }
`;

export const ButtonGoogle = styled.button`
  margin: 38px 0 24px 0;
  border: 1px solid var(--color-gray-100);
  border-radius: 4px;
  padding: 8px 48px;
  width: 100%;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;

  &:hover {
    img {
      opacity: 0.6;
      transition: 0.2s ease;
    }
  }
`;

export const DivisionLine = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  &::before {
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    height: 1px;
    width: 100%;
    background-color: #e7e7e9;
  }
`;

export const DivisionText = styled.span`
  position: relative;
  z-index: 9;
  background-color: var(--color-white);
  font-size: 14px;
  padding: 0 18px;
  color: var(--color-gray);
`;

export const InputItem = styled.div`
  margin-top: 24px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background-color: var(--color-gray-200);
  width: 100%;
  height: 42px;
  padding-left: 8px;
  border-radius: 4px;
`;

export const AuthLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--color-gray);
  margin-top: 32px;
`;

export const ButtonText = styled.button`
  position: relative;
  background-color: transparent;
  font-weight: 700;
  color: var(--color-black);
  text-decoration: underline;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.6;
    transition: 0.2s ease;
  }
`;
