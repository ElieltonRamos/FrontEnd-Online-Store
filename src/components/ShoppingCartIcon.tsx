import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsData } from '../types';

type PropsIconCart = {
  itensCar: ProductsData[];
};

function ShoppingCartIcon({ itensCar }: PropsIconCart) {
  const qtdCarrinho = JSON.parse(localStorage.getItem('qtdCarrinho') || '0');
  const [amountCart, setAmountCart] = useState(qtdCarrinho);
  const navigate = useNavigate();

  useEffect(() => {
    const setAmountIcon = () => {
      const quantityCart = itensCar
        .reduce((acumulador: number, produto: ProductsData) => {
          return acumulador + produto.quantidade;
        }, 0);
      localStorage.setItem('qtdCarrinho', JSON.stringify(quantityCart));
      setAmountCart(quantityCart);
    };
    setAmountIcon();
  }, [itensCar]);

  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
        alt="cart icon"
        width="50px"
      />
      <p data-testid="shopping-cart-size">{amountCart}</p>
      <button
        onClick={ () => navigate('shopping-cart') }
        data-testid="shopping-cart-button"
      >
        Carrinho
      </button>
    </div>
  );
}

export default ShoppingCartIcon;
