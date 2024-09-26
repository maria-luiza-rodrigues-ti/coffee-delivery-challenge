import styled from "styled-components"

export const AddressAndPaymentContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media  (min-width: 1200px) {
    grid-template-columns: 1 / 2;
    grid-row: 1 / 2;
  }

`

export const FormTitle = styled.h2`
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 1rem;
`

export const FormContainer = styled.form`
  padding: 2.5rem;
  
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px;
`

export const AddressFormTitleContainer = styled.div`
  display: flex;
  gap: .5rem;

  margin-bottom: 2rem;

  svg {
    fill: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-weight: 400;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: .875rem;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: minmax(auto, 200px) auto minmax(auto, 60px);
    gap: 1rem .75rem;
  }
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  padding: .75rem;

  font-size: .874rem;

  color: ${(props) => props.theme['base-text']};

  transition: all .2s;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus, &:focus-visible {
    outline-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CEPInput = styled(BaseInput)`
  grid-column: 1 / 2;
`

export const StreetInput = styled(BaseInput)`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
`

export const NumberInput = styled(BaseInput)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`

export const AddressComplementInput = styled(BaseInput)`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
`

export const OpcionalLabelContainer = styled.div`
  z-index: 10;

  position: absolute;
  top: 50%;
  right: -0.5rem;
  transform: translate(-50%, -50%);

  max-width: max-content;
  max-height: max-content;
  justify-self: end;

  @media (min-width: 1200px) {
    grid-column: 2 / 4;
    grid-row: 3 / 4;

    position: relative;
    top: 0;
    right: 0;

    transform: translate(0, 0);
  }

  span {
    display: block;
    font-size: .75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};

    @media (min-width: 1200px) {
      position: absolute;
      z-index: 10;
      right: .75rem;
      top: .9375rem;
    }
  }
`

export const NeighborhoodInput = styled(BaseInput)`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
`

export const CityInput = styled(BaseInput)`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
`

export const StateInput = styled(BaseInput)`
  grid-column: 3 / 4;
  grid-row: 4 / 5;
`