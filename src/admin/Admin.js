import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { userLogin } from './adminUsers';
import Row from 'react-bootstrap/Row';
import Login from './Login';

export default function Admin() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    const login = async (username, password) => {
        try {
            const user = await userLogin({
                username,
                password
            });
            if (typeof user === 'string') {
                history.push({
                    pathname: '/admin/unauthorized',
                    state: {
                        message: user
                    }
                });
            }
            setUser({
                username,
                password
            });
            setLoggedIn(true);
            history.push({
                pathname: '/admin/dashboard',
                state: {
                    loggedIn,
                    user
                }
            });
        } catch (err) {
            const error = `There was an error logging in`
            console.error(error, err)
            setLoggedIn(false);
            history.push({
                pathname: '/admin/unauthorized', 
                state: {
                    error,
                    err: `${err}`
                }
            });
        }
        
    };

    return (
        <section className="container-fluid login">
            <Row>
                <Login login={login} />
            </Row>
        </section>
    );
    
}