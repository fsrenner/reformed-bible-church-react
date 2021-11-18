import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import request from '../../services/api';

export default function PersonForm() {

  const { id } = useParams();

  const [addresses, setAddresses] = useState([]);
  const [households, setHouseholds] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState(0);
  const [household, setHousehold] = useState('');
  const [member, setMember] = useState(false);
  const [married, setMarried] = useState(false);
  const [parent, setParent] = useState(false);

  useEffect(() => {
    async function fetchPeopleFormResources() {
      let person;
      try {
        const addresses = await request('GET', '/addresses');
        const households = await request('GET', '/households', { distinct: true });
        setAddresses(addresses.map((addr) => {
          return {
            value: addr.id,
            display: `${addr.street}, ${addr.city}, ${addr.state}, ${addr.zip}`
          }
        }));
        setHouseholds(households.map((household) => {
          return {
            value: household.familyname,
            display: household.familyname
          }
        }));
        if (id) {
          person = await request('GET', `/people/${id}`);
          setFirstname(person.firstname);
          setLastname(person.lastname);
          setEmail(person.email);
          setPhonenumber(person.phonenumber);
          setParent(person.parent);
          setMarried(person.married);
          setMember(person.member);
          setAddress(person.address.id);
          setHousehold(person.household);
        }
      }catch (err) {
        console.log(err);
      }
    } 
    fetchPeopleFormResources();
  }, []);

  const onFirstnameInput = (e) => setFirstname(e.target.value);
  const onLastnameInput = (e) => setLastname(e.target.value);
  const onEmailInput = (e) => setEmail(e.target.value);
  const onPhonenumberInput = (e) => setPhonenumber(e.target.value);
  const onAddressSelect = (e) => setAddress(e.target.value);
  const onHouseholdSelect = (e) => setHousehold(e.target.value);
  const onMemberChange = () => setMember(!member);
  const onMarriedChange = () => setMarried(!married);
  const onParentChange = () => setParent(!parent);

  console.log(address);
  console.log(household);

  const onFormSubmit = e => {
    e.preventDefault();
    const body = {
      firstname,
      lastname,
      email,
      phonenumber,
      address,
      household,
      married,
      parent,
      member,
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
      <h1>This is the Person form component</h1>
      <Container>
        <Card>
          <Card.Body>
            <Form onSubmit={onFormSubmit}>
              <Form.Group controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a first name" value={firstname} required onChange={onFirstnameInput}/>
              </Form.Group>
              <Form.Group controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a last name" value={lastname} required onChange={onLastnameInput}/>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter an email address" required value={email} onChange={onEmailInput}/>
              </Form.Group>
              <Form.Group controlId="phonenumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter a phone number" required value={phonenumber} onChange={onPhonenumberInput}  pattern="[1-9]{1}[0-9]{9}"/>
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
              <Form.Group className="mb-3" >
                <Form.Check type="checkbox" inline label="Married" id="married" checked={married} onChange={onMarriedChange}/>
                <Form.Check type="checkbox" inline label="Parent" id="parent" checked={parent} onChange={onParentChange}/>
                <Form.Check type="checkbox" inline label="Member" id="member" checked={member} onChange={onMemberChange}/>
              </Form.Group>
              <Form.Group controlId="household">
                <Form.Label>Household</Form.Label>
                <Form.Control as="select" className="form-select" aria-label="Household select" onChange={onHouseholdSelect}>
                  <option key={0} value="">Select Household</option>
                  {
                    households.map(
                      hshld => <option 
                        key={hshld.value} 
                        value={hshld.value}
                        selected={household === hshld.value}
                      >
                        {hshld.display}
                      </option>
                    )
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