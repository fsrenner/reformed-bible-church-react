import React from 'react';
// import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge'

export default function SuccessModal ({ show, onHide, message}) {

  setTimeout(() => {
    onHide();
  }, 2000);

  return (
    <Modal show={show} onHide={onHide} size="md" animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Badge pill bg="success">Success</Badge>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
    </Modal>
  );
}