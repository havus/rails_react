import React from 'react';
import Logo from 'images/logo.png';
import DefaultProfile from 'images/profile.png';
import './style.scss';

const Navbar = _ => {
  return (
    <div className="navbar">
      <div className="navbar-item-wrap">
        <div className="navbar-item">
          <img src={ Logo } />
        </div>
        <div className="navbar-item">
          <span>Stack</span>
          <span>Together</span>
        </div>
        <div className="navbar-item right">
          <img className="profile" src={ DefaultProfile } alt="profile_pic" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
