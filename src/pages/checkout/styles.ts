import styled from "styled-components";
import { AddressAndPaymentContainer, AddressFormTitleContainer } from "./components/address-form/styles";

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto 5rem;
  padding: 0 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  a { text-decoration: none}

  @media  (min-width: 1200px) {
    margin: 0 auto 10rem;

    padding: 0;

    display: grid;
    grid-template-columns: minmax(auto, 40rem) minmax(auto, 28rem);
    grid-template-rows: repeat(2, auto);
    gap: .75rem 2rem; 
  }
`

export const PaymentFormTitleContainer = styled(AddressFormTitleContainer)`
    svg {
    fill: ${(props) => props.theme['purple']};
  }
`

export const OrderResumeContainer = styled(AddressAndPaymentContainer)`
  width: 100%;

  @media  (min-width: 1200px) {
    grid-column: 2 / 3;
    grid-row: 1/ 3;
  }
`

export const ResumeContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  li {
    list-style: none;

    display: flex;
    justify-content: space-between;
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmOrderButton = styled.button`
  margin-top: 1.5rem;
  padding: .75rem .5rem;

  display: flex;
  justify-content: center;
  width: 100%;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow']};

  color: ${(props) => props.theme.white};
  font-size: .875rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  transition: all .3s ease-in-out;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`