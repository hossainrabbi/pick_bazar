import React from 'react';

const Button = (props) => {
    return (
        <button
            {...props}
            className={`hover:bg-green-700 text-white transition duration-300 rounded-md py-2 px-4 ${props.className}`}
        >
            {props.children}
        </button>
    );
};

export default Button;
