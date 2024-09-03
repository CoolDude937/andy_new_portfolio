import React from 'react';
import bidenpic from './andybeingscanned.png';
import '../project.scss';

const HomeSecurity = () => {
  return (
    <div className="project">
      <h2>Home Security</h2>
      <img src={bidenpic} alt="Home Security" width="110%" height="100%"/>
      <h2><a href="https://github.com/CoolDude937/home_security" target="_blank" rel="noopener noreferrer">Link to Github Repository!</a></h2>
      <p>Face Recognition Web Application I created at home!</p>
    </div>
  );
};

export default HomeSecurity;
