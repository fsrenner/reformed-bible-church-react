import React from 'react';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Houshold({ householdData }) {

  const history = useHistory();
  const updateHousehold = householdId => history.push(`/household/${householdId}`);

  return(
    <tr id={`household-${householdData.id}`}>
      <td>{ householdData.familyname }</td>
      <td>{ householdData.address }</td>
      <td><Button variant="secondary" onClick={() => updateHousehold(householdData.id)}>Update</Button></td>
    </tr>
  );
}