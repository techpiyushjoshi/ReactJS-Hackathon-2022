import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo2 from '../../logo.svg';
// import logo from '../../new_adobe_express.svg'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <p> </p>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home"><h2>edVaR</h2></a></p>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Pricing</a></p>
          <p><a href="#possibility">EdTech</a></p>
          <p><a href="#features">VR and AR</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About Us</a></p>
            <p><a href="#possibility">EdTech</a></p>
            <p><a href="#features">Virtual Reality</a></p>
            <p><a href="#blog">Blog</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
