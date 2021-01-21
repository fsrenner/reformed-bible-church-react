import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function Navigation () {

    const [expanded, setExpanded] = useState(false);

    console.log(expanded);
    return (
        <Navbar bg="light" expanded={expanded} expand="md" fixed="top">
            <Navbar.Brand href="/" id="rbcLogo">
                <img 
                    className="navbar-brand" 
                    src="./resources/rbclogo.png"
                    id="rbcLogo" 
                    alt=""
                />{' '}
                Reformed Bible Church
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <NavLink to="/" className="nav-link" activeClassName="active" exact={true} onClick={() => setExpanded(false)}>Home <span className="sr-only">(current)</span></NavLink>
                <NavLink to="/beliefs" className="nav-link" activeClassName="active" onClick={() => setExpanded(false)}>Beliefs</NavLink>
                <NavLink to="/leadership" className="nav-link" activeClassName="active" onClick={() => setExpanded(false)}>Leadership</NavLink>
                <NavLink to="/give" className="nav-link disabled" activeClassName="active" onClick={() => setExpanded(false)}>Give (Coming soon)</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
