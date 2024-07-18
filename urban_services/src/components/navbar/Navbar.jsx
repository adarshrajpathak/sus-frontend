import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../res/logoUS.png";
import LoginIcon from "@mui/icons-material/Login";
export default function Navbar() {
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
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" className="nav-link">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/allservices" className="nav-link">
                All Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bookings" className="nav-link">
                Bookings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link nav-cta">
              <button class="boton-elegante">
                <LoginIcon className="icon"/>&nbsp;Login 
              </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
