import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeafletMap from './LeafletMap';

export default function SundayGatherings({ home }) {
    return (
        <section className="container-fluid sunday-gatherings comp">
            <Row>
                <Col>
                    <h2 className="text-center">Sunday Gathering until Sunday, January 30, 2022</h2>
                </Col>
            </Row>
            <LeafletMap home={home}/>
        </section>
    );
}