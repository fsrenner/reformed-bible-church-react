import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function Navigation () {
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Navbar.Brand href="/" id="rbcLogo">
                <img 
                    className="navbar-brand" 
                    src="./resources/rbclogo.png"
                    id="rbcLogo" 
                    alt=""
                />{' '}
                Reformed Bible Church
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLink to="/" className="nav-link" activeClassName="active" exact={true}>Home <span className="sr-only">(current)</span></NavLink>
                <NavLink to="/beliefs" className="nav-link" activeClassName="active">Beliefs</NavLink>
                <NavLink to="/leadership" className="nav-link" activeClassName="active">Leadership</NavLink>
                <NavLink to="/give" className="nav-link" activeClassName="active">Give</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
