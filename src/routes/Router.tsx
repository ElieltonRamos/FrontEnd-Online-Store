import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from '../pages/HomePage';
import ShoppingCart from '../pages/ShoppingCart';
import Details from '../pages/Details';
import Checkout from '../pages/Checkout';
import { ProductsData } from '../types';
import Categories from '../components/Categories';
import SearchList from '../components/SearchList';

function Router() {
  const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [itensCar, setItensCar] = useState<ProductsData[]>(cartLocalStorage);
  const [products, setProducts] = useState<ProductsData[]>([]);

  return (
    <Routes>
      <Route
        path="/"
        element={ <HomePage
          products={ products }
          setProducts={ setProducts }
          itensCar={ itensCar }
          setItensCar={ setItensCar }
        /> }
      >
        <Route path="/categorys" element={ <Categories setProducts={ setProducts } /> } />
        <Route path="/shopping-cart" element={ <ShoppingCart /> } />
        <Route path="/details/:idDetails" element={ <Details itensCar={ itensCar } /> } />
        <Route path="/checkout" element={ <Checkout setItensCar={ setItensCar } /> } />
        <Route
          path="/searchList"
          element={ <SearchList
            itensCar={ itensCar }
            products={ products }
            setItensCar={ setItensCar }
          /> }
        />
      </Route>
    </Routes>
  );
}

export default Router;
