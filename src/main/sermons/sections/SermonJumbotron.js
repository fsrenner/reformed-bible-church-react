import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function SermonJumbotron() {
  return (
    <section className="container-fullwidth sermons">
        <Jumbotron>
            <div className="jumbotron-content">
                <h1>Sermons</h1>
            </div>
        </Jumbotron>
    </section>
  );
}