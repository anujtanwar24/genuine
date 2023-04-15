import React, { useState, useEffect } from "react";
import { Box, Text } from "grommet";
import { Link } from "react-router-dom";
// import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Box margin={"medium"} direction="row" align="center" flex>
        <Box gap="medium">dfbjgiu</Box>
        <Box gap="medium">
          <Link to="/" onClick={closeMobileMenu}>
            <Text color={"black"}>Xtreme</Text>
          </Link>
        </Box>
        <Box gap="medium">dfiojshi</Box>
      </Box>

      {/* <div>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h1>
            <h1 className="navbar-txt">Xtreme</h1>
          </h1>
        </Link>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-link">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
