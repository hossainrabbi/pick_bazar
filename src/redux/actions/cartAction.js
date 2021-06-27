import { ADD_TO_CART } from './actionsTypes';

export const addToCart = (cartId) => ({
    type: ADD_TO_CART,
    payload: cartId,
});
