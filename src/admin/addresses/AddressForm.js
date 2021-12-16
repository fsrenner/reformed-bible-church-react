import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { statesArray } from '../../util/config';
import SuccessModal from '../../modals/SuccessModal';
import { setSuccessModalShow, setSuccessModalMessage, setLoading, setError } from '../../redux/actions';
import request from '../../services/api';

export default function AddressForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const show = useSelector((s) => s.modal.successShow);
  const message = useSelector((s) => s.modal.successMessage);

  const { id } = useParams();
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [st, setSt] = useState('');
  const [zip, setZip] = useState('');

  async function postAddress(newAddress) {
    dispatch(setLoading(true));
    try {
      const result = await request('POST', '/addresses', null, newAddress);
      if (result) {
        dispatch(setSuccessModalMessage('Successfully created the address'));
        dispatch(setSuccessModalShow(true));
      } else {
        dispatch(setError({
          error: 'There was an error adding the address',
          showError: true
        }));
      }
      dispatch(setLoading(false));
      history.push('/admin');
      
    } catch (err) {
      console.log(err);
    }
  }
  

  useEffect(() => {
    async function fetchAddressFormResources() {
      if (id) {
        try {
          const address = await request('GET', `/addresses/${id}`);
          setStreet(address.street);
          setCity(address.city);
          setCounty(address.county);
          setSt(address.state);
          setZip(address.zip)
        } catch (err) {
          console.log(err);
        }
      }
    }
    fetchAddressFormResources();
  }, [id])

  const onStreetInput = (e) => setStreet(e.target.value);
  const onCityInput = (e) => setCity(e.target.value);
  const onCountyInput = (e) => setCounty(e.target.value);
  const onStChange = (e) => setSt(e.target.value);
  const onZipInput = (e) => setZip(e.target.value);
  const onHide = () => dispatch(setSuccessModalShow(false));

  const onFormSubmit = e => {
    e.preventDefault();
    const body = {
      street,
      city,
      county,
      state: st,
      zip
    };
    postAddress(body);
  };

  return (
    <div style={
        { 
          paddingTop: '100px',
          minHeight: '90vh'
        }
      }
    >
      <Button variant="primary" onClick={() => history.push('/admin')} style={{ float: 'right' }}>Back</Button>
      <h1>Address</h1>
      <Container>
        <Card>
          <Card.Body>
            <Form onSubmit={onFormSubmit}>
              <Form.Group controlId="street">
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" placeholder="Enter a street" value={street} required onChange={onStreetInput}/>
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter a city" value={city} required onChange={onCityInput}/>
              </Form.Group>
              <Form.Group controlId="county">
                <Form.Label>County</Form.Label>
                <Form.Control type="text" placeholder="Enter a county" value={county} required onChange={onCountyInput}/>
              </Form.Group>
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" className="form-select" aria-label="State select" value={st} onChange={onStChange}>
                  <option key={0} value="">Select State</option>
                  {
                    statesArray.map(state => <option 
                      key={state.abbreviation} 
                      value={state.abbreviation}
                      selected={st === state.abbreviation}
                    >
                      {state.name}
                    </option>)
                  }
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="zip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Enter a five digit zip code" pattern="[0-9]{5}" value={zip} required onChange={onZipInput}/>
              </Form.Group>
              
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <SuccessModal show={show} onHide={onHide} message={message} />
    </div>
  );
}