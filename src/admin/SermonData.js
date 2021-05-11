import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
const sermonsUrl = 'http://api.reformedbible.org/sermon';

export default function SermonData({ }) {
  const history = useHistory();
  const [sermons, setSermons] = useState([]);
  useEffect(() => {
    window.scrollTo(0,0);
    fetch(sermonsUrl)
    .then(response => response.json())
    .then(data => setSermons(data));
  }, []);

  const addSermon = () => history.push('/admin/dashboard/sermon/add');
  const updateSermon = (sermon) => history.push({
    pathname: '/admin/dashboard/sermon/edit',
    state: sermon
  });
  const deleteSermon = (sermonId) => () => history.push({
    pathname: '/admin/dashboard/sermon/delete',
    state: sermonId
  });

  return (
    <Container>
      <h3>Sermon Data Here!</h3>
      <br />
      <Button variant="outline-success" onClick={() => addSermon()}>Add Sermon</Button>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image Source</th>
              <th>Image Alt</th>
              <th>Scripture</th>
              <th>Date</th>
              <th>Sermon Href</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            sermons.map((sermon) => {
              return(
                <tr key={sermon.id}>
                  <td>{sermon.title}</td>
                  <td>{sermon.imagesource}</td>
                  <td>{sermon.imagealt}</td>
                  <td>{sermon.scripture}</td>
                  <td>{sermon.date}</td>
                  <td>{sermon.sermonhref}</td>
                  <td>
                  <Button variant="outline-primary" onClick={() => updateSermon(sermon)}>Update</Button> <Button variant="outline-danger" onClick={() => deleteSermon(sermon.id)}>Delete</Button> 
                  </td>
                </tr>
              );
            })
          }
          </tbody>
        </Table>
      </Row>
      <Row>
        
      </Row>
    </Container>
  
  )
}