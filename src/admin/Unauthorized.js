import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Unauthorized({ message }) {
    const history = useHistory();
    const goBack = () => history.push('/admin');
    const goHome = () => history.push('/');

    return(
        <>
            <h1>You are not authorized to access the admin section</h1>
            <p>{message}</p>
            <button onClick={goBack}>Go Back</button>
            <button onClick={goHome}>Go Home</button>
        </>
    )
}