import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Login({ login }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value.trim());
    const handlePasswordChange = (e) => setPassword(e.target.value.trim());

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password);
        setUsername('');
        setPassword('');
    };

    return (
        <>
            <Col md={2}></Col>
            <Col md={8}>
                <Card bg="light" border="info" style={{ marginTop: '15%' }}>
                    <Card.Header className="text-center">Admin Login</Card.Header>
                    <Card.Body>
                        <Card.Title>Login below to access the admin dashboard</Card.Title>
                        <Form method="post">
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" onChange={handleUsernameChange} value={username} required />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={handlePasswordChange} value={password} required />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleLogin}>Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={2}></Col>
        </>
    );
}