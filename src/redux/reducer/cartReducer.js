import productsData from '../../data/productsData';
import { ADD_TO_CART } from '../actions/actionsTypes';

const initialState = {
    products: [...productsData],
    cartItems: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
