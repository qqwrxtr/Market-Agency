import "./ShowCompany.css";

import zoom from "assets/img/zoom.svg";
import dribble from "assets/img/dribble.svg";
import amazon from "assets/img/amazon.svg";
import notion from "assets/img/notion.svg";
import hubs from "assets/img/hubs.svg";
import netflix from "assets/img/netflix.svg";

const Showroom = () => {
  const brandLogos = [zoom, dribble, amazon, notion, hubs, netflix];

  return (
    <div className="showroom__company grid md:grid-cols-6 gap-4 grid-cols-3 place-content-center max-[420px]:grid-cols-2">
      {brandLogos.map((logo, index) => (
        <div className="showroom__company__item flex justify-center items-center" key={index}>
        <img
          src={logo}
          alt="brand"
          className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out lg:w-32 md:w-20 w-24"
        />
      </div>      
      ))}
    </div>
  );
};

const ShowCompany = () => {
  return (
    <div className="container pt-16">
      <div className="row">
        <Showroom />
      </div>
    </div>
  );
};

export default ShowCompany;
