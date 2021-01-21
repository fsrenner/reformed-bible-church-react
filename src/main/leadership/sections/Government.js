import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function Government({ leadership }) {
    return (
        <section className="container-fullwidth government">
            <Row>
                <Col>
                    <h2 className="text-center">Government</h2>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <p>{leadership.government}</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h3 className="elder">Elder</h3>
                        <p>{leadership.elder}</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h3 className="deacon">Deacon</h3>
                        <p>{leadership.deacon}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}