import { MouseEvent } from "react";

import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useCart } from "../../../../hooks/useCart.tsx";
import { CartItem } from "../../../../reducers/cart-items/reducer.ts";

import {
  ProductCardContainer,
  ProductDetailsContainer,
  QuantityContainer,
  RemoveButton,
  ProductPrice,
  CoffeeQuantity,
} from "./styles";

interface ProductCardProps {
  cartProduct: CartItem;
  key: number;
}

export function ProductCard({ cartProduct }: ProductCardProps) {
  const {
    incrementProductQuantity,
    decrementProductQuantity,
    removeItemFromCart,
  } = useCart();

  const totalProductPrice = cartProduct.price * cartProduct.quantity;
  const totalProductPriceFormatted = totalProductPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function handleDecrementProductQuantity(
    event: MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    if (cartProduct.quantity === 1) {
      removeItemFromCart(cartProduct);
    }

    decrementProductQuantity(cartProduct);
  }

  function handleIncrementProductQuantity(
    event: MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    incrementProductQuantity(cartProduct);
  }

  function handleRemoveProduct(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    removeItemFromCart(cartProduct);
  }

  return (
    <ProductCardContainer>
      <ProductDetailsContainer>
        <img src={cartProduct.image} />
        <QuantityContainer>
          <h3>{cartProduct.title}</h3>
          <CoffeeQuantity>
            <button onClick={handleDecrementProductQuantity}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{cartProduct.quantity}</span>
            <button onClick={handleIncrementProductQuantity}>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeQuantity>
          <RemoveButton onClick={handleRemoveProduct}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </QuantityContainer>
      </ProductDetailsContainer>
      <div>
        <ProductPrice>{totalProductPriceFormatted}</ProductPrice>
      </div>
    </ProductCardContainer>
  );
}
