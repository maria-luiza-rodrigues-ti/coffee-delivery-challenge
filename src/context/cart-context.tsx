import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CartItem, CartItemsReducer } from "../reducers/cart-items/reducer";
import {
  addToCartAction,
  decrementProductAction,
  incrementProductAction,
  removeFromCartAction,
  setPaymentMethodAction,
} from "../reducers/cart-items/actions";
interface ProductContextProps {
  cartItems: CartItem[];
  numberOfCartItems: number;
  paymentMethod: string | null;
  addItemToCart: (product: CartItem) => void;
  incrementProductQuantity: (product: CartItem) => void;
  decrementProductQuantity: (product: CartItem) => void;
  removeItemFromCart: (product: CartItem) => void;
  setPaymentMethod: (paymentMethod: string) => void;
}

export const CartContext = createContext({} as ProductContextProps);

interface ProductContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: ProductContextProviderProps) {
  const [cartItemsState, dispatch] = useReducer(
    CartItemsReducer,
    {
      cartItems: [],
      paymentMethod: null,
    },

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
    const stateJSON = JSON.stringify(cartItemsState);

    console.log(cartItemsState);

    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
  }, [cartItemsState]);

  function addItemToCart(product: CartItem) {
    dispatch(addToCartAction(product));
  }

  const numberOfCartItems = cartItemsState?.cartItems.reduce(
    (accumulator, item) => {
      return accumulator + item.quantity;
    },
    0
  );

  function incrementProductQuantity(product: CartItem) {
    dispatch(incrementProductAction(product));
  }

  function decrementProductQuantity(product: CartItem) {
    dispatch(decrementProductAction(product));
  }

  function removeItemFromCart(product: CartItem) {
    dispatch(removeFromCartAction(product));
  }

  function setPaymentMethod(paymentMethod: string) {
    dispatch(setPaymentMethodAction(paymentMethod));
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItemsState.cartItems,
        paymentMethod: cartItemsState.paymentMethod,
        addItemToCart,
        numberOfCartItems,
        incrementProductQuantity,
        decrementProductQuantity,
        removeItemFromCart,
        setPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
