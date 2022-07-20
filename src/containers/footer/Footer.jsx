import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to make your child future ready?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Time is Now</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <p><h1>EdVaR</h1></p>
        <p>----------------------</p>
        <p>A-12,Vijay Nagar,Indore MP <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>News</p>
        <p>Social Media</p>
        <p>Corporate Practices</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>A-12,Vijay Nagar,Indore MP</p>
        <p>999-3999-714</p>
        <p>info@edvar.in</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 EdVaR. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
