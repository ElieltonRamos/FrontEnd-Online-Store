import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ProductsData } from '../types';
import { ButtonProduct, CardProduct, ContainerProducts,
  TitleProduct, Price, PriceContainer } from '../Styles/SearchList.styles';
import Loading from '../components/Loading';

type SearchListProps = {
  products: ProductsData[];
  itensCar: ProductsData[];
  setItensCar: React.Dispatch<React.SetStateAction<ProductsData[]>>
  loading: boolean;
};

function SearchList({ products, itensCar, setItensCar, loading }: SearchListProps) {
  const handleClickAddCar = (product: ProductsData) => {
    const verifyProduct = itensCar.find((element) => element.id === product.id);
    if (!verifyProduct) {
      const newProduct = { ...product, quantidade: 1 };
      setItensCar((prevState) => [...prevState, newProduct]);
    } else {
      verifyProduct.quantidade += 1;
      const newlistCar = itensCar.filter((el) => el.id !== verifyProduct.id);
      setItensCar([...newlistCar, verifyProduct]);
    }
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(itensCar));
  }, [itensCar]);

  return (
    <section>
      {
        loading
          ? (
            <Loading />
          ) : (
            <ContainerProducts>
              {
              products.map((product: ProductsData) => (
                <CardProduct key={ product.id } data-testid="product">
                  <Link
                    data-testid="product-detail-link"
                    to={ `/details/${product.id}` }
                  >
                    <img src={ product.thumbnail } alt="" height="130rem" />
                    <TitleProduct>{ product.title }</TitleProduct>
                    <PriceContainer>
                      <Price style={ { fontSize: '1rem', marginTop: '3%' } }>R$</Price>
                      <Price>{ product.price }</Price>
                    </PriceContainer>
                    {product.shipping.free_shipping ? (
                      <p data-testid="free-shipping">Frete grátis!</p>
                    ) : (
                      null
                    )}
                  </Link>
                  <ButtonProduct
                    data-testid="product-add-to-cart"
                    onClick={ () => handleClickAddCar(product) }
                  >
                    Adicionar ao Carrinho
                  </ButtonProduct>
                </CardProduct>
              ))
            }

            </ContainerProducts>
          )
      }
    </section>
  );
}

export default SearchList;
