import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { contactFormUrl } from './util/config';

export default function ContactModal({ show, onHide }) {
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
            fetch(contactFormUrl, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(data => {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setMessage('');
                
                onHide();
            })
            .catch(e => console.error(e));
        }
    }

    return(
        <Modal show={show} onHide={onHide} size="xl" animation={true}>
            <Modal.Header closeButton>
                <Modal.Title id="exampleModalLabel">Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form action="" id="contactForm" method="post"  noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control type="text" onChange={handleFirstName} value={firstName} required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="lastName">
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control type="text" onChange={handleLastName} value={lastName} required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control type="text" onChange={handleEmail} value={email} required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" onChange={handlePhoneNumber} value={phoneNumber} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleMessage} value={message} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}