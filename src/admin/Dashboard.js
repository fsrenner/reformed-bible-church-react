import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import LeadershipData from './LeadershipData';
import HomeData from './HomeData';
import BeliefsData from './BeliefsData';

export default function Dashboard({ user, logout }) {

    const [key, setKey] = useState('home');

    return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link>Home</Nav.Link>
        </Nav.Item> 
        <Nav.Item>
            <Nav.Link eventKey="link-1">Beliefs</Nav.Link>
        </Nav.Item> 
        <Nav.Item>
            <Nav.Link eventKey="link-1">Leadership</Nav.Link>
        </Nav.Item> 
    </Nav>
    )
}