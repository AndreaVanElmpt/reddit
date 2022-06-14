import React from 'react';
import {NavLink} from 'react-router-dom'

function Header() {


    return (
        <>
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/subreddit/" >Subreddit</NavLink>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Header;