import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeafletMap from './LeafletMap';

export default function SundayGatherings({ home }) {
    return (
        <section className="container-fluid sunday-gatherings comp">
            <Row>
                <Col>
                    <h2 className="text-center">Sunday Gathering</h2>
                </Col>
            </Row>
            <LeafletMap home={home}/>
        </section>
    );
}