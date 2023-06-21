import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-top: 5rem;
  gap: 1rem;
  h1 {
    font-size: clamp(2em, 4vw, 3em);
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.pink} 0%,
      ${({ theme }) => theme.colors.yellow} 50%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  svg {
    width: 10rem !important;
    height: auto;
  }
`;
