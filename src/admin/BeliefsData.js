import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { beliefs } from '../util/siteContent';

export default function BeliefsData() {
    const [beliefsData, setBeliefsData] = useState(beliefs);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card bg="light" border="info">
                        <Card.Header className="text-center">Beliefs Page Data</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Form method="post">
                                    <Form.Group controlId="mission">
                                        <Form.Label>Mission</Form.Label>
                                        <Form.Control as="textarea" rows={2} value={beliefsData.mission} />
                                    </Form.Group>
                                    <Form.Group controlId="reformed">
                                        <Form.Label>Reformed</Form.Label>
                                        {beliefsData.reformed.map((paragraph, key) => <Form.Control key={key} as="textarea" rows={5} value={paragraph} />)}
                                    </Form.Group>
                                    <Form.Group controlId="solas">
                                        <Form.Label>Solas</Form.Label>
                                        <Form.Control as="textarea" rows={2} value={beliefsData.solas.lead} />
                                    </Form.Group>
                                        {beliefsData.solas.content.map((paragraph, key) => {
                                            return (
                                                <Form.Group  key={key}>
                                                    <Form.Label className="text-center">{paragraph.solaTitle}</Form.Label>
                                                    <Form.Control as="textarea" rows={2} value={paragraph.solaContent} />
                                                </Form.Group>
                                            );
                                        })}
                                    <Form.Group controlId="confessional">
                                        <Form.Label>Confessional</Form.Label>
                                        {beliefsData.confessional.map((paragraph, key) => <Form.Control key={key} as="textarea" rows={10} value={paragraph} />)}
                                    </Form.Group>
                                    <Form.Group controlId="covenantal">
                                        <Form.Label>Covenantal</Form.Label>
                                        {beliefsData.covenantal.map((paragraph, key) => <Form.Control key={key} as="textarea" rows={7} value={paragraph} />)}
                                    </Form.Group>
                                    <Form.Group controlId="ordinaryMeansOfGrace">
                                        <Form.Label>Ordinary Means of Grace</Form.Label>
                                        {beliefsData.ordinaryMeansOfGrace.map((paragraph, key) => <Form.Control key={key} as="textarea" rows={8} value={paragraph} />)}
                                    </Form.Group>
                                    <Form.Group controlId="familyIntegrated">
                                        <Form.Label>Family Integrated</Form.Label>
                                        {beliefsData.familyIntegrated.map((paragraph, key) => <Form.Control key={key} as="textarea" rows={6} value={paragraph} />)}
                                    </Form.Group>
                                    <Form.Group controlId="ourBeliefs">
                                        <Form.Label>Our Beliefs</Form.Label>
                                        <Form.Control as="textarea" rows={2} value={beliefsData.ourBeliefs.lead} />
                                    </Form.Group>
                                    {
                                        beliefsData.ourBeliefs.statements.map((paragraph, key) => {
                                            return (
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="url">
                                                        <Form.Label>Url</Form.Label>
                                                        <Form.Control type="text" value={paragraph.url} required />
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="text">
                                                        <Form.Label>Text</Form.Label>
                                                        <Form.Control type="text" value={paragraph.text} required />
                                                    </Form.Group>
                                                </Form.Row>
                                            );
                                        })
                                    }
                                    <Button variant="primary" type="submit">Update</Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}