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
