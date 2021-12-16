import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import request from '../../services/api';

export default function HouseholdForm() {
  const { id } = useParams();
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState(0);
  const [familyname, setFamilyname] = useState([]);

  useEffect(() => {
    async function fetchHouseholdFormResources() {
      let household;
      
      try {
        const addresses = await request('GET', '/addresses');
        setAddresses(addresses.map((addr) => ({
            value: addr.id,
            display: `${addr.street}, ${addr.city}, ${addr.state}, ${addr.zip}`
        })));
        if (id) {
          household = await request('GET', `/households/${id}`);
          setFamilyname(household.familyname);
          setAddress(household.address);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchHouseholdFormResources();
  }, [id]);

  const onFamilynameInput = (e) => setFamilyname(e.target.value);
  const onAddressSelect = (e) => setAddress(e.target.value);

  const onFormSubmit = e => {
    e.preventDefault();
    const body = {
      familyname,
      address,
    };
    console.log(body);
  };

  return (
    <div style={
        { 
          paddingTop: '100px',
          minHeight: '90vh'
        }
      }
    >
      <h1>Household</h1>
      <Container>
        <Card>
          <Card.Body>
            <Form onSubmit={onFormSubmit}>
              <Form.Group controlId="familyname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a family name" value={familyname} required onChange={onFamilynameInput}/>
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control as="select" className="form-select" aria-label="Address select" value={address} onChange={onAddressSelect}>
                  <option key={0} value="">Select Address</option>
                  {
                    addresses.map(addr => <option 
                      key={addr.value} 
                      value={addr.value}
                      selected={address.id === addr.value}
                    >
                      {addr.display}
                    </option>)
                  }
                </Form.Control>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );

}
