import React from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import Logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white z-10">
            <Container>
                <div className="flex justify-between items-center h-16">
                    <img className="h-6" src={Logo} alt="Pick Bazar" />
                    <ul className="flex items-center">
                        <li className="mx-3 p-2">
                            <a
                                href="/"
                                className="font-semibold hover:text-green-700 transition duration-300 ease-in-out"
                            >
                                Offer
                            </a>
                        </li>
                        <li className="mx-3 p-2">
                            <a
                                href="/"
                                className="font-semibold hover:text-green-700 transition duration-300 ease-in-out"
                            >
                                FAQ
                            </a>
                        </li>
                        <li className="mx-3 p-2">
                            <a
                                href="/"
                                className="font-semibold hover:text-green-700 transition duration-300 ease-in-out"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="ml-3 pl-2">
                            <Button>Join</Button>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
