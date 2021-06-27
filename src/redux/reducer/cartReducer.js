import productsData from '../../data/productsData';
import { ADD_TO_CART } from '../actions/actionsTypes';

const initialState = {
    products: [...productsData],
    cartItems: [],
};

const reducer = (state = initialState, action) => {
    const { products, cartItems } = state;

    switch (action.type) {
        case ADD_TO_CART:
            let newCartItems = [];
            const cartItem = products.find(
                (item) => item.id === action.payload
            );
            const itemIndex = cartItems.findIndex(
                (item) => item.id === action.payload
            );

            if (itemIndex === -1) {
                newCartItems = [...cartItems, { ...cartItem, quantity: 1 }];
            } else {
                newCartItems = cartItems.map((item) =>
                    item.id === action.payload
                        ? {
                              ...cartItem,
                              quantity: parseInt(item.quantity) + 1,
                          }
                        : item
                );
            }

            return {
                ...state,
                cartItems: [...newCartItems],
            };

        default:
            return state;
    }
};

export default reducer;
