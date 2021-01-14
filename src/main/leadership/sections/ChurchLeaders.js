import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function ChurchLeaders({ leadership }) {
    return (
        <section class="container-fullwidth elders">
            <Row>
                <Col>
                    <h2 class="text-center">Church Leaders</h2>
                </Col>
            </Row>
            {
                leadership.leaders.map((leader, key) => {
                    return (
                        <Container key={key}>
                            <Row>
                                <Col sm={6}>
                                    <h3 class="elder">{leader.title}</h3>
                                    <h4>{leader.name}</h4>
                                </Col>
                                <Col sm={6}>
                                    <img src={leader.image} alt={leader.name} />
                                </Col>
                            </Row>
                        </Container>
                    );
                })
            }
        </section>
    );
}