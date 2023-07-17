import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductsData } from '../types';
import { ButtonProduct, CardProduct, ContainerProducts,
  TitleProduct } from '../Styles/SearchList.styles';
import { ButtonContainer } from '../Styles/ShoppingCart.styles';

type PropsShoppingCart = {
  products: ProductsData[];
  setProducts: React.Dispatch<React.SetStateAction<ProductsData[]>>;
};

const AlertCustom = (message: string) => {
  let timerInterval: string | number | NodeJS.Timer | undefined;
  Swal.fire({
    title: message,
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      setInterval(() => {
        Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
};

function ShoppingCart({ products, setProducts }: PropsShoppingCart) {
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products));
  }, [products]);

  function handleIncrease(id: string) {
    const product = products.find((e) => e.id === id);
    if (product && product.quantidade < product.available_quantity) {
      const newObject = { ...product, quantidade: product.quantidade + 1 };
      const newList = products.map((el) => (el.id !== product.id ? el : newObject));
      setProducts(newList);
    } else {
      AlertCustom('Quantidade Indisponivel para esse Produto');
    }
  }

  function handleDecrease(id: string) {
    const product = products.find((e) => e.id === id);
    if (product && product.quantidade > 1) {
      const newObject = { ...product, quantidade: product.quantidade - 1 };
      const newList = products.map((el) => (el.id !== product.id ? el : newObject));
      setProducts(newList);
    }
    if (product && product.quantidade === 1) {
      AlertCustom('Deseja remover esse produto?');
    }
  }

  function handleDelete(id: string) {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
    AlertCustom('Produto Removido com Sucesso!');
  }

  return (
    <>
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
      </ContainerProducts>
      <Link to="/checkout" style={ { marginLeft: '100px' } }>
        <ButtonProduct data-testid="checkout-products">
          Finalizar compra
        </ButtonProduct>
      </Link>
    </>
  );
}

export default ShoppingCart;
