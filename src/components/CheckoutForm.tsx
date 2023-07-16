import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormData, ProductsData } from '../types';
import { ContainerInput, Form } from '../Styles/Checkout.styles';
import { InputSearch } from '../Styles/HomePage.styles';
import { ButtonProduct } from '../Styles/SearchList.styles';

type CheckoutFormProps = {
  setItensCar: React.Dispatch<React.SetStateAction<ProductsData[]>>
};

function CheckoutForm({ setItensCar }: CheckoutFormProps) {
  const [userData, setUserData] = useState<FormData>(
    {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      zipcode: '',
      address: '',
      payment: '',
    },
  );
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => (
      {
        ...prevData,
        [name]: value,
      }
    ));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = Object.values(userData);
    const hasEmptyValues = values.some((value) => value.length === 0);

    if (values.length === 7 && !hasEmptyValues) {
      setItensCar([]);
      navigate('/page-end');
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <ContainerInput>

        <InputSearch
          type="text"
          name="name"
          placeholder="Nome Completo"
          value={ userData.name }
          onChange={ handleChange }
          data-testid="checkout-fullname"
        />
        <InputSearch
          type="text"
          name="email"
          placeholder="Email"
          value={ userData.email }
          onChange={ handleChange }
          data-testid="checkout-email"
        />
        <InputSearch
          type="text"
          name="cpf"
          placeholder="CPF"
          value={ userData.cpf }
          onChange={ handleChange }
          data-testid="checkout-cpf"
        />
        <InputSearch
          type="text"
          name="phone"
          placeholder="Telefone"
          value={ userData.phone }
          onChange={ handleChange }
          data-testid="checkout-phone"
        />
        <InputSearch
          type="text"
          name="zipcode"
          placeholder="CEP"
          value={ userData.zipcode }
          onChange={ handleChange }
          data-testid="checkout-cep"
        />
        <InputSearch
          type="text"
          name="address"
          placeholder="Endereço"
          value={ userData.address }
          onChange={ handleChange }
          data-testid="checkout-address"
        />
      </ContainerInput>
      <section>
        <label htmlFor="ticket">
          <input
            type="radio"
            name="payment"
            value="boleto"
            data-testid="ticket-payment"
            onChange={ handleChange }
          />
          Boleto
        </label>
        <label htmlFor="card">
          <input
            type="radio"
            id="card"
            name="payment"
            value="visa"
            data-testid="visa-payment"
            onChange={ handleChange }
          />
          Visa
        </label>
        <label htmlFor="card">
          <input
            type="radio"
            id="card"
            name="payment"
            value="mastercard"
            data-testid="master-payment"
            onChange={ handleChange }
          />
          MasterCard
        </label>
        <label htmlFor="card">
          <input
            type="radio"
            id="card"
            name="payment"
            value="elo"
            data-testid="elo-payment"
            onChange={ handleChange }

          />
          Elo
        </label>
      </section>
      <ButtonProduct
        type="submit"
        data-testid="checkout-btn"
      >
        Comprar
      </ButtonProduct>
      {errorMsg ? <p data-testid="error-msg">Campos inválidos</p> : null}
    </Form>
  );
}

export default CheckoutForm;
