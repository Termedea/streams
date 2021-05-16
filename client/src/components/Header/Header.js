import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ children }) => {
    return (
        <div className="Header bg-gradient-to-tl from-purple-600 to-pink-600 border-b-2 border-purple-700">
            <h1 className="Header__title font-display text-8xl  text-pink-100 p-7">
                <Link to="/" className="text-white hover:text-white">
                    {children}
                </Link>
            </h1>
            <nav className="Header__nav bg-opacity-30 bg-white flex justify-end">
                <Link className="Header__nav__item" to="/">
                    All Streams
                </Link>

                <Link className="Header__nav__item" to="/streams/new">
                    Create
                </Link>

                <Link className="Header__nav__item" to="/">
                    All Streams
                </Link>
            </nav>
        </div>
    );
};

export default Header;
