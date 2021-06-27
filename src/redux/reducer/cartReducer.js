import productsData from '../../data/productsData';
import { ADD_TO_CART } from '../actions/actionsTypes';

const initialState = {
    products: [...productsData],
    cartItems: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const cartItem = state.products.find(
                (item) => item.id === action.payload
            );
            return {
                ...state,
                cartItems: [...state.cartItems, cartItem],
            };

        default:
            return state;
    }
};

export default reducer;
