import React from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function Unauthorized({ message }) {
    const history = useHistory();
    const goBack = () => history.push('/admin');
    const goHome = () => history.push('/');

    return(
        <section className="container-fluid unauthorized">
        <Row>
            <Col>
            <h1>You are not authorized to access the admin section</h1>
            <p>{message}</p>
            <Button variant="primary" className="unauthorized-button" onClick={goBack}>Go Back</Button>
            <Button variant="primary" className="unauthorized-button" onClick={goHome}>Go Home</Button>
            </Col>
            
        </Row>
        </section>
    );
}