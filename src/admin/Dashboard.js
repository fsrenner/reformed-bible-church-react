import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import SermonData from './SermonData';

export default function Dashboard() {
    const history = useHistory();
    const location = useLocation();

    console.log(location.state);
    const loggedIn = location.state.loggedIn;
    const user = location.state.user;

    // if (!loggedIn) {
    //     history.push('/admin/unauthorized');
    // } else {
        return (
            <section className="container-fluid login">
                <Row>
                    <SermonData loggedIn={loggedIn}/>
                    <p>Logged In: {loggedIn}</p>
                    <p>User: {user.username}</p>
                </Row>
            </section>
        );
    // }
    
}