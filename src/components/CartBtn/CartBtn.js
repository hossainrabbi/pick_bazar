import React from 'react';
import { useSelector } from 'react-redux';

const CartBtn = () => {
    const { cartItems } = useSelector((state) => state);

    const total = cartItems.reduce(
        (acc, sum) => acc + sum.quantity * sum.price,
        0
    );

    return (
        <button className="bg-green-600 fixed top-2/4 transform -translate-y-2/4 rounded-l-md right-0 p-4">
            <span className="text-white flex justify-between items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className="mt-1">{cartItems.length} items</span>
            </span>
            <span className="bg-white px-3 py-1 mt-2 rounded inline-block">
                ${total}
            </span>
        </button>
    );
};

export default CartBtn;
