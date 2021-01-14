import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function RbcJumbotron({ home }) {
    return (
        <section className="container-fullwidth rbc">
            <Jumbotron>
                <div className="jumbotron-content">
                    <h1>Reformed Bible Church</h1>
                    <p className="lead">{home.jumbotron}</p>
                </div>
            </Jumbotron>
        </section>
    );
}