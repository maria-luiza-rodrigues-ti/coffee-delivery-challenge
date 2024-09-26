import styled from "styled-components"

export const CoffeeCardContainer = styled.li`
  list-style: none;

  padding: 1.25rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 16rem;

  img {
    margin-top: -2.5rem;
  }
`

export const CoffeeTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`

export const CoffeeTags = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: .25rem .5rem;
  margin-top: 0.75rem;

  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  font-size: 0.625rem;
  
  text-transform: uppercase;
`

export const CoffeeDetailsContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 33px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: .875rem;
    
    color: ${(props) => props.theme['base-label']};

    text-align: center;
  }
`

export const CoffeePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap:.5rem;
  }
`

export const CoffeePrice = styled.span`
  font-size: .875rem;
  font-weight: 400;
  
  color: ${(props) => props.theme['base-text']};

  span{
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
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

export const CartButton = styled.button`
  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['purple']};

  display: flex;


  padding: .5rem;

  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['purple-dark']};
  }
`