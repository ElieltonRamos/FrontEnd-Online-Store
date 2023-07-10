import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { ProductsData } from '../types';
import Categories from '../components/Categories';
import SearchList from '../components/SearchList';
import Loading from '../components/Loading';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

type PropsHomePage = {
  itensCar: ProductsData[];
  setItensCar: React.Dispatch<React.SetStateAction<ProductsData[]>>
};

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
    <main>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="search"
          data-testid="query-input"
          value={ searchInput }
          onChange={ (e) => setSearchInput(e.target.value) }
        />
        <Button data-testid="query-button" type="submit">Buscar</Button>
      </form>
      <button
        onClick={ handleClick }
        data-testid="shopping-cart-button"
      >
        Carrinho
      </button>
      <ShoppingCartIcon itensCar={ itensCar } />
      <Categories setProducts={ setProducts } />
      {loading ? <Loading /> : <SearchList
        products={ products }
        itensCar={ itensCar }
        setItensCar={ setItensCar }
      /> }
    </main>
  );
}

export default HomePage;
