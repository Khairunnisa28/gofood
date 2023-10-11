import React from "react";
import Foto from "../image/logo.png";
import "./Navbar.css";


function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <img src={Foto} alt="foto" />
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/food">Recommendation</a>
                </li>
                <li className="nav-item">
                    <a href="/Cart">Cart</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;