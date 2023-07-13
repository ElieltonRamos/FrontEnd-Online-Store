import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import { ProductsData } from '../types';
import { Button, ContainerCategorys, Title } from '../Styles/Categorys.styles';

type Category = {
  id: string;
  name: string;
};

type PropComponent = {
  setProducts: React.Dispatch<React.SetStateAction<ProductsData[]>>;
};

function Categories({ setProducts }: PropComponent) {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const navigate = useNavigate();

  const handleClick = (name: string) => {
    const getData = async () => {
      const data = await getProductsFromCategoryAndQuery('', name);
      setProducts(data.results);
      navigate('/searchList');
    };
    getData();
  };

  useEffect(() => {
    const categorys = async () => {
      const listCategory = await getCategories();
      setCategoryList(listCategory);
    };
    categorys();
  }, []);

  return (
    <ContainerCategorys>
      <Title>Categorias:</Title>
      {categoryList.map((item) => {
        return (
          <Button
            onClick={ () => handleClick(item.name) }
            data-testid="category"
            key={ item.id }
          >
            {item.name}
          </Button>
        );
      })}
    </ContainerCategorys>
  );
}

export default Categories;
