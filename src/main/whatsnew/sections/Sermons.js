import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Sermons({ title, scripture, date, src, speaker, series, rbcYTPageUrl }) {

  return (
    <section className="container sermons">
      <Row className="events-row">
          <Col>
              <h2 className="text-center">Sermons</h2>
          </Col>
      </Row>
      <h4>Latest Sermon</h4>
      <Row style={{ marginBottom: '20px'}}>
        <Col md={6}>
        <iframe 
          src={src} 
          width='100%'
          height='100%'
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
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
      <h4>All Sermon Videos and Resources</h4>
      <Button variant={'secondary'} href={rbcYTPageUrl} target="_blank">RBC YouTube Page</Button>
      <Row>

      </Row>
    </section>
  )
}