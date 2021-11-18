import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function Navigation ({ onShow }) {
    const givingUrl = window.givingUrl || 'https://tithe.ly/give?c=4503597';
    const [expanded, setExpanded] = useState(false);
    
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
                <NavLink to="/sermons" className="nav-link" activeClassName="active" onClick={() => setExpanded(false)}>Sermons</NavLink>
                <Nav.Link id="openContactModal" data-toggle="modal" data-target="#contactModal" onClick={onShow}>Contact Us</Nav.Link>
                <Nav.Link href={givingUrl} target="_blank">Give</Nav.Link>
                {/* <NavLink to="/pagination" className="nav-link" activeClassName="active" onClick={() => setExpanded(false)}>Pagination</NavLink> */}
                <NavLink to="/admin" className="nav-link" activeClassName="active" onClick={() => setExpanded(false)}>Admin</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
