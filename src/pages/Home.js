import React from 'react';
import Header from '../components/Header/Header';
import Offers from '../components/Offers/Offers';
import Products from '../components/Products/Products';
import CartBtn from '../components/CartBtn/CartBtn';
import Cart from '../components/Cart/Cart';

const Home = () => {
    const [show, setShow] = React.useState(false);

    return (
        <main className="text-gray-800 overflow-x-hidden">
            <Header />
            {/* <Offers /> */}
            <Products />
            <CartBtn setShow={setShow} />
            {show && <Cart setShow={setShow} />}
        </main>
    );
};

export default Home;
