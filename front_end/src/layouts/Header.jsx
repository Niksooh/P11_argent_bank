import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Layouts/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/argentBankLogo.webp';

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/home" className="main-nav-logo">
          <img
            src={Logo}
            className="main-nav-logo-image"
            alt="Argent Bank logo"
          />
        </NavLink>
        {/* <div>
          <NavLink to="/user" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            User Name
          </NavLink>
          <NavLink to="/HomePage" className="main-nav-item">
            <FontAwesomeIcon icon={faSignOutAlt} />
            Sign Out
          </NavLink>
        </div> */}
        <div>
          <NavLink to="/login" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
