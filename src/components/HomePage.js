import React from "react";
import { Link} from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="maindivcenter">
      <h1>Teknolojik Yemekler</h1>
      <div className="containerAlign">
        <div>KOD ACIKTIRIR </div>
        <div>PIZZA, DOYURUR</div>
        </div>

      <Link to="/order">
      <button className="button">ACIKTIM</button>
      </Link>     

       <div>
        <img src="https://static.vecteezy.com/system/resources/previews/024/589/160/non_2x/top-view-pizza-with-ai-generated-free-png.png" />
      </div>
    </div>
  );
}
