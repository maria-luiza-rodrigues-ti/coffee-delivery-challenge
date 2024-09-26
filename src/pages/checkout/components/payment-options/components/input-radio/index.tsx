import { MouseEvent } from "react";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { InputRadioContainer } from "./styles";

interface InputRadioProps {
  value: string;
}

export function InputRadio({ value }: InputRadioProps) {
  function handlePaymentMethod(event: MouseEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    const stringifiedData = JSON.stringify(value);
    localStorage.setItem("@coffee-delivery:payment-method", stringifiedData);
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
