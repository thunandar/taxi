import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

import logo from "../../assets/logo.png";
import Checkout from "../Card/Checkout";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  
  const [didSubmit, setDidSubmit] = useState(false);

  const BookNowHandler = () => {
    setIsCheckout(true);
    setDidSubmit(false);
  };

  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="nav__logo" />

      <div className="navbar">
        <ul className="nav__links">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#blog" className="nav__link">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <a href="#footer" className="nav__link">
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#"
              className="nav__link nav__link--btn"
              onClick={BookNowHandler}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar__toggle">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__toggle-container scale-up-center">
            <ul className="nav__links">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#sercies" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__link">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link  nav__link--btn-blue" onClick={BookNowHandler}>
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      {isCheckout && !didSubmit && <Checkout />}
    </nav>
  );
};

export default Navbar;
