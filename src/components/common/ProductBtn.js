import React from 'react';
import Button from './Button';

const ProductBtn = (props) => {
    return (
        <div
            {...props}
            className={`flex justify-between items-center ${props.className}`}
        >
            <Button className="w-full rounded-r-none text-gray-500 bg-gray-100 hover:text-white">
                Add
            </Button>
            <Button className="rounded-l-none text-gray-500 bg-gray-200 hover:text-white">
                +
            </Button>
        </div>
    );
};

export default ProductBtn;
