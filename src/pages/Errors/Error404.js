import React from 'react';
import './Error.css';

import teamRocket from '../../assets/images/Team_Rocket.png';

export default function Error404() {
  return (
    <div className="E404-page">
      <div className="E404">
        <p className="text404">404</p>

        <img className="team-rocket" src={teamRocket} alt="team-rocket" />
      </div>
      <div className="page-404-text">
        <span className="first_txt_error">The rocket team </span>
        <span className="second_txt_error">has won this time.</span>
      </div>

      <button className="E404-button">Return</button>
    </div>
  );
}
