import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  INCREMENT_PRODUCT = "INCREMENT_PRODUCT",
  DECREMENT_PRODUCT = "DECREMENT_PRODUCT",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD",
}

export type AddToCartAction = {
  type: ActionTypes.ADD_TO_CART;
  payload: { product: CartItem };
};

export type IncrementProductAction = {
  type: ActionTypes.INCREMENT_PRODUCT;
  payload: { product: CartItem };
};

export type DecrementProductAction = {
  type: ActionTypes.DECREMENT_PRODUCT;
  payload: { product: CartItem };
};

export type RemoveFromCartAction = {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: { product: CartItem };
};

export type SetPaymentMethodAction = {
  type: ActionTypes.SET_PAYMENT_METHOD;
  payload: { paymentMethod: string };
};

// Unir todos os tipos em um só
export type Actions =
  | AddToCartAction
  | IncrementProductAction
  | DecrementProductAction
  | RemoveFromCartAction
  | SetPaymentMethodAction;

export function addToCartAction(product: CartItem): AddToCartAction {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product,
    },
  };
}

export function incrementProductAction(product: CartItem): IncrementProductAction {
  return {
    type: ActionTypes.INCREMENT_PRODUCT,
    payload: {
      product,
    },
  };
}

export function decrementProductAction(product: CartItem): DecrementProductAction {
  return {
    type: ActionTypes.DECREMENT_PRODUCT,
    payload: {
      product,
    },
  };
}

export function removeFromCartAction(product: CartItem): RemoveFromCartAction {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      product,
    },
  };
}

export function setPaymentMethodAction(paymentMethod: string): SetPaymentMethodAction {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  };
}
