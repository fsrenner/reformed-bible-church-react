import React, { useEffect } from 'react';
import Sermon from './sections/Sermon';
import SermonJumbotron from './sections/SermonJumbotron';

const sermons = window.sermons;

export default function Sermons() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return(
    <>
    <SermonJumbotron />
    {
      sermons.map((sermon) => {
        return <Sermon 
          key={sermon.id}
          title={sermon.title}
          imageSrc={sermon.imageSource}
          imageAlt={sermon.imageAlt}
          scripture={sermon.scripture}
          date={sermon.date}
          sermonHref={sermon.sermonHref}
        />
      })
    }
  </>
  );
}