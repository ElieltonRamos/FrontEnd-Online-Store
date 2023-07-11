/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoSacola from '../Public/Group1.svg';
import Logo from '../Public/Group.svg';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { ProductsData, PropsHomePage } from '../types';
import Categories from '../components/Categories';
import SearchList from '../components/SearchList';
import Loading from '../components/Loading';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import * as Styled from '../Styles/HomePage.styles';

const path = `M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 
  9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 
  6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 
  12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z`;

function HomePage({ itensCar, setItensCar }: PropsHomePage) {
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('shopping-cart');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const getData = async () => {
      const data = await getProductsFromCategoryAndQuery('', searchInput);
      setLoading(false);
      setProducts(data.results);
    };

    getData();
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
      <button
        onClick={ handleClick }
        data-testid="shopping-cart-button"
      >
        Carrinho
      </button>
      <Categories setProducts={ setProducts } />
      {loading ? <Loading /> : <SearchList
        products={ products }
        itensCar={ itensCar }
        setItensCar={ setItensCar }
      /> }
    </>
  );
}

export default HomePage;
