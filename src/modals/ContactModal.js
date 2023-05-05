import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactForm from '../main/contact/sections/ContactForm';

export default function ContactModal({ show, onHide }) {
    return(
        <Modal show={show} onHide={onHide} size="xl" animation={true}>
            <Modal.Header closeButton>
                <Modal.Title id="exampleModalLabel">Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactForm onHide={onHide} />
            </Modal.Body>
        </Modal>
    );
}