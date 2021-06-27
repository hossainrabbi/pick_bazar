import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Button from './Button';

const ProductBtn = (props) => {
    const { className, id } = props;
    const dispatch = useDispatch();

    return (
        <div
            {...props}
            className={`flex justify-between items-center ${className}`}
        >
            <Button
                onClick={() => dispatch(addToCart(id))}
                className="w-full rounded-r-none text-gray-500 bg-gray-100 hover:text-white"
            >
                Add
            </Button>
            <Button className="rounded-l-none text-gray-500 bg-gray-200 hover:text-white">
                +
            </Button>
        </div>
    );
};

export default ProductBtn;
