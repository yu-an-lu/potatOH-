import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export const Button = ({
    children,
    type,
    onClick,

}) => {
    return (
        <Link to ='/Fridge' className = 'Fridge.js'>
            <button 
            className = {'btn'}
            onClick={onClick}
            type = {type}
            >
            {children}
            </button>
        </Link>
    )
};