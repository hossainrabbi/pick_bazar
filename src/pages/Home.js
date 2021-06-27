import React from 'react';
import Header from '../components/Header/Header';
import Offers from '../components/Offers/Offers';
import Products from '../components/Products/Products';
import CartBtn from '../components/CartBtn/CartBtn';

const Home = () => {
    return (
        <main className="text-gray-800 overflow-x-hidden">
            <Header />
            <Offers />
            <Products />
            <CartBtn />
        </main>
    );
};

export default Home;
