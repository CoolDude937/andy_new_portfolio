import React from 'react';
import geoguesserpicture from './geoguesser.jpg';
import '../project.scss';

const GeoGuesser = () => {
  return (
    <div className="project-on-right">
      <h2>UTSC GeoGuesser</h2>
      <img src={geoguesserpicture} alt="UTSC GeoGuesser" width="75%" height="75%"/>
      <h2><a href="https://devpost.com/software/geoguesser-utsc" target="_blank" rel="noopener noreferrer">Link to Devpost!</a></h2>
      <p>Hack The Valley 7 project I created with 5 teammates!</p>
    </div>
  );
};

export default GeoGuesser;
