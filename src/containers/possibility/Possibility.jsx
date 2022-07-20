import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>EdTech</h4>
      <h1 className="gradient__text">The possibilities with EdVaR are <br /> beyond your imagination</h1>
      <p>The possibilities with Virtual and Augmented Reality in the education sector are unbelivable. Onboard this revolution with edVaR and get ahead of others.</p>
      <h4>Get Started</h4>
    </div>
  </div>
);

export default Possibility;
