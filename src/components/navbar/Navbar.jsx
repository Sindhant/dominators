import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Our Services</a></p>
          <p><a href="#possibility">Your Data</a></p>
          <p><a href="#features">Security System</a></p>
         
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <div>
          {/* External link for login */}
          <a href=" " target="_blank" >
            <button
              type="button"
              style={{
                background: 'transparent',
                color: '#fff',
                padding: '0.5rem 1rem',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                borderRadius: '5px',
                outline: 'none',
                marginRight: '10px', // Add margin-right for space between buttons
              }}
            >
              Login
            </button>
          </a>
          {/* External link for sign up */}
          <a href=" " target="_blank">
            <button type="button">Sign up</button>
          </a>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">Our Services</a></p>
              <p><a href="#possibility">Your Data</a></p>
              <p><a href="#features">Security System</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
             
              {/* External link for sign up */}
              <a href=" " target="_blank" >
                <button type="button">Sign up</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
