/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LogoSacola from '../Public/Group1.svg';
import Logo from '../Public/Group.svg';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { PropsHomePage } from '../types';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import * as Styled from '../Styles/HomePage.styles';

const path = `M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 
  9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 
  6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 
  12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z`;

function HomePage({ products, itensCar, setProducts }: PropsHomePage) {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const getData = async () => {
      const data = await getProductsFromCategoryAndQuery('', searchInput);
      setProducts(data.results);
      navigate('/searchList');
    };

    getData();
  };

  const handleClickCategory = () => {
    setProducts([{
      quantidade: 1,
      id: '1',
      title: 'so pra index',
      thumbnail: 'string',
      currency_id: 'string',
      price: 0.00,
      available_quantity: 1,
      shipping: {
        free_shipping: true,
      },
    }]);
    navigate('/categorys');
  };

  return (
    <>
      <Styled.Header>
        <Styled.TitleChild>
          <Styled.Form onSubmit={ handleSubmit }>
            <Styled.InputSearch
              type="text"
              name="search"
              data-testid="query-input"
              value={ searchInput }
              onChange={ (e) => setSearchInput(e.target.value) }
            />
            <Styled.ButtonSearch>
              <span>
                <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d={ path } />
                </svg>
              </span>
            </Styled.ButtonSearch>
          </Styled.Form>
          <Styled.Title>
            <Styled.ContainerTitle>
              <div>
                <Styled.ImgSacola src={ LogoSacola } />
                <Styled.ImgLogo src={ Logo } />
              </div>
              <div>
                <Styled.H1>FRONT-END</Styled.H1>
                <Styled.H2>online store</Styled.H2>
              </div>
            </Styled.ContainerTitle>
          </Styled.Title>
          <ShoppingCartIcon itensCar={ itensCar } />
        </Styled.TitleChild>
      </Styled.Header>
      <button onClick={ handleClickCategory }>Exibir Categorias</button>
      {products.length === 0 ? <div>faca uma busca</div> : <Outlet />}
    </>
  );
}

export default HomePage;
