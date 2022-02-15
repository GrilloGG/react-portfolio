import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const iconTimes = <FontAwesomeIcon icon={faTimes} />;
  const iconBars = <FontAwesomeIcon icon={faBars} />;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i>{click ? iconTimes : iconBars} </i>
          <i className={click ? "fas fa-time" : "fas fa-bars"} />
        </div>
        <div>
          <h2 className="bright-color-text icon-nav">
            <a className="icon-nav-a" href="/">
              C.
            </a>
          </h2>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About me
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
