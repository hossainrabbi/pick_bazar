import { ADD_TO_CART } from './actionsTypes';

export const addToCart = (cartItem) => ({
    type: ADD_TO_CART,
    payload: cartItem,
});
