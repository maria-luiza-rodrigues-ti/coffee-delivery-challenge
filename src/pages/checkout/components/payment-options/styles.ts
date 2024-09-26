import styled from "styled-components";

export const PaymentOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  @media (min-width: 1200px) {
    flex-direction: row;
  }

`

export const PaymentFormContainer = styled.form`
  padding: 2.5rem;
  margin-bottom: .75rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px;

  width: 100%;
  
`