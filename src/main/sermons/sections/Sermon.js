import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Sermon({ title, scripture, date, src, speaker, series }) {

  return (
    <Container 
      style={
        { 
          marginTop: '20px', 
          marginBottom: '20px', 
          borderBottom: '1px solid #ccc', 
          padding: '70px',
        }
      } 
      class="sermon"
    >
      <Row>
        <Col md={6}>
        <iframe 
          src={src} 
          width='100%'
          height='100%'
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        </Col>
        <Col md={6}>
        <Card style={{ border: 'none' }}>
          <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{ scripture }</Card.Subtitle>
            <Card.Text style={{ margin: 0 }}><strong>Date: </strong> { date }</Card.Text>
            <Card.Text style={{ margin: 0 }}><strong>Speaker: </strong> { speaker }</Card.Text>
            <Card.Text style={{ margin: 0 }}><strong>Series: </strong> { series }</Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  )
}