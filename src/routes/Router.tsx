import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from '../pages/HomePage';
import ShoppingCart from '../pages/ShoppingCart';
import Details from '../pages/Details';
import Checkout from '../pages/Checkout';
import { ProductsData } from '../types';
import Categories from '../pages/Categories';
import SearchList from '../pages/SearchList';
import PageEnd from '../pages/PageEnd';

function Router() {
  const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [itensCar, setItensCar] = useState<ProductsData[]>(cartLocalStorage);
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [Loading, setLoading] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={ <HomePage
          setLoading={ setLoading }
          products={ products }
          setProducts={ setProducts }
          itensCar={ itensCar }
          setItensCar={ setItensCar }
        /> }
      >
        <Route path="/categorys" element={ <Categories setProducts={ setProducts } /> } />
        <Route
          path="/shopping-cart"
          element={ <ShoppingCart
            products={ itensCar }
            setProducts={ setItensCar }
          /> }
        />
        <Route path="/details/:idDetails" element={ <Details /> } />
        <Route path="/checkout" element={ <Checkout setItensCar={ setItensCar } /> } />
        <Route path="/page-end" element={ <PageEnd /> } />
        <Route
          path="/searchList"
          element={ <SearchList
            loading={ Loading }
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
