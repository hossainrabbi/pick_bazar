import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';

const useCart = () => {
    const { products, cartItems } = useSelector((state) => state);
    const dispatch = useDispatch();
    const setCartItems = (items) => {
        dispatch(addToCart(items));
    };

    const handleCartAdd = (id) => {
        const cartItem = products.find((item) => item.id === id);
        const itemIndex = cartItems.findIndex((item) => item.id === id);

        if (itemIndex === -1) {
            setCartItems([...cartItems, { ...cartItem, quantity: 1 }]);
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === id
                        ? {
                              ...cartItem,
                              quantity: parseInt(item.quantity) + 1,
                          }
                        : item
                )
            );
        }
    };

    const handleRemoveCart = (id) => {
        const removeItem = cartItems.filter((item) => item.id !== id);
        setCartItems(removeItem);
    };

    const total = cartItems.reduce(
        (acc, sum) => acc + sum.quantity * sum.price,
        0
    );

    return {
        handleCartAdd,
        handleRemoveCart,
        total,
    };
};

export default useCart;
