import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Offers from '../components/Offers/Offers';

const Home = () => {
    return (
        <main className="text-gray-800 overflow-x-hidden">
            <Navbar />
            <Header />
            <Offers />
        </main>
    );
};

export default Home;
