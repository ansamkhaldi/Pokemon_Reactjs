import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/Logo.png';

import { NavbarData } from './NavbarData';

export default function Navbar(props) {
  return (
    <nav className="grid-container">
      <div className="grid-item">
        <img src={logo} className="nav-logo" alt="logo" />
      </div>
      <div className="grid-item">
        <ul className="grid-nav">
          {NavbarData.map((item, index) => {
            return (
              <div className="grid-item">
                <li key={index} className={item.cName}>
                  <Link to={item.path} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
