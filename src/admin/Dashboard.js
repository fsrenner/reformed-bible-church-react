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

    console.log(key);

    return (
        <Container>
            <Row>
                <Nav fill variant="tabs" activeKey="home" className="dashboard" onSelect={selectedKey => setKey(selectedKey)}>
                    <Nav.Item>
                        <Nav.Link eventKey="home">Home</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Nav.Link eventKey="beliefs">Beliefs</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Nav.Link eventKey="leadership">Leadership</Nav.Link>
                    </Nav.Item> 
                </Nav>
            </Row>
            <Row>
                {
                    (key === 'home')
                        ? <HomeData />
                        : (key === 'beliefs')
                            ? <BeliefsData />
                            : <LeadershipData />
                }
            </Row>
        </Container>
    
    )
}