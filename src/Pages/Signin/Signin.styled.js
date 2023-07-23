import styled from 'styled-components';

export const Signin = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const SigninCard = styled.div`
  position: absolute;
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

export const ButtonGoogle = styled.button`
  border: 1px solid #e7e7e9;
  border-radius: 4px;
`;
