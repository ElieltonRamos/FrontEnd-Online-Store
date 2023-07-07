import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { ProductDetailsData } from '../types';
import Attributes from '../components/Attributes';
import Loading from '../components/Loading';

function Details() {
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({} as ProductDetailsData);
  const { idDetails } = useParams();
  function handleClick() {
    navigate('/shopping-cart');
  }
  useEffect(() => {
    async function getProduct() {
      if (idDetails) {
        const data = await getProductById(idDetails);
        setProductInfo(data);
      }
    }
    getProduct();
  }, []);

  return (
    <main>
      {productInfo.attributes ? (
        <div>
          <button
            data-testid="shopping-cart-button"
            onClick={ handleClick }
          >
            Carrinho
          </button>
          <p data-testid="product-detail-name">{productInfo.title}</p>
          <p
            data-testid="product-detail-price"
          >
            {` Preço: ${productInfo.currency_id} ${productInfo.price}`}
          </p>
          <img
            data-testid="product-detail-image"
            src={ productInfo.thumbnail }
            alt=""
          />
          <Attributes productInfo={ productInfo } />
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
}

export default Details;
