import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function Give() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <Container fluid className="give">
            <Row>
                <Col>
                    <h1>This is the Give component</h1>
                    <p>This component isn't ready yet</p>
                </Col>
            </Row>
        </Container>
    );
}