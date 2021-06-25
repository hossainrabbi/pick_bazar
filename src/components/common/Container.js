import React from 'react';

const Container = (props) => {
    return (
        <div {...props} className={`max-w-6xl mx-auto px-3 ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Container;
