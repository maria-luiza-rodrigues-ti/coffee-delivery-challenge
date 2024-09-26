import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "/assets/logo.svg";
import {
  HeaderContainer,
  LocationAndCartContainer,
  LocationContainer,
  CartButton,
} from "./styles";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

export function Header() {
  const { numberOfCartItems } = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} />
      </NavLink>

      <LocationAndCartContainer className="location-cart_container">
        <LocationContainer className="location_container">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <NavLink to="/checkout" title="Checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />

            {numberOfCartItems > 0 && (
              <div>
                <span>{numberOfCartItems}</span>
              </div>
            )}
          </CartButton>
        </NavLink>
      </LocationAndCartContainer>
    </HeaderContainer>
  );
}
