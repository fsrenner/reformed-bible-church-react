import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import request from '../../services/api';
import { login } from '../../redux/actions';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.user?.username);

  if (isLoggedIn) {
    history.push('/admin');
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function postLogin(user) {
    try {
      const result = await request('POST', '/auth/login', null, user);
      dispatch(login({ user: result }));
      history.push('/admin');
    } catch (err) {
      console.log(err);
    }
  }

  const onUsernameInput = (e) => setUsername(e.target.value);
  const onPassInput = (e) => setPassword(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      username,
      password
    }
    postLogin(body);
  }

  return (
    <div style={
      { 
        paddingTop: '100px',
        minHeight: '90vh'
      }
    }
  >
    <h1>Login</h1>
    <Container>
      <Card>
        <Card.Body>
          <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" value={username} required onChange={onUsernameInput}/>
            </Form.Group>
            <Form.Group controlId="pass">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" value={password} required onChange={onPassInput}/>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  </div>
  )
}