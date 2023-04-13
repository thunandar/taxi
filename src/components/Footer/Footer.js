import logo from "../../assets/logo.png";
import "./Footer.css";

import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="section" id="footer">
      <footer class="footer">
        <div class="container grid grid--footer">
          <div class="logo-col">
            <a href="#" class="footer-logo">
              <img class="logo" alt="logo" src={logo} />
            </a>
            <ul className="social-links">
              <li>
                <a class="footer-link" href="#">
                  <BsInstagram class="social-icon" name="logo-instagram" />
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  {" "}
                  <BsFacebook class="social-icon" name="logo-instagram" />
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  <BsTwitter class="social-icon" name="logo-instagram" />
                </a>
              </li>
            </ul>

            <p class="copyright">
              Copyright &copy; <span class="year">2027</span> by GEO, Inc. All
              rights reserved.
            </p>
          </div>

          <div class="address-col">
            <p class="footer-heading">Contact us</p>
            <address class="contacts">
              <p class="address">
                453 Harrison St., 2nd Floor, San Francisco, CA 94146
              </p>
              <p>
                <a class="footer-link" href="tel:415-201-6370">
                  815-901-9677
                </a>
                <br />
                <a class="footer-link" href="mailto:hello@omnifood.com">
                  hello@geo.com
                </a>
              </p>
            </address>
          </div>

          <nav class="nav-col">
            <p class="footer-heading">Account</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  Create account
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Sign in
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  iOS app
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav class="nav-col">
            <p class="footer-heading">Company</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  About GEO
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  For Travel
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <nav class="nav-col">
            <p class="footer-heading">Resources</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  Company directory{" "}
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
