import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { ProductDetailsData } from '../types';
import Attributes from '../components/Attributes';
import Loading from '../components/Loading';
import Rating from '../components/Rating';
import { ButtonProduct, CardProduct, Price, PriceContainer,
  TitleProduct } from '../Styles/SearchList.styles';
import { DetailsContainer } from '../Styles/Details.styles';

function Details() {
  const [productInfo, setProductInfo] = useState({} as ProductDetailsData);
  const { idDetails } = useParams();

  function handleClickAddToCart(product: ProductDetailsData) {
    const productsList = JSON.parse(localStorage.getItem('cart') || '[]');
    const verifyProduct = productsList
      .find((element: { id: string; }) => element.id === product.id);
    if (!verifyProduct) {
      const newProduct = { ...product, quantidade: 1 };
      const newProductsList = [...productsList, newProduct];
      localStorage.setItem('cart', JSON.stringify(newProductsList));
    } else {
      verifyProduct.quantidade += 1;
      const newlistCar = productsList
        .filter((el: { id: any; }) => el.id !== verifyProduct.id);
      const newListCart2 = [...newlistCar, verifyProduct];
      localStorage.setItem('cart', JSON.stringify(newListCart2));
    }
  }

  useEffect(() => {
    async function getProduct() {
      if (idDetails) {
        const data = await getProductById(idDetails);
        setProductInfo(data);
      }
    }
    getProduct();
  }, [idDetails]);

  return (
    <main>
      {productInfo.attributes ? (
        <DetailsContainer>
          <CardProduct style={ { padding: '2rem', gap: '10px' } }>
            <TitleProduct data-testid="product-detail-name">
              {productInfo.title}
            </TitleProduct>
            <PriceContainer>
              <Price style={ { fontSize: '1rem', marginTop: '13%' } }>R$</Price>
              <Price>{ productInfo.price }</Price>
            </PriceContainer>
            {productInfo.shipping.free_shipping
            && <p data-testid="free-shipping">Frete grátis!</p>}
            <img
              data-testid="product-detail-image"
              src={ productInfo.thumbnail }
              alt=""
              height="150rem"
            />
            <ButtonProduct
              data-testid="product-detail-add-to-cart"
              onClick={ () => handleClickAddToCart(productInfo) }
            >
              Adicionar ao carrinho
            </ButtonProduct>
          </CardProduct>
          <div>
            <Attributes productInfo={ productInfo } />
            <Rating />
          </div>
        </DetailsContainer>
      ) : (
        <Loading />
      )}
    </main>
  );
}

export default Details;
