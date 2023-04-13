import { AiOutlineArrowDown } from "react-icons/ai";

import taxi from "../../assets/taxi.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header__title" id="home">
      <div className="header__left">
        <h1>Enjoy comfortable ride in TaxiGEO</h1>
        <h4>Book GEO Taxi Perth hassle free at fixed price.</h4>
        <button className="btn--text btn--scroll-to">
          Learn more <AiOutlineArrowDown />
        </button>
      </div>

      <div className="header__right">
        <img src={taxi} className="header__img" alt="taxi photo" />
      </div>
    </div>
  );
};

export default Header;
