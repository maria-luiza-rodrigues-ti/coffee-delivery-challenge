import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CartItem, CartItemsReducer } from "../reducers/cart-items/reducer";
import {
  addToCartAction,
  decrementProductAction,
  incrementProductAction,
  removeFromCartAction,
} from "../reducers/cart-items/actions";
interface ProductContextProps {
  cartItems: CartItem[];
  numberOfCartItems: number;
  addItemToCart: (product: CartItem) => void;
  incrementProductQuantity: (product: CartItem) => void;
  decrementProductQuantity: (product: CartItem) => void;
  removeItemFromCart: (product: CartItem) => void;
}

export const CartContext = createContext({} as ProductContextProps);

interface ProductContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: ProductContextProviderProps) {
  const [cartItems, dispatch] = useReducer(
    CartItemsReducer,
    [],
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems);

    console.log(cartItems);

    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
  });

  function addItemToCart(product: CartItem) {
    dispatch(addToCartAction(product));
  }

  const numberOfCartItems = cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  function incrementProductQuantity(product: CartItem) {
    dispatch(incrementProductAction(product));
  }

  function decrementProductQuantity(product: CartItem) {
    dispatch(decrementProductAction(product));
  }

  function removeItemFromCart(product: CartItem) {
    dispatch(removeFromCartAction(product));
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        numberOfCartItems,
        incrementProductQuantity,
        decrementProductQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
