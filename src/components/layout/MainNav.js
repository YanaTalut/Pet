import React from "react";
import 'animate.css'; // Важно: без фигурных скобок {}
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import logo from "C:/Users/Home/upcoming-events1/src/images/logo.png";
import header from "C:/Users/Home/upcoming-events1/src/images/header.jpg";

function MainNav() {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logo} >
                    <div className="animate__animated animate__rotateIn">
                        <img className={classes.img_logo} src={logo} alt="logo" />
                        <span>Pets farm</span>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pets">Pets</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <img className={classes.img_header} src={header} alt="header" />
            </div>
        </div>
    );
}
export default MainNav; 