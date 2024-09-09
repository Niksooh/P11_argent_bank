import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Layouts/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/argentBankLogo.webp';
import { logout } from '../reducers/userReducer';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.user.isAuth);
  const userName = useSelector(state => state.user.userName);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

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
        <div>
          {isAuth ? (
            <>
              <NavLink to="/user" className="main-nav-item">
                <FontAwesomeIcon icon={faCircleUser} />
                {userName}
              </NavLink>
              <NavLink
                to="#"
                className="main-nav-item"
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sign Out
              </NavLink>
            </>
          ) : (
            <NavLink to="/login" className="main-nav-item">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
