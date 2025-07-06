import React from "react";
import "./Header.css";

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
                        <a>LOOKBOOK</a>
                    </li>
                    <li>
                        <a>CONTACTS</a>
                    </li>
                    <li>
                        <a>BAG</a>
                    </li>
                    <li>
                        <a>CURRENCY</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
