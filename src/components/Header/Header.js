import React from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '../common/Container';
import Button from '../common/Button';
import Hero from '../../images/grocery.png';

const Header = () => {
    return (
        <header
            style={{ backgroundImage: `url(${Hero})` }}
            className="bg-center bg-no-repeat bg-cover h-screen w-screen relative min-h-screen"
        >
            <Navbar />
            <Container>
                <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-center w-full">
                    <h2 className="text-4xl font-bold">
                        Groceries Delivered in 90 Minute
                    </h2>
                    <p className="tracking-wide mt-4 mb-8">
                        Get your healthy foods & snacks delivered at your
                        doorsteps all day everyday
                    </p>
                    <div className="flex justify-center items-center mx-auto rounded-md overflow-hidden w-3/5">
                        <input
                            className="w-full h-full rounded-r-none py-4 px-5 ml-1 rounded-l-md shadow-2xl focus:outline-none ring-1 ring-white focus:ring-green-600"
                            type="text"
                            placeholder="Search your products from here"
                        />
                        <Button className="flex justify-center items-center rounded-l-none bg-green-600 leading-none h-full py-4 px-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <span>Search</span>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
