import { CoffeeProps } from "../../pages/home/index.tsx";
import { Actions, ActionTypes } from "./actions";

export interface CartItem extends CoffeeProps {
  quantity: number;
}

export interface CartItemsState {
  cartItems: CartItem[];
  paymentMethod: string | null;
}

export function CartItemsReducer(state: CartItemsState, action: Actions): CartItemsState {
    switch (action.type) {
      case ActionTypes.ADD_TO_CART: {
        const isProductAlreadyInTheCart = state.cartItems.find(
          (item) => item.id === action.payload.product.id
        );

        if (isProductAlreadyInTheCart) {
          const updatedItems = state.cartItems.map((item) => {
            if (item.id === action.payload.product.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.product.quantity,
              };
            }
            return item;
          });

          return {...state, cartItems: updatedItems};
          
        } else {
          return { ...state, cartItems: [...state.cartItems, action.payload.product] };
        }
      }

      case ActionTypes.INCREMENT_PRODUCT: {
        const updatedItems = state.cartItems.map((item) => {
          if (item.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });

        return { ...state, cartItems: updatedItems };
      }

      case ActionTypes.DECREMENT_PRODUCT: {
        const updatedItems = state.cartItems.map((item) => {
          if (item.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      
        return { ...state, cartItems: updatedItems };
      }

      case ActionTypes.REMOVE_FROM_CART: {
        const updatedItems = state.cartItems.filter(
          (item) => item.id !== action.payload.product.id
        );

        return { ...state, cartItems: updatedItems };
      }

      case ActionTypes.SET_PAYMENT_METHOD: {
        return {
          ...state,
          paymentMethod: action.payload.paymentMethod,
        };
      }

      default: {
        return state;
      }
    }
  }