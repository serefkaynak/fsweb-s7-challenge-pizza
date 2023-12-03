import React from "react";
import { Link} from 'react-router-dom';
import Img from "../Assets/adv-aseets/adv-form-banner.png"

export default function HomePage() {
  return (
    <div className="maindivcenter">
      <header>
        <h1>Teknolojik Yemekler</h1>
      </header>
      <section className="containerAlign">
        <div>KOD ACIKTIRIR </div>
        <div>PIZZA, DOYURUR</div>
      </section>

      <section>
      <Link to="/order">
      <button className="button-homepage">ACIKTIM</button>
      </Link>     
      </section>

       <figure>
        <img className="homePageHalfPizza" src={Img} />
      </figure>
    </div>
  );
}
