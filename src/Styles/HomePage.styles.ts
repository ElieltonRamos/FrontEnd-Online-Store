import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
  background-color: blue;
  height: 9.25rem;
  display: flex;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleChild = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 2rem;
`;

export const H2 = styled.h2`
  color: white;
  font-size: 1.5rem;
  margin-top: -0.9rem;
`;

export const ImgSacola = styled.img`
  width: 3.41863rem;
  height: 3.86694rem;
`;

export const ImgLogo = styled.img`
  width: 2.11944rem;
  height: 2.05444rem;
  margin-left: -43px;
  margin-bottom: 5px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

export const InputSearch = styled.input`
  border: none;
  padding: 0.5rem;
  border-radius: 1rem;
  background: #e8e8e8;
  transition: 0.3s;

  &:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;
    transition: 0.3s;
  }
`;

const shakeBack = keyframes`
  0% {
    transform: translate(-100%, 100%);
  }
  
  50% {
    transform: translate(20%, -20%);
  }
  
  100% {
    transform: translate(0%, 0%);
  }
`;

export const ButtonSearch = styled.button`
  position: relative;
  border: none;
  background-color: white;
  color: #212121;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  gap: 10px;
  border-radius: 10px;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;
  
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  
  &::before {
    content: "";
    position: absolute;
    background-color: palevioletred;
    width: 100%;
    height: 100%;
    left: 0%;
    bottom: 0%;
    transform: translate(-100%, 100%);
    border-radius: inherit;
  }
  
  svg {
    fill: palevioletred;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  &:hover::before {
    animation: ${shakeBack} 0.6s forwards;
  }
  
  &:hover svg {
    fill: white;
    scale: 1.3;
  }
  
  &:active {
    box-shadow: none;
  }
`;

export const Form = styled.form`
  display: flex;
  height: 2rem;
`;
