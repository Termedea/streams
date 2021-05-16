import React from 'react';
import './Button.css';

const Button = ({ color, onClick }) => {
    return (
        <button onClick={onClick} className={`Button ${color ? `Button--${color} ` : ''}`}>
            Click me
        </button>
    );
};

export default Button;
