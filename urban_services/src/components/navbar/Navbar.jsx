import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../res/logoUS.png";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from '@mui/icons-material/Person';
import { CustomerContext } from "../../contexts/CustomerContext";
import { useContext } from "react";

export default function Navbar() {
  const { customer } = useContext(CustomerContext);
  console.log(customer);
  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to="/" className="nav-logo">
          <img src={logo} className="logo-img" alt="logo" />
          <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;Urban&nbsp;Services&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;Urban&nbsp;Services&nbsp;
            </span>
          </button>
        </NavLink>

        <div className="nav-menu" id="nav_menu">
          <ul className="nav-list" type="none">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to="/booking" className="nav-link">
                Book a Service
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/allservices" className="nav-link">
                Book a Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mybookings" className="nav-link">
                My Bookings
              </NavLink>
            </li>
            <li className="nav-item">
              {customer ? (
                <NavLink to="/profile" className="nav-link nav-cta">
                  <button className="boton-elegante">
                    <PersonIcon className="icon-login" />
                    &nbsp;Profile
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link nav-cta">
                  <button className="boton-elegante">
                    <LoginIcon className="icon-login" />
                    &nbsp;Login
                  </button>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
