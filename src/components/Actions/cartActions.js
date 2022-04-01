import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  SHOW_PRODUCT,
  CLEAR_PRODUCT,
  SWITCH_CURRENCY_USD,
  SWITCH_CURRENCY_EUR,
  SWITCH_CURRENCY_YEN,
} from "./Action-Types/cart-actions";

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
//show product
export const showProduct = (id) => {
  return {
    type: SHOW_PRODUCT,
    id,
  };
};
//clear product
export const clearProduct = (id) => {
  return {
    type: CLEAR_PRODUCT,
    id,
  };
};
//change currency to usd
export const switchCurrencyUSD = (id) => {
  return {
    type: SWITCH_CURRENCY_USD,
    id,
  };
};
//change currency to euro
export const switchCurrencyEUR = (id) => {
  return {
    type: SWITCH_CURRENCY_EUR,
    id,
  };
};
//change currency to yen
export const switchCurrencyYEN = (id) => {
  return {
    type: SWITCH_CURRENCY_YEN,
    id,
  };
};
