import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
    <div className="container">
      <div className="navbar-flex">
        <div className="logo">
          <NavLink to={"/"}>
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>
        <div className={`navLinks ${menuOpen ? "active" : ""}`}>
          <ul className="list">
            <li>
              <NavLink to={"/"} className="navlink">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="navlink">About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/country"} className="navlink">Country</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="navlink button-main">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
