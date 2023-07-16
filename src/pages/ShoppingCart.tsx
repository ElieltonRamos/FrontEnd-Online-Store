import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsData } from '../types';
import { ButtonProduct, CardProduct, ContainerProducts,
  TitleProduct } from '../Styles/SearchList.styles';
import { ButtonContainer } from '../Styles/ShoppingCart.styles';

function ShoppingCart() {
  const [products, setProducts] = useState<ProductsData[]>([]);

  useEffect(() => {
    const itensCart = localStorage.getItem('cart');
    if (itensCart) {
      setProducts(JSON.parse(itensCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products));
  }, [products]);

  function handleIncrease(id: string) {
    const product = products.find((e) => e.id === id);
    if (product && product.quantidade < product.available_quantity) {
      const newObject = { ...product, quantidade: product.quantidade + 1 };
      const newList = products.map((el) => (el.id !== product.id ? el : newObject));
      setProducts(newList);
    }
  }

  function handleDecrease(id: string) {
    const product = products.find((e) => e.id === id);
    if (product && product.quantidade > 1) {
      const newObject = { ...product, quantidade: product.quantidade - 1 };
      const newList = products.map((el) => (el.id !== product.id ? el : newObject));
      setProducts(newList);
    }
  }

  function handleDelete(id: string) {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  }

  return (
    <ContainerProducts>
      {products.length === 0 ? (
        <h2
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </h2>
      ) : (
        products.map((element) => (
          <CardProduct key={ element.id }>
            <TitleProduct data-testid="shopping-cart-product-name">
              {element.title}
            </TitleProduct>
            <img src={ element.thumbnail } alt={ element.title } />
            <p>{`R$ ${element.price}`}</p>
            <ButtonContainer>

              <p data-testid="shopping-cart-product-quantity">
                {`Quantidade: ${element.quantidade}` }
              </p>
              <ButtonProduct
                onClick={ () => handleIncrease(element.id) }
                data-testid="product-increase-quantity"
              >
                +

              </ButtonProduct>
              <ButtonProduct
                onClick={ () => handleDecrease(element.id) }
                data-testid="product-decrease-quantity"
              >
                -

              </ButtonProduct>
              <ButtonProduct
                onClick={ () => handleDelete(element.id) }
                data-testid="remove-product"
              >
                X

              </ButtonProduct>
            </ButtonContainer>
          </CardProduct>
        ))
      )}
      <Link to="/checkout">
        <ButtonProduct data-testid="checkout-products">
          Finalizar compra
        </ButtonProduct>
      </Link>
    </ContainerProducts>
  );
}

export default ShoppingCart;
