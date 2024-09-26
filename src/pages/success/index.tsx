import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

import DeliveryImage from "/assets/delivery-image.png";
import {
  SuccessSection,
  IntroductionOrderDetailsContainer,
  BorderOrderDetailsContainer,
  OrderDetailsContainer,
  IconContainer,
  DeliveryImageContainer,
} from "./styles";

export function Success() {
  return (
    <main>
      <SuccessSection>
        <div>
          <IntroductionOrderDetailsContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </IntroductionOrderDetailsContainer>

          <BorderOrderDetailsContainer>
            <OrderDetailsContainer>
              <li>
                <IconContainer circlecolor="purple">
                  <MapPin size={22} weight="fill" color="#ffffff" />
                </IconContainer>
                <div>
                  <span>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </span>
                  <span>Farrapos - Porto Alegre, RS</span>
                </div>
              </li>
              <li>
                <IconContainer circlecolor="yellow">
                  <Timer size={22} weight="fill" color="#ffffff" />
                </IconContainer>
                <div>
                  <span>Previsão de entrega</span>
                  <span>
                    <strong>20 min - 30 min</strong>
                  </span>
                </div>
              </li>
              <li>
                <IconContainer circlecolor="yellow-dark">
                  <CurrencyDollar size={22} color="#ffffff" />
                </IconContainer>
                <div>
                  <span>Pagamento na entrega</span>
                  <span>
                    <strong>Cartão de Crédito</strong>
                  </span>
                </div>
              </li>
            </OrderDetailsContainer>
          </BorderOrderDetailsContainer>
        </div>

        <DeliveryImageContainer>
          <img src={DeliveryImage} />
        </DeliveryImageContainer>
      </SuccessSection>
    </main>
  );
}
