import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const { cartItems } = useSelector((state) => state);

    return (
        <div className="w-96 bg-blue-700 fixed top-0 right-0 h-screen">
            <div className="text-green-600 flex justify-between items-center py-3 px-6 border border-gray-200">
                <span className="flex justify-start items-center">
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
                    <span className="mt-1 font-semibold">2 Items</span>
                </span>
                <button className="bg-gray-200 hover:text-white hover:bg-green-600 transition  text-gray-500 leading-3 w-7 h-7 text-center rounded-full">
                    X
                </button>
            </div>
            {cartItems.map((item) => (
                <CartItem {...item} key={item.id} />
            ))}
        </div>
    );
};

export default Cart;
