import { MouseEvent } from "react";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { InputRadioContainer } from "./styles";
import { useCart } from "../../../../../../hooks/useCart";

interface InputRadioProps {
  value: "Cartão de crédito" | "Cartão de débito" | "Dinheiro";
}

export function InputRadio({ value }: InputRadioProps) {
  const { setPaymentMethod } = useCart();

  function handlePaymentMethod(event: MouseEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;

    setPaymentMethod(value);
  }

  return (
    <InputRadioContainer>
      <input type="radio" value={value} onClick={handlePaymentMethod} />
      {value === "Cartão de crédito" && <CreditCard />}
      {value === "Cartão de débito" && <Bank />}
      {value === "Dinheiro" && <Money />}
      <span>{value}</span>
    </InputRadioContainer>
  );
}
