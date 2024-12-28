import React from "react";
import 'animate.css';
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import logo from "../../images/logo.png";
import header from "../../images/header.jpg";
import { Navbar, Nav } from 'react-bootstrap';

function MainNav() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className={classes.header}>
                <Navbar.Brand className={classes.logo}>
                    <div className="animate__animated animate__rotateIn">
                        <img className={classes.img_logo} src={logo} alt="logo" />
                        <span>Pets farm</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/pets">Pets</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <img className={classes.img_header} src={header} alt="header" />
            </div>
        </div>
    );
}

export default MainNav;