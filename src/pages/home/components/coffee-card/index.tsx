import { useState, MouseEvent } from "react";

import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  CoffeeCardContainer,
  CoffeeTagsContainer,
  CoffeeTags,
  CoffeeDetailsContainer,
  CoffeePriceContainer,
  CoffeePrice,
  CartButton,
  CoffeeQuantity,
} from "./styles";

import { useCart } from "../../../../hooks/useCart";
import { CoffeeProps } from "../..";

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addItemToCart } = useCart();
  const [productQuantity, setProductQuantity] = useState(1);

  function removeProductQuantity(event: MouseEvent) {
    event?.preventDefault();

    if (productQuantity === 0) return;

    setProductQuantity((state) => state - 1);
  }
  function addProductQuantity(event: MouseEvent) {
    event?.preventDefault();

    setProductQuantity((state) => state + 1);
  }

  function addProductToCart() {
    const newProductAddedToCart = {
      ...coffee,
      quantity: productQuantity,
    };

    addItemToCart(newProductAddedToCart);
    setProductQuantity(1);
  }

  const productPriceFormatted = coffee.price.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={coffee.image} />
      <CoffeeTagsContainer>
        {coffee.tags.map((tag: string) => {
          return <CoffeeTags key={tag}>{tag}</CoffeeTags>;
        })}
      </CoffeeTagsContainer>

      <CoffeeDetailsContainer>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </CoffeeDetailsContainer>
      <CoffeePriceContainer>
        <CoffeePrice>
          R$ <span>{productPriceFormatted}</span>
        </CoffeePrice>
        <div>
          <CoffeeQuantity>
            <button onClick={removeProductQuantity}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{productQuantity}</span>
            <button onClick={addProductQuantity}>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeQuantity>
          <CartButton onClick={addProductToCart}>
            <ShoppingCart size={22} weight="fill" color="#ffffff" />
          </CartButton>
        </div>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  );
}
