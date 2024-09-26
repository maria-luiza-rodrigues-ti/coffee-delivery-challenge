import styled from "styled-components"

export const ProductCardContainer = styled.li`
  list-style: none;

  display: flex;
  justify-content: space-between;

  padding: .25rem .5rem 2rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  margin-bottom: 1.5rem;
`

export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    max-width: 4rem;
    max-height: 4rem;
  }
`

export const QuantityContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap:.5rem;

    h3 {
    grid-column: 1 / 3;
    font-weight: 400;
  }
`

export const CoffeeQuantity = styled.div`
  background-color: ${(props)=> props.theme['base-button']};
  border-radius: 6px;
  padding: .5rem;

  display: flex;
  align-items: center;
  gap:.5rem;

  button {
    border: none;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: .25rem 0;

    cursor: pointer;

    transition: all .3s ease-in-out;

    &:hover svg {
      fill: ${(props) => props.theme['purple-dark']};
    }
  }

  svg {
    fill: ${(props) => props.theme['purple']};
  }

  span {
    display: inline-block;

    
    color: ${(props) => props.theme['base-title']};
  }
`

export const RemoveButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};

  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 4px;

  padding: 0 .5rem;

  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  svg {
    fill: ${(props) => props.theme['purple']};
  }

  span {
    font-size: .75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProductPrice = styled.span`
  font-weight: 700;
`