import "./Services.css";
import airportTaxi from "../../assets/airportTaxi.jpg";
import babyTaxi from "../../assets/babyTaxi.jpg";
import weddingTaxi from "../../assets/weddingTaxi.jpg";
import { BsAirplane,BsFillTaxiFrontFill } from "react-icons/bs";
import {AiOutlineHeart} from 'react-icons/ai';

const Services = () => {
  return (
    <div className="section section_services">
      <div className="section__title">
        <h2 className="section__description">Services</h2>
        <h3 className="section__header">
          Reliable, Flexible, Taxi Services -GEO Taxi Perth.
        </h3>
      </div>

      <div className="services" id="services">
        <img src={airportTaxi} alt="airport taxi" className="services__img" />
        <div className="services__service">
          <div className="services__icon">
            <BsAirplane />
          </div>
          <h5 className="services__header">Airport Transfers</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus. Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>

        <div class="services__service">
          <div class="services__icon">
            <BsFillTaxiFrontFill />
          </div>
          <h5 class="services__header">Kid Transport</h5>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam! Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!
          </p>
        </div>
        <img
          src={babyTaxi}
          alt="Baby"
          class="services__img"
        />


        <img
          src={weddingTaxi}
          alt="Wedding"
          class="services__img"
        />
        <div class="services__service">
          <div class="services__icon">
            <AiOutlineHeart />
          </div>
          <h5 class="services__header">Wedding Transport</h5>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab dicta fuga
            inventore ab  eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
          </div>
      </div>
    </div>
  );
};

export default Services;
