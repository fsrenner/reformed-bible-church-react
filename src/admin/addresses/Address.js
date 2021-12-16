import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import request from '../../services/api';

export default function Address({ addressData }) {

  const history = useHistory();
  const user = useSelector((s) => s.auth.user);
  const updateAddress = addressId => history.push(`/address/${addressId}`);
  const deleteAddress = async addressId => {
    if (window.confirm(`Are you sure you want to delete address ${addressId}`)) {
      try {
        await request('DELETE', `/addresses/${addressId}`);
        history.push('/admin');
      } catch (err) {
        console.log(err);
      }
    }
  }

  return(
    <tr id={`address-${addressData.id}`}>
      <td>{ addressData.street }</td>
      <td>{ addressData.city }</td>
      <td>{ addressData.county }</td>
      <td>{ addressData.state }</td>
      <td>{ addressData.zip }</td>
      { 
        user && (user.role === 1 || user.role === 2)
          ? <td>
              <Button variant="link" size="sm" onClick={() => updateAddress(addressData.id)}>Edit</Button>
              <Button variant="link" size="sm" onClick={() => deleteAddress(addressData.id)}>Delete</Button>
            </td>
          : null
      }
      
      
    </tr>
  );
}