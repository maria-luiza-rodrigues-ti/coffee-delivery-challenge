import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  INCREMENT_PRODUCT = "INCREMENT_PRODUCT",
  DECREMENT_PRODUCT = "DECREMENT_PRODUCT",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export type Actions = {
      type: ActionTypes.ADD_TO_CART | ActionTypes.INCREMENT_PRODUCT | ActionTypes.DECREMENT_PRODUCT | ActionTypes.REMOVE_FROM_CART
      payload: {
        product: CartItem
      }
    }

export function addToCartAction(product: CartItem) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product,
    },
  }
}

export function incrementProductAction(product: CartItem) {
  return {
    type: ActionTypes.INCREMENT_PRODUCT,
    payload: {
      product,
    },
  }
}

export function decrementProductAction(product: CartItem) {
  return {
    type: ActionTypes.DECREMENT_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeFromCartAction(product: CartItem) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      product,
    },
  }
}