import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SundayGatherings({ home }) {
    return (
        <section className="container-fluid sunday-gatherings comp">
            <Row>
                <Col>
                    <h2 className="text-center">Sunday Gathering</h2>
                </Col>
            </Row>
            <Row id="mapid">
                <Col sm={1}></Col>
                <Col sm={4} id="serviceTimes">
                    <h3 className="text-center">Times and Location</h3>
                    <br />
                    <p className="text-center lead" id="bibleStudy">Bible Study | {home.bibleStudyTime}</p>
                    <p className="text-center lead">Worship | {home.worshipTime}</p>
                    <hr />
                    <p className="text-center street">{home.locationStreet}</p>
                    <p className="text-center">{home.locationCity}</p>
                    <div id="getDirections">
                        <a href="https://goo.gl/maps/TWWNN8Qij1n7BYWc9" target="_blank" className="btn" rel="noreferrer">Get Directions</a>
                    </div>
                </Col>
                <Col sm={1}></Col>
                <Col sm={6}></Col>
            </Row>
        </section>
    );
}