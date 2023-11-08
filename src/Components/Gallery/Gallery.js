import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import A from "../../images/new/header-images/1.jpg";
import ASmall from "../../images/new/header-images/edit/1.jpg";
import B from "../../images/new/header-images/2.jpg";
import BSmall from "../../images/new/header-images/edit/2.jpg";
import C from "../../images/new/header-images/3.jpg";
import CSmall from "../../images/new/header-images/edit/3.jpg";
import D from "../../images/new/header-images/4.jpg";
import DSmall from "../../images/new/header-images/edit/4.jpg";
import E from "../../images/new/header-images/5.jpg";
import ESmall from "../../images/new/header-images/edit/5.jpg";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";

const Gallery = () => {
  const match728 = useMediaQuery("(min-width:921px)");
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showArrows={true}
      infiniteLoop={true}
      showStatus={false}
    >
      <div>
        {match728 && <img src={A} alt="children eating rice bowl in Africa" />}
        {!match728 && (
          <img src={ASmall} alt="children eating rice bowl in Africa" />
        )}
      </div>
      <div>
        {match728 && <img src={B} alt="rice bowl in Africa" />}
        {!match728 && <img src={BSmall} alt="rice bowl in Africa" />}
      </div>
      <div>
        {match728 && <img src={C} alt="women with water bowl in Africa" />}
        {!match728 && (
          <img src={CSmall} alt="women with water bowl in Africa" />
        )}
      </div>
      <div>
        {match728 && <img src={D} alt="outreach in New York Bronx" />}
        {!match728 && <img src={DSmall} alt="outreach in New York Bronx" />}
      </div>
      <div>
        {match728 && <img src={E} alt="little child on the floor smiling" />}
        {!match728 && (
          <img src={ESmall} alt="little child on the floor smiling" />
        )}
      </div>
    </Carousel>
  );
};
export default Gallery;
