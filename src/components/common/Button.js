import React from 'react';

const Button = (props) => {
    return (
        <button
            {...props}
            className={`bg-green-600 hover:bg-green-700 text-white transition duration-300 rounded-md font-semibold py-2 px-4 ${props.className}`}
        >
            {props.children}
        </button>
    );
};

export default Button;
