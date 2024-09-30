import styled from "styled-components";

export const BackgroundImage = styled.div`
  background-image: url(${import.meta.env.BASE_URL +'/assets/background.png'});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(80px);

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;`

export const IntroductionSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  gap: 2.5rem;

  width: 100%;
  max-width: 70rem;

  margin: 0 auto;
  padding: 2rem 0 0;

  position: relative;

  @media  (min-width: 1200px) {
    gap: 3.5rem;

    padding: 5.75rem 0;

    flex-wrap: nowrap;
  }
`

export const InfoIntroductionSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  @media  (min-width: 1200px) {
    width: 52.5%;
    padding: 0;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    
    color: ${(props) => props.theme['base-title']};

    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 2.5rem;

    @media  (min-width: 1200px) {
      margin-bottom: 4.125rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem 2.5rem
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: .75rem;

    min-width: 231px;
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ImageIntroSection = styled.div`
  padding: 0 1rem;
  img {
    width: 100%;
  }
`

export const BACKGROUND_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  'base-text': 'base-text',
  purple: 'purple'
} as const;

export interface BackgroundColorProps {
  circlecolor: keyof typeof BACKGROUND_COLORS;
}

export const ShoppingDetailsContainer = styled.div<BackgroundColorProps>`
  padding: .5rem;

  border-radius: 50%;

  background: ${(props) => props.theme[BACKGROUND_COLORS[props['circlecolor']]]};	

  display: flex;
  align-items: center;
`

export const CoffeesListContainer = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 1rem 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  @media  (min-width: 1200px) {
    padding: 2.5rem 0 9.875rem;

    gap: 3.375rem;
  }


  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2.5rem;
    
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;

  @media  (min-width: 1200px) {
    justify-content: start;
    gap: 2.5rem 2rem;
  }
`

