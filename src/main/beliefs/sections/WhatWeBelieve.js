import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function WhatWeBelieve({ beliefs }) {
    return (
        <section className="container-fullwidth our-beliefs">
            <Row>
                <Col>
                    <h2 className="text-center">Our Beliefs</h2>
                </Col>
            </Row>
            <Container>
                <Row className="statements">
                    <Col sm={6}>
                        <p>{beliefs.ourBeliefs.lead}</p>
                            <ul>
                                {beliefs.ourBeliefs.statements.map((statement, key) => <li key={key}><a href={statement.url} target="_blank" rel="noreferrer">{statement.text}</a></li>)}
                            </ul>
                    </Col>
                    <Col sm={6}>
                        <img src="./resources/UnionWithChrist.jpg" alt="Union with Christ" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}