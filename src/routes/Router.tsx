import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from '../pages/HomePage';
import ShoppingCart from '../pages/ShoppingCart';
import Details from '../pages/Details';
import Checkout from '../pages/Checkout';
import { ProductsData } from '../types';

function Router() {
  const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [itensCar, setItensCar] = useState<ProductsData[]>(cartLocalStorage);

  return (
    <Routes>
      <Route
        path="/"
        element={ <HomePage
          itensCar={ itensCar }
          setItensCar={ setItensCar }
        /> }
      />
      <Route path="/shopping-cart" element={ <ShoppingCart /> } />
      <Route path="/details/:idDetails" element={ <Details itensCar={ itensCar } /> } />
      <Route path="/checkout" element={ <Checkout setItensCar={ setItensCar } /> } />
    </Routes>
  );
}

export default Router;
