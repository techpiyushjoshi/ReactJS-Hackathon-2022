import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Pricing Plans" text="Understanding the heavy expenditure made by parents on school and college education, we at edVaR have always stood with the parents and students to enable their child to bec" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Plans</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Basic &nbsp;&nbsp;&nbsp; Rs100/month" text="Consisting of the basic features like limited device login, recorded sessions etc. " />
      <Feature title="Premium &nbsp;&nbsp;&nbsp; Rs 1/day" text="Comprises all the features of edVaR along with one-to-one doubt clearing session with mentors." />
      <Feature title="Ultra &nbsp; Rs 1000/month" text="Comprises of all premium features along with cloud collaboration features with friends and enterprise setup environment." />
    </div>
  </div>
);

export default WhatGPT3;
