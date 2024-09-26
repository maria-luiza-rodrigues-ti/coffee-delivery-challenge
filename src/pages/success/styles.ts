import styled from "styled-components";
import { BACKGROUND_COLORS, BackgroundColorProps } from "../home/styles";


export const SuccessSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  max-width: 36rem;
  margin: 0 auto 5rem;
  padding: 1rem;

  @media  (min-width: 1200px) {
    flex-direction: row;
    gap: 6.375rem;

    max-width: 70rem;
    margin: 0 auto;
    padding: 0;
  }

  & > div {
    width: 100%;
  }
`

export const IntroductionOrderDetailsContainer = styled.div`

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};

    margin-bottom: .25rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const BorderOrderDetailsContainer = styled.div`
  margin-top: 2.5rem;

  border: 1px solid;
  border-radius: 6px 36px;

  border-color: transparent;
  background-image: linear-gradient(to right, ${(props) => props.theme['yellow']}, ${(props) => props.theme['purple']});
  background-origin: border-box;
`

export const OrderDetailsContainer = styled.ul`
  padding: 2rem 1.5rem;

  max-width: 32.875rem;
  width: 100%;

  border-radius: 6px 36px;
  border: 1px solid transparent;

  background: ${(props) => props.theme["background"]};
  
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media  (min-width: 1200px) {
    padding: 2.5rem;
  }

  li {
    list-style: none;
    
    display: flex;
    align-items: center;
    gap: .75rem;
  }

  span {
    display: block;
  }
`

export const IconContainer = styled.div<BackgroundColorProps>`
  padding: .5rem;

  border-radius: 50%;

  background: ${(props) => props.theme[BACKGROUND_COLORS[props['circlecolor']]]};

  display: flex;
  align-items: center;
`

export const DeliveryImageContainer = styled.div`
  align-self: flex-end;

  img {
    width: 100%;
  }
`