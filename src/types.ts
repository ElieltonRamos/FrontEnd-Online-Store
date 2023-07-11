export type ProductsData = {
  quantidade: number;
  id: string;
  title: string;
  thumbnail: string;
  currency_id: string;
  price: number;
  available_quantity: number
  shipping: {
    free_shipping: boolean;
  }
};

type Attributes = {
  id: string;
  name: string;
  value_name: string;
};

export type ProductDetailsData = {
  quantidade: number;
  id: string;
  title: string;
  thumbnail: string;
  currency_id: string;
  price: number;
  shipping: {
    free_shipping: boolean;
  };
  attributes: Attributes[];
};

export type FormData = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  zipcode: string;
  address: string;
  payment: string;
};

export type PropsHomePage = {
  itensCar: ProductsData[];
  setItensCar: React.Dispatch<React.SetStateAction<ProductsData[]>>
};
