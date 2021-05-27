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
      sermons.map((sermon, key) => {
        return <Sermon 
          key={key}
          title={sermon.title}
          scripture={sermon.scripture}
          date={sermon.date}
          src={sermon.src}
          speaker={sermon.speaker}
          series={sermon.series}
        />
      })
    }
  </>
  );
}