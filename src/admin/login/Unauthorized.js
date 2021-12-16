import React from 'react';
import { useHistory } from 'react-router';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Unauthorized() {
  const history = useHistory();

  return(
    <div style={
      { 
        paddingTop: '100px',
        minHeight: '90vh'
      }
    }
  >
    
    <Container>
    <Card>
      <Card.Title>
        <h1 style={{paddingTop: '10px', 'paddingLeft': '20px'}}>Unauthorized</h1>
      </Card.Title>
      <Card.Body>
        <p>You are not authorized to access this part of the application</p>
        <Button style={{ marginRight: '10px'}} type="button" onClick={() => history.push('/login')}>Go Back</Button>
        <Button type="button" onClick={() => history.push('/')}>Go Home</Button>
      </Card.Body>
    </Card>
      
    </Container>
  </div>
  )
}