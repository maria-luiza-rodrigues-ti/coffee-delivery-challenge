import { PaymentOptions } from "./components/payment-options/index.tsx";
import { AddressForm } from "./components/address-form/index.tsx";
import { ProductCard } from "./components/product-card/index.tsx";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

import {
  CheckoutContainer,
  ConfirmOrderButton,
  OrderResumeContainer,
  ResumeContainer,
} from "./styles";

import { FormTitle, FormContainer } from "./components/address-form/styles.ts";

export function Checkout() {
  const { cartItems } = useCart();

  const shippingPrice = 3.5;
  const shippingPriceFormatted = shippingPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const totalProductsPrice = cartItems.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const totalProductsPriceFormatted = totalProductsPrice.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );

  const totalCartPrice = totalProductsPrice + shippingPrice;
  const totalCartPriceFormatted = totalCartPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CheckoutContainer>
      <AddressForm />
      <PaymentOptions />

      <OrderResumeContainer>
        <FormTitle>Cafés selecionados</FormTitle>
        <FormContainer>
          <ul>
            {cartItems.map((item) => (
              <ProductCard key={item.id} cartProduct={item} />
            ))}
          </ul>
          <ResumeContainer>
            <li>
              <span>Total de itens</span>
              <span>{totalProductsPriceFormatted}</span>
            </li>
            <li>
              <span>Entrega</span>
              <span>{shippingPriceFormatted}</span>
            </li>
            <li>
              <strong>Total</strong>
              <strong>{totalCartPriceFormatted}</strong>
            </li>
          </ResumeContainer>
          <NavLink to="/success" title="Success">
            <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
          </NavLink>
        </FormContainer>
      </OrderResumeContainer>
    </CheckoutContainer>
  );
}
