import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="Header">
            <div>
                <p className="Name">AROX</p>
            </div>
            <div className="Menu">
                <ul>
                    <li>
                        <a href="https://fuzzzadelic.com/sale">SALE</a>
                    </li>
                    <li>
                        <Link to="/lookbook">LOOKBOOK</Link>
                    </li>
                    <li>
                        <Link to="/contacts">CONTACTS</Link>
                    </li>
                    <li>
                        <Link to="/bag">BAG</Link>
                    </li>
                    <li>
                        <Link to="/currency">CURRENCY</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
