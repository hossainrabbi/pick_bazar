import React from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="w-full bg-white z-10">
            <Container>
                <div className="flex relative justify-between items-center h-16">
                    <img className="h-6" src={Logo} alt="Pick Bazar" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 md:hidden cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <ul
                        className={`bg-gray-900 absolute md:static w-full md:w-auto top-16 md:top-auto z-20 pb-3 md:pb-0 md:bg-transparent md:flex md:items-center transition-all scale-y-0 origin-top transform md:transform-none ${
                            !showMenu && 'scale-y-100'
                        }`}
                    >
                        <li className="mx-3 p-2">
                            <Link
                                to="/"
                                className="font-semibold hover:text-green-700 text-white md:text-gray-700 transition duration-300 ease-in-out"
                            >
                                Offer
                            </Link>
                        </li>
                        <li className="mx-3 p-2">
                            <Link
                                to="/"
                                className="font-semibold hover:text-green-700 text-white md:text-gray-700 transition duration-300 ease-in-out"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li className="mx-3 p-2">
                            <Link
                                to="/"
                                className="font-semibold hover:text-green-700 text-white md:text-gray-700 transition duration-300 ease-in-out"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="mx-3 pl-2">
                            <Button className="bg-green-600 w-full md:w-auto">
                                Join
                            </Button>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
