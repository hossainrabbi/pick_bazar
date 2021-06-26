import React from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full bg-white z-10">
            <Container>
                <div className="flex justify-between items-center h-16">
                    <img className="h-6" src={Logo} alt="Pick Bazar" />
                    <ul className="flex items-center">
                        <li className="mx-3 p-2">
                            <Link
                                href="/"
                                className="font-semibold hover:text-green-700 transition duration-300 ease-in-out"
                            >
                                Offer
                            </Link>
                        </li>
                        <li className="mx-3 p-2">
                            <Link
                                href="/"
                                className="font-semibold hover:text-green-700 transition duration-300 ease-in-out"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li className="mx-3 p-2">
                            <Link
                                href="/"
                                className="font-semibold hover:text-green-700 transition duration-300 ease-in-out"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="mx-3 pl-2">
                            <Button className="bg-green-600">Join</Button>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
