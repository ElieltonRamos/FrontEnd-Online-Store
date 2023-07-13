import styled, { keyframes } from 'styled-components';

const sh02Animation = keyframes`
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
`;

export const Button = styled.button`
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid rgb(61, 106, 255);
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: black;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;

  &:hover {
    background: rgb(61, 106, 255);
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    transition: all 0.2s ease-out;
  }

  &:hover::before {
    animation: ${sh02Animation} 0.5s 0s linear;
  }

  &::before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    transform: skewX(-20deg);
  }

  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }
`;

export const ContainerCategorys = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: Epilogue;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
