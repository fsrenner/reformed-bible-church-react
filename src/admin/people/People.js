
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Person from './Person';
import { apiUrl } from '../../util/config';
import request from '../../services/api';

export default function People() {
  const history = useHistory();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const data = await request('GET', '/people');
        setPeople(data);
      } catch(err) {
        console.log(err);
      }
    }
    fetchPeople();
  }, []);

  console.log(people);

  return(
    <div>
      <h1>Reformed Bible Church People</h1>
      <Button variant="primary" onClick={() => history.push('/person')}>Add Person</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Street</th>
            <th>City</th>
            <th>County</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Member</th>
            <th>Parent</th>
            <th>Married</th>
            <th>Household</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            people ? people.map(person => <Person key={person.id} personData = {person} />) : null
          }
        </tbody>
      </Table>
    </div>
    
  );
}