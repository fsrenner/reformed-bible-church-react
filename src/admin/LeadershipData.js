import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { leadership } from '../util/siteContent';

export default function LeadershipData() {
    const [leadershipData, setLeadershipData] = useState(leadership);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card bg="light" border="info">
                    <Card.Header className="text-center">Leadership Page Data</Card.Header>
                        <Card.Body>
                            <Form method="post">
                                <Form.Group controlId="government">
                                    <Form.Label>Government</Form.Label>
                                    <Form.Control as="textarea" rows={2} value={leadershipData.government} onChange={(e) => console.log(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="elder">
                                    <Form.Label>Elder</Form.Label>
                                    <Form.Control as="textarea" rows={8} value={leadershipData.elder} onChange={(e) => console.log(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="deacon">
                                    <Form.Label>Deacon</Form.Label>
                                    <Form.Control as="textarea" rows={5} value={leadershipData.deacon} onChange={(e) => console.log(e.target.value)} />
                                </Form.Group>
                                    {
                                        leadershipData.leaders.map((leader, key) => {
                                            return (
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="title">
                                                        <Form.Label>Bible Study</Form.Label>
                                                        <Form.Control type="text" value={leader.title} required onChange={(e) => console.log(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="name">
                                                        <Form.Label>Worship</Form.Label>
                                                        <Form.Control type="text" value={leader.name} required onChange={(e) => console.log(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="image">
                                                        <Form.Label>Worship</Form.Label>
                                                        <Form.Control type="text" value={leader.image} required onChange={(e) => console.log(e.target.value)} />
                                                    </Form.Group>
                                                </Form.Row>
                                            );
                                        })
                                    }
                                <Button variant="primary" type="submit">Update</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}