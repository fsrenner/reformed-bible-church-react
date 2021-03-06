import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { userLogin } from './adminUsers';
import Row from 'react-bootstrap/Row';
import Login from './Login';
import Dashboard from './Dashboard';

export default function Admin() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    const login = (username, password) => {
        const user = userLogin({
            username,
            password
        });
        if (typeof user === 'string') {
            history.push('/unauthorized');
        }
        setUser({
            username,
            password
        });
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedIn(false);
        history.push('/');
    };

    return (
        <section className="container-fluid login">
            <Row>
                { (!loggedIn) ? <Login login={login} /> : <Dashboard user={user} logout={logout} /> }
            </Row>
        </section>
    );
}