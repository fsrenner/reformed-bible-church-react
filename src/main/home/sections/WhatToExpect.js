import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WhatToExpect({ home }) {
    return (
        <section className="container-fluid what-to-expect">
            <Row>
                <Col>
                    <h2 className="text-center">What to Expect</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <ul className="what-to-expect-list">
                        {
                            home.expectations.map((item, key) => {
                                return <li key={key}>{item}</li>
                            })
                        }
                    </ul>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </section>
    );
}