import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NewLocation ({ home }) {
  return (
      <section className="container-fluid sunday-gatherings comp">
          <Row>
              <Col>
                  <h2 className="text-center">New Location</h2>
              </Col>
          </Row>
          <Row className="locationInformation">
              <Col sm={12} id="serviceTimes">
                <h3 className="text-center">{ home.newLocationTitle }</h3>
                <br />
                <div style={{ 
                      width: '80%',
                      margin: '0 auto'
                    }}>
                  { home.newLocationText.map(text => <p>{ text }</p>)}
                  <hr />
                  <div>
                    {(home.newLocationName) ? <p className="text-center street">{home.newLocationName}</p> : null}
                    <p className="text-center">{home.newLocationStreet}</p>
                    <br />
                    <p className="text-center">{home.newLocationCity}</p>
                  </div>
                  
                </div>
                <br />
                <div id="getDirections">
                  <a href={home.newLocationMapUrl} target="_blank" rel="noreferrer" className="btn">Get Directions</a>
                </div>
                
              </Col>
          </Row>
      </section>
    );
}