import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import request from '../../services/api';
import Household from './Household';

export default function Households() {

  const history = useHistory();
  const [households, setHouseholds] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const addrs = await request('GET', '/addresses');
        const hshlds = await request('GET', '/households');
        const hshldsWithAddrs = hshlds.map(hshld => {
          const associatedAddr = addrs.find(addr => addr.id === hshld.address);
          hshld.address = `${associatedAddr.street}, ${associatedAddr.city}, ${associatedAddr.state}, ${associatedAddr.zip}`
          return hshld;
        });
        setHouseholds(hshldsWithAddrs);
      } catch(err) {
        console.log(err);
      }
    }
    fetchPeople();
  }, []);

  return(
    <div>
      <h1>Households</h1>
      <Button variant="primary" onClick={() => history.push('/household')}>Add Household</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Family Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            households ? households.map(household => <Household key={household.id} householdData={household} />) : null
          }
        </tbody>
      </Table>
    </div>
    
  );
}