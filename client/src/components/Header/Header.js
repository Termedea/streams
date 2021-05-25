import './Header.css';

import React from 'react';

import { Link } from 'react-router-dom';

import GoogleAuth from '../GoogleAuth/GoogleAuth';

const Header = () => {
    return (
        <div className="Header bg-gradient-to-tr from-indigo-600 via-blue-400 to-green-400 border-b-2 border-yellow-400">
            <div className="Header__user-area bg-opacity-30 bg-white py-2 px-4 shadow-md flex justify-end text-indigo-900 cursor-pointer text-sm">
                <GoogleAuth />
            </div>
            <div className="Header__nav flex flex-wrap">
                <div className="Header__nav__container max-w-6xl ml-3 md:mx-auto mt-3 flex-grow flex flex-wrap items-center justify-center md:mt-0 md:justify-between">
                    <h1 className="Header__title px-4 lg:pl-0 font-display text-4xl md:text-5xl text-green-50">
                        <Link to="/">FlowStreams</Link>
                    </h1>
                    <nav className="Header__nav flex justify-end">
                        <Link className="Header__nav__item" to="/">
                            All Streams
                        </Link>
                        <Link className="Header__nav__item" to="/streams/new">
                            New Stream
                        </Link>
                        <Link className="Header__nav__item" to="/">
                            All Streams
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
