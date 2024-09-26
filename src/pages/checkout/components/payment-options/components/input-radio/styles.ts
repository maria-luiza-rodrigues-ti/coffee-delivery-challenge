import styled from "styled-components";

export const InputRadioContainer = styled.div`
  flex: 1;
  min-width: 11.25rem;

  background: ${(props) => props.theme['base-button']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  padding: .875rem;

  display: flex;
  align-items: center;
  gap: .75rem;

  width: 100%;

  position: relative;

  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme['purple']};
  }


  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    z-index: 10;

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