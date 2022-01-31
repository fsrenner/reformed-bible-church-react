import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeafletMap from './LeafletMap';

export default function SundayGatherings({ home }) {
    return (
        <section className="container-fluid sunday-gatherings">
            <Row>
                <Col style={{ marginBottom: '50px'}}>
                    <h2 className="text-center">Sunday Gathering (New Location)</h2>
                </Col>
            </Row>
            <LeafletMap home={home}/>
        </section>
    );
}