import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const config = window.config;
const APPLICATION_JSON = 'application/json'

export default function ContactForm({ onHide }) {

    const [validated, setValidated] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstName = e => setFirstName(e.target.value.trim());
    const handleLastName = e => setLastName(e.target.value.trim());
    const handleEmail = e => setEmail(e.target.value.trim());
    const handlePhoneNumber = e => setPhoneNumber(e.target.value.trim());
    const handleMessage = e => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email) {
            setValidated(false);
        } else {
            setValidated(true);
            const body = {
                firstName,
                lastName,
                email,
                phoneNumber,
                message
            };
            console.log(body);
            fetch(config.contactFormUrl, {
                method: 'post',
                body: JSON.stringify(body)
            })
            .then(response => {
                const contentType = response.headers.get('content-type');
                if (contentType.includes(APPLICATION_JSON)) {
                    return response.json();
                } else {
                    return response.text();
                }
            })
            .then(data => {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setMessage('');
                console.log(data);
            })
            .catch(e => console.error(e));
            onHide();
        }
    }

    return (
        <Form action="" id="contactForm" method="post"  noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="firstName">
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control type="text" onChange={handleFirstName} value={firstName} name='firstName' title='firstName' required />
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control type="text" onChange={handleLastName} value={lastName} name='lastName' title='lastName' required />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="email">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" onChange={handleEmail} value={email} name='email' title='email' required />
                </Form.Group>
                <Form.Group as={Col} controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" onChange={handlePhoneNumber} value={phoneNumber} name='phoneNumber' title='phoneNumber' />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleMessage} value={message} name='message' title='message' />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );

}

