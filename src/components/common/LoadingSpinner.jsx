// src/components/common/LoadingSpinner.jsx
import styled, { keyframes } from 'styled-components';

const LoadingSpinner = () => {
  return <Spinner>Loading...</Spinner>;
};

const spinnerAnimation = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

const Spinner = styled.div`
  background: #003f87;
  -webkit-animation: ${spinnerAnimation} 1s infinite ease-in-out;
  animation: ${spinnerAnimation} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  color: #003f87;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.16s;
  
  &:before,
  &:after {
    background: #003f87;
    animation: ${spinnerAnimation} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: '';
  }
  
  &:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }
  
  &:after {
    left: 1.5em;
  }
`;

export default LoadingSpinner;
