import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LeadershipData from './LeadershipData';
import HomeData from './HomeData';
import BeliefsData from './BeliefsData';

export default function Dashboard({ user, logout }) {

    const [key, setKey] = useState('home');

    return (
        <>
            <Tabs id="dashboardTabs" defaultActiveKey="home">
                <Tab eventKey="home" title="Home">
                    <HomeData />
                </Tab>
                <Tab eventKey="beliefs" title="Beliefs">
                    <BeliefsData />
                </Tab>
                <Tab eventKey="leadership" title="Leadership">
                    <LeadershipData />
                </Tab>
            </Tabs>
            <Container>
                <Row>
                    <Button onClick={logout}>Logout</Button>
                </Row>
            </Container>
        </>
    )
}