import React from 'react';
import './Button.css';

const Button = ({ children, type, onClick }) => {
    return (
        <button onClick={onClick} className={`Button ${type ? `Button--${type} ` : ''}`}>
            {children}
        </button>
    );
};

export default Button;
