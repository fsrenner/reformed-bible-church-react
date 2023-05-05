import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sermons from './sections/Sermons';
import WhatsNewJumbotron from './sections/WhatsNewJumbotron';
import Announcement from './sections/Announcement';

const sermon = window.sermon;
const announcements = window.announcements;

export default function WhatsNew() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return(
    <>
      <WhatsNewJumbotron />
      <Sermons 
        title={sermon.title}
        scripture={sermon.scripture}
        date={sermon.date}
        src={sermon.src}
        speaker={sermon.speaker}
        series={sermon.series}
        rbcYTPageUrl={sermon.rbcYTPageUrl}
      />
      <section className="container sermons">
      <Row className="events-row">
          <Col>
              <h2 className="text-center">Announcements and Events</h2>
          </Col>
      </Row>
      </section>
      {
        announcements
          .map((announcement, key) => {
            return <Announcement
              key={key}
              heading={announcement.heading}
              title={announcement.title}
              details={announcement.details}
              date={announcement.date}
              time={announcement.time}
            />
          })
      }
  </>
  );
}