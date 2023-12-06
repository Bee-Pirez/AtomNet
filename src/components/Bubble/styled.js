// Bubble.jsx
import styled, { keyframes } from 'styled-components';

const moveBubbles1 = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(150px, 150px);
  }
  50% {
    transform: translate(300px, 0);
  }
  75% {
    transform: translate(150px, -150px);
  }
`;

const moveBubbles2 = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-150px, -150px);
  }
  50% {
    transform: translate(-300px, 0);
  }
  75% {
    transform: translate(-150px, 150px);
  }
`;

const moveBubbles3 = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(225px, -225px);
  }
  50% {
    transform: translate(450px, 0);
  }
  75% {
    transform: translate(225px, 225px);
  }
`;

export const BubbleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 9rem;
`;

const Bubble = styled.svg`
  flex-shrink: 0;
  filter: blur(100px);
  position: absolute;
`;

export const Bubble1 = styled(Bubble)`
  width: 60rem;
  height: 46.8125rem;
  animation: ${moveBubbles1} 8s infinite ease-in-out;
`;

export const Bubble2 = styled(Bubble)`
  width: 80rem;
  height: 59.375rem;
  animation: ${moveBubbles2} 8s infinite ease-in-out;
`;

export const Bubble3 = styled(Bubble)`
  width:45rem;
  height: 41.49663rem;
  animation: ${moveBubbles3} 8s infinite ease-in-out;
`;