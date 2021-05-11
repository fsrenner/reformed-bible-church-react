import React from 'react';

export default function Sermon({ title, imageSrc, imageAlt, scripture, date, sermonHref }) {

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <a href={sermonHref} target="_blank" rel="noreferrer">
          <img src={imageSrc} alt={imageAlt}/>
        </a>
      </div>
      <div className="col-md-6">
        <h3>{ title }</h3>
        <p>{ scripture }</p>
        <p>{ date }</p>
      </div>
    </div>
    </div>
  )
}