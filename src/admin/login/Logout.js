import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import request from '../../services/api';
import { logout } from '../../redux/actions';

export default function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.user?.username);

  async function postLogout() {
    try {
      const result = await request('POST', '/auth/logout', null, {});
      console.log(result)
      dispatch(logout());
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  const logoutUser = (e) => {
    e.preventDefault();
    if (loggedInUser) {
      postLogout();
    } else {
      history.push('/');
    }
  }

  return <Button type='submit' style={{ float: 'right'}} onClick={logoutUser}>Logout</Button>

  
}