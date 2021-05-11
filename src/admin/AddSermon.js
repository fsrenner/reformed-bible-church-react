import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

export default function AddSermon() {
  const history = useHistory();
  return(
    <section className="container-fluid login">
      <h1>Add Sermon</h1>
      <Row>
        <Button onClick={() => history.push('/admin/dashboard')}>Go Back</Button>
      </Row>
    </section>
  );
}