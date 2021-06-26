import React from 'react';
import Header from '../components/Header/Header';
import Offers from '../components/Offers/Offers';
import Products from '../components/Products/Products';

const Home = () => {
    return (
        <main className="text-gray-800 overflow-x-hidden">
            <Header />
            <Offers />
            <Products />
        </main>
    );
};

export default Home;
