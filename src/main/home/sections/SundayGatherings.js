import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeafletMap from './LeafletMap';

export default function SundayGatherings({ home }) {
    return (
        <section className="container-fluid sunday-gatherings">
            <Row id="specialRow">
                <Col style={{ marginBottom: '50px'}}>
                    <h2 className="text-center">Gathering Times and Location</h2>
                </Col>
            </Row>
            <LeafletMap home={home}/>
        </section>
    );
}