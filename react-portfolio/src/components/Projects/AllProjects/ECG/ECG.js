import React from 'react';
import ecgpicture from './ecg.png';
import '../project.scss';

const ECG = () => {
  return (
    <div className="project">
      <h2>Emotional Cardiography</h2>
      <img src={ecgpicture} alt="Emotional Cardiography" width="75%" height="75%"/>
      <h2><a href="https://devpost.com/software/emotional-cardiography-ecg" target="_blank" rel="noopener noreferrer">Link to Devpost!</a></h2>
      <p>uOttaHack 5 project I created with 3 teammates!</p>
    </div>
  );
};

export default ECG;
