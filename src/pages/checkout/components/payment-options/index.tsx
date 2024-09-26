import { CurrencyDollar } from "@phosphor-icons/react";
import { PaymentFormContainer, PaymentOptionsContainer } from "./styles";
import { PaymentFormTitleContainer } from "../../styles";
import { InputRadio } from "./components/input-radio";

export function PaymentOptions() {
  return (
    <PaymentFormContainer>
      <PaymentFormTitleContainer>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentFormTitleContainer>
      <PaymentOptionsContainer>
        <InputRadio value={"Cartão de crédito"} />
        <InputRadio value={"Cartão de débito"} />
        <InputRadio value={"Dinheiro"} />
      </PaymentOptionsContainer>
    </PaymentFormContainer>
  );
}
