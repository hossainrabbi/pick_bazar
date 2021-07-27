import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProductBtn from '../common/ProductBtn';

const ProductCart = (props) => {
    const { id, name, price, images } = props;
    const cartItems = useSelector((state) => state.cartItems);

    const cartItem = cartItems.find((item) => item.id === id);

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
                <ProductBtn cartItem={cartItem} className="mt-4" id={id} />
            </div>
        </div>
    );
};

export default ProductCart;
