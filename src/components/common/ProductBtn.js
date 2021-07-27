import React from 'react';
import useCart from '../customHooks/useCart';
import Button from './Button';

const ProductBtn = (props) => {
    const { className, id } = props;
    const { handleCartAdd, addToDecrement } = useCart();

    return (
        <div
            {...props}
            className={`flex justify-between items-center ${className}`}
        >
            {props.cartItem?.quantity && (
                <Button
                    className="rounded-r-none text-gray-500 bg-gray-200 hover:text-white"
                    onClick={() => addToDecrement(id)}
                >
                    -
                </Button>
            )}
            <Button
                onClick={() => handleCartAdd(id)}
                className={`w-full rounded-r-none text-gray-500 bg-gray-100 hover:text-white ${
                    props.cartItem?.quantity && 'cursor-default rounded-l-none'
                }`}
                disabled={props.cartItem?.quantity}
            >
                {props.cartItem?.quantity ? props.cartItem?.quantity : 'Add'}
            </Button>
            <Button
                className="rounded-l-none text-gray-500 bg-gray-200 hover:text-white"
                onClick={() => handleCartAdd(id)}
            >
                +
            </Button>
        </div>
    );
};

export default ProductBtn;
