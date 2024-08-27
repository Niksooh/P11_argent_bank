import { NavLink } from "react-router-dom";
import '../../styles/Components/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/SignIn" className="main-nav-item">
            <FontAwesomeIcon className="fa fa-user-circle" icon={faCircleUser} />
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
