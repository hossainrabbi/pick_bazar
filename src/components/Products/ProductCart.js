import React from 'react';
import { useHistory } from 'react-router-dom';
import ProductBtn from '../common/ProductBtn';

const ProductCart = ({ id, name, price, images }) => {
    const history = useHistory();
    const handleImageClick = (id) => {
        history.push(`/products/${id}`);
    };

    return (
        <div className="bg-white rounded-md overflow-hidden shadow-md transition transform hover:-translate-y-1">
            <img
                className="w-full text-center cursor-pointer"
                src={images[0]}
                alt={name}
                onClick={() => handleImageClick(id)}
            />
            <div className="p-6">
                <div>
                    <strong>${price}</strong>
                    <span className="block text-sm text-gray-500">{name}</span>
                </div>
                <ProductBtn className="mt-4" />
            </div>
        </div>
    );
};

export default ProductCart;
