import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { home } from '../util/siteContent';

export default function HomeData() {
    const [homeData, setHomeData] = useState(home);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card bg="light" border="info">
                    <Card.Header className="text-center">Home Page Data</Card.Header>
                        <Card.Body>
                            <Form method="post">
                                <Form.Group controlId="message">
                                    <Form.Label>Jumbotron Message</Form.Label>
                                    <Form.Control as="textarea" rows={2} value={homeData.jumbotron} onChange={(e) => console.log(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="message">
                                    <Form.Label>Welcome</Form.Label>
                                    <Form.Control as="textarea" rows={5} value={homeData.welcome} onChange={(e) => console.log(e.target.value)} />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="bibleStudy">
                                        <Form.Label>Bible Study</Form.Label>
                                        <Form.Control type="text" value={homeData.bibleStudyTime} required onChange={(e) => console.log(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="worship">
                                        <Form.Label>Worship</Form.Label>
                                        <Form.Control type="text" value={homeData.worshipTime} required onChange={(e) => console.log(e.target.value)} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="street">
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control type="text" value={homeData.locationStreet} required onChange={(e) => console.log(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" value={homeData.locationCity} required onChange={(e) => console.log(e.target.value)} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="googleMapUrl">
                                    <Form.Label>Google Map Url</Form.Label>
                                    <Form.Control type="text" value={homeData.googleMapUrl} required onChange={(e) => console.log(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="message">
                                    <Form.Label>What to Expect</Form.Label>
                                    {homeData.expectations.map((expectation, key) => <Form.Control key={key} as="textarea" rows={2} value={expectation}  onChange={(e) => console.log(e.target.value)} />)}
                                </Form.Group>
                                <Button variant="primary" type="submit">Update</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}