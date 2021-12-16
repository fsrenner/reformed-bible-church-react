import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import request from '../../services/api';
import Address from './Address';

export default function Addresses() {

  const history = useHistory();
  const user = useSelector((s) => s.auth.user);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    async function fetchAddresses() {
      try {
        const addrs = await request('GET', '/addresses');
        setAddresses(addrs);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAddresses();
  }, []);

  return(
    <div>
      <h1>Addresses</h1>
      { 
        user && (user.role === 1 || user.role === 2)
          ? <Button variant="outline-primary" onClick={() => history.push('/address')}>Add Address</Button>
          : null
      }
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Street</th>
            <th>City</th>
            <th>County</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {
            addresses ? addresses.map(address => <Address key={address.id} addressData={address} />) : null
          }
        </tbody>
      </Table>
    </div>
  );
}