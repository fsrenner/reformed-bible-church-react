import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function RecommendedResources({ beliefs }) {
    return (
        <section className="container-fullwidth our-beliefs">
            <Row>
                <Col>
                    <h2 className="text-center">Recommended Resources</h2>
                </Col>
            </Row>
            <Container>
                <Row className="statements">
                    <Col sm={6}>
                        <img src="./resources/reformedresources.jpeg" alt="Reformed Resources" />
                    </Col>
                    <Col sm={6}>
                        <p>Here are some resources that we love</p>
                            <ul>
                                {beliefs.resources.map((resource, key) => <li key={key}><a href={resource.url} target="_blank" rel="noreferrer">{resource.title}</a></li>)}
                            </ul>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    );
}