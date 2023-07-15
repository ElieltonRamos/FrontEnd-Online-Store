import styled from 'styled-components';

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2.5rem;
  gap: 1.5rem;
`;

export const CardProduct = styled.div`
  justify-content: space-between;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
              0 0  0 2px rgb(190, 190, 190),
              0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

export const ButtonProduct = styled.button`
  background-color: #31C28D;
  border: none;
  color: #FFF;
  text-align: center;
  font-family: Epilogue;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 85%;
  margin-bottom: 1rem;
`;

export const TitleProduct = styled.p`
  color: #000;
  text-align: center;
  font-family: Epilogue;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
`;

export const Price = styled.p`
  color: #444955;
  font-family: Epilogue;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
