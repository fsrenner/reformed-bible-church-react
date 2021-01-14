import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Welcome({ home }) {
    return(
        <section className="container-fluid welcome">
            <Row>
                <Col>
                    <h2 className="text-center">Welcome!</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{home.welcome}</p>
                </Col>
            </Row>
        </section>
    );
}