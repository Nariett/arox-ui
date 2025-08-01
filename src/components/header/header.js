import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div>
                <p className="brand-name">AROX</p>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to="/catalog">CATALOG</Link>
                    </li>
                    <li>
                        <Link to="/sale">SALE</Link>
                    </li>
                    <li>
                        <Link to="/lookbook">LOOKBOOK</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
