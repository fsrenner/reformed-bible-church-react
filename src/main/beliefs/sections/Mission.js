import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function Mission({ beliefs }) {
    return (
        <section className="container-fullwidth mission">
            <Row>
                <Col>
                    <h2 className="text-center">Mission</h2>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <p>{beliefs.mission}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}