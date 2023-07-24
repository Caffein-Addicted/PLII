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
