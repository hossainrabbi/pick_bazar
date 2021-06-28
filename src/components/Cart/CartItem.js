import React from 'react';
import useCart from '../customHooks/useCart';

const CartItem = ({ id, name, price, quantity, images }) => {
    const { handleRemoveCart, addToIncrement, addToDecrement } = useCart();

    return (
        <div className="flex justify-between items-center py-3  px-4 border border-gray-200">
            <div className="bg-gray-200 flex-wrap text-center rounded-full p-2">
                <button
                    onClick={() => addToIncrement(id)}
                    className="block text-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <span className="block text-lg mt-2">{quantity}</span>
                <button
                    onClick={() =>
                        quantity > 1 ? addToDecrement(id) : handleRemoveCart(id)
                    }
                    className="block text-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div>
                <img className="w-16" src={images[0]} alt={name} />
            </div>
            <div>
                <h5 className="font-semibold">{name}</h5>
                <p className="text-green-600">${price}</p>
                <p className="text-gray-300">{quantity} X 2lb</p>
            </div>
            <div className="font-semibold">
                ${(price * quantity).toFixed(2)}
            </div>
            <div>
                <button
                    onClick={() => handleRemoveCart(id)}
                    className="bg-gray-200 hover:text-red-600 hover:bg-gray-300 transition  text-gray-500 leading-3 w-7 h-7 text-center rounded-full"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default CartItem;
