import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import A from "../../images/new/easter-images/1.jpg";
import ASmall from "../../images/new/easter-images/edit/1.jpg";
import B from "../../images/new/easter-images/2.jpg";
import BSmall from "../../images/new/easter-images/edit/2.jpg";
import C from "../../images/new/easter-images/3.jpg";
import CSmall from "../../images/new/easter-images/edit/3.jpg";
import D from "../../images/new/easter-images/4.jpg";
import DSmall from "../../images/new/easter-images/edit/4.jpg";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";

const EasterGallery = () => {
  const match728 = useMediaQuery("(min-width:921px)")
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showArrows={true}
      infiniteLoop={true}
      showStatus={false}
    >
      <div>
      { match728 && <img src={A} alt="" />}
      { !match728 && <img src={ASmall} alt="" />}
      </div>
      <div>
      { match728 && <img src={B} alt="" />}
      { !match728 && <img src={BSmall} alt="" />}
      </div>
      <div>
      { match728 && <img src={C} alt="" />}
      { !match728 && <img src={CSmall} alt="" />}
      </div>
      <div>
      { match728 && <img src={D} alt="" />}
      { !match728 && <img src={DSmall} alt="" />}
      </div>
      {/* <div>
        <img src={E} alt="little child on the floor smiling" />
      </div> */}
    </Carousel>
  );
};
export default EasterGallery;
