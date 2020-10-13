import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand>Doctors Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink className="nav-link mr-5" to="/">Home</NavLink>
                    <NavLink className="nav-link mr-5" to="/">About</NavLink>
                    <NavLink className="nav-link mr-5" to="/">Dental Service</NavLink>
                    <NavLink className="nav-link mr-5 text-light" to="/">Reviews</NavLink>
                    <NavLink className="nav-link mr-5 text-light" to="/">Blog</NavLink>
                    <NavLink className="nav-link mr-5 text-light" to="/">Contact US</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;