import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2em'
    };
    return (
        <div>
            <ul>
                <li><NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to='/about' activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to='/about/foo' activeStyle={activeStyle}>About foo</NavLink></li>
                <li><NavLink to='/period' activeStyle={activeStyle}>Period</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;