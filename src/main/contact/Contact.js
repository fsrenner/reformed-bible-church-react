import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactInfo from './sections/ContactInfo';
import ContactForm from './sections/ContactForm';

export default function Contact() {
    return (
        <>
            <ContactInfo />
            {/* <section className='container' style={{ marginBottom: '30px'}}>
                <Row style={{ marginBottom: '20px', marginTop: '20px'}}>
                    <Col>
                        <h2 className="text-center">Send Us a Message</h2>
                    </Col>
                </Row>
                <ContactForm />
            </section> */}
            
        </>
    );
}
