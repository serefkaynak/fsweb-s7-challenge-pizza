import React from "react";
import { Link} from 'react-router-dom';
import Img from "../Assets/adv-aseets/adv-form-banner.png";
import Button from '@atlaskit/button';



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
      <Button
        appearance="primary"
        onClick={() => console.log('Clicked')}
        className="button-homepage"
        >ACIKTIM
      </Button>
      </Link>
        </section>

       <figure>
        <img className="homePageHalfPizza" src={Img} />
      </figure>
    </div>
  );
}
