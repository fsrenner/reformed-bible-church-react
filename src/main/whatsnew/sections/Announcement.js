import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';

export default function Announcement({ heading, title, details, date, time }) {

  const dateTemplate = (date && time) ? <><strong>Date: </strong> {date} at {time}</> : <><strong>Date: </strong> {date}</>;
  console.log('Inside the Announcement component');
  console.log(title);
  return (

    <section className="container sermons">
      <Row style={{ marginBottom: '20px'}}>
        <Card className='container'>
          <Card.Body>
            <Card.Title className='text-center'>{ heading }</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center" style={{ paddingBottom: '15px'}}>
              { 
              !title 
                ? '' 
                : (Array.isArray(title)) 
                  ? <>{title[0]} {parse(title[1])}</>
                  : title
              }
            </Card.Subtitle>
            <Card.Text>{ dateTemplate }</Card.Text>
            <Card.Text> { details }</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </section>
  )
}