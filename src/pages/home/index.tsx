import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import CoffeeImage from "/assets/coffee-image.png";

import data from "../../../coffees.json";

import { CoffeeCard } from "./components/coffee-card";

import {
  BackgroundImage,
  CoffeesList,
  CoffeesListContainer,
  ImageIntroSection,
  InfoIntroductionSection,
  IntroductionSection,
  ShoppingDetailsContainer,
} from "./styles";

export interface CoffeeProps {
  id: number;
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export function Home() {
  const { coffees } = data;

  return (
    <main>
      <BackgroundImage />
      <IntroductionSection>
        <InfoIntroductionSection>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul>
            <li>
              <ShoppingDetailsContainer circlecolor="yellow-dark">
                <ShoppingCart weight="fill" color="#ffffff" />
              </ShoppingDetailsContainer>

              <span>Compra simples e segura</span>
            </li>
            <li>
              <ShoppingDetailsContainer circlecolor="base-text">
                <Package weight="fill" color="#ffffff" />
              </ShoppingDetailsContainer>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <ShoppingDetailsContainer circlecolor="yellow">
                <Timer weight="fill" color="#ffffff" />
              </ShoppingDetailsContainer>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <ShoppingDetailsContainer circlecolor="purple">
                <Coffee weight="fill" color="#ffffff" />
              </ShoppingDetailsContainer>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </InfoIntroductionSection>

        <ImageIntroSection>
          <img src={CoffeeImage} />
        </ImageIntroSection>
      </IntroductionSection>

      <CoffeesListContainer>
        <h2>Nossos cafés</h2>
        <CoffeesList>
          {coffees.map((coffee: CoffeeProps) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </CoffeesList>
      </CoffeesListContainer>
    </main>
  );
}
