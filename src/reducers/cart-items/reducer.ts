import { CoffeeProps } from "../../pages/home/index.tsx";
import { ActionTypes, Actions } from "./actions";

export interface CartItem extends CoffeeProps {
  quantity: number;
}

export interface CartItemsState {
  cartItems: CartItem[];
}

export function CartItemsReducer(state: CartItem[], action: Actions) {
    switch (action.type) {
      case ActionTypes.ADD_TO_CART: {
        const isProductAlreadyInTheCart = state.find(
          (item) => item.id === action.payload.product.id
        );

        if (isProductAlreadyInTheCart) {
          return state.map((item) => {
            if (item.id === action.payload.product.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.product.quantity,
              };
            }
            return item;
          });
          
        } else {
          return [...state, action.payload.product];
        }
      }

      case ActionTypes.INCREMENT_PRODUCT: {
        return state.map((item) => {
          if (item.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }

      case ActionTypes.DECREMENT_PRODUCT: {
        return state.map((item) => {
          if (item.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      }

      case ActionTypes.REMOVE_FROM_CART: {
        return state.filter((item) => item.id !== action.payload.product.id);
      }

      default: {
        return state;
      }
    }
  }