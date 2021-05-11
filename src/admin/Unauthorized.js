import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function Unauthorized({ message }) {
    const history = useHistory();
    const location = useLocation();
    const goBack = () => history.push('/admin');
    const goHome = () => history.push('/');

    return(
        <section className="container-fluid unauthorized">
        <Row>
            <Col>
            <h1>{location.state.error ? location.state.error : `You are not authorized to access the admin section`}</h1>
            <p>{(location.state.message) ? location.state.message : JSON.stringify(location.state.err)}</p>
            <Button variant="primary" className="unauthorized-button" onClick={goBack}>Go Back</Button>
            <Button variant="primary" className="unauthorized-button" onClick={goHome}>Go Home</Button>
            </Col>
            
        </Row>
        </section>
    );
}