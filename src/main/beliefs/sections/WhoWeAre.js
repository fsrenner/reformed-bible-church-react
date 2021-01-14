import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function WhoWeAre({ beliefs }) {
    return (
        <section className="container-fullwidth who-we-are">
        <Row>
          <Col>
            <h2 className="text-center">Who We Are</h2>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <h3 className="reformed">Reformed</h3>
              {beliefs.reformed.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
              <p className="lead"><p>{beliefs.solas.lead}</p></p>
            </Col>
          </Row>
          <Row className="solas">
            <Col sm={6}>
              <img src="./resources/solas-icons.png" alt="Five Solas Icon" />
            </Col>
            <Col sm={6}>
              {beliefs.solas.content.map((sola, key) => <p key={key}><strong>{sola.solaTitle}</strong>{sola.solaContent}</p>)}
            </Col>
            
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h3 className="confessional">Confessional</h3>
              {beliefs.confessional.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h3 className="covenantal">Covenantal</h3>
              {beliefs.covenantal.map((belief, key) => {
                let paragraph;
                if (key === 1) {
                  paragraph = <div class="blockquote"><blockquote cite="https://opc.org/wcf.html#Chapter_07"><p key={key}><em>{belief}</em></p></blockquote></div>;
                } else {
                  paragraph = <p key={key}>{belief}</p>;
                }
                return paragraph;
              })}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h3 className="ordinary">Ordinary Means of Grace</h3>
              {beliefs.ordinaryMeansOfGrace.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h3 className="family">Family Integrated</h3>
              {beliefs.familyIntegrated.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
            </Col>
          </Row>
        </Container>
      </section>
    );
}