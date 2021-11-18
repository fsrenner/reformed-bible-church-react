import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Person({ personData }) {

  const updatePerson = personId => alert(`Updating person ${personId}`);

  return (
    <tr id={`person-${personData.id}`}>
      <td>{ personData.firstname }</td>
      <td>{ personData.lastname }</td>
      <td>{ personData.email }</td>
      <td>{ personData.phonenumber }</td>
      <td>{ personData.address.street }</td>
      <td>{ personData.address.city }</td>
      <td>{ personData.address.county }</td>
      <td>{ personData.address.state }</td>
      <td>{ personData.address.zip }</td>
      <td>{ personData.member ? 'yes' : 'no' }</td>
      <td>{ personData.parent ? 'yes' : 'no' }</td>
      <td>{ personData.married ? 'yes' : 'no' }</td>
      <td>{ personData.household }</td>
      <td><Button variant="secondary" onClick={() => updatePerson(personData.id)}>Update</Button></td>
    </tr>
  )
}