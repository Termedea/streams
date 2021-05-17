import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import GoogleAuth from '../GoogleAuth/GoogleAuth';

const Header = () => {
    return (
        <div className="Header bg-gradient-to-tr from-purple-600 to-pink-600 border-b-2 border-purple-700 flex justify-between items-center px-40 flex-wrap">
            <h1 className="Header__title font-display text-5xl  text-green-50">
                <Link to="/">FlowStreams</Link>
            </h1>
            <nav className="Header__nav flex justify-end">
                <Link className="Header__nav__item" to="/">
                    All Streams
                </Link>

                <div className="Header__nav__item" to="/">
                    <GoogleAuth />
                </div>
            </nav>
        </div>
    );
};

export default Header;
