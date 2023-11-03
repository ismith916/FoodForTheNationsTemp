import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import A from "../../images/new/health-images/1.jpg";
import ASmall from "../../images/new/health-images/edit/1.jpg";
import B from "../../images/new/health-images/2.jpg";
import BSmall from "../../images/new/health-images/edit/2.jpg";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";
// import C from "../../images/new/health-images/3.jpg";
// import D from "../../images/new/health-images/4.jpg";
// import E from "../../images/new/health-images/5.jpg";

const HealthGallery = () => {
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
        {match728 && <img src={A} alt="" />}
        {!match728 && <img src={ASmall} alt="" />}
      </div>
      <div>
        {match728 && <img src={B} alt="" />}
        {!match728 && <img src={BSmall} alt="" />}
      </div>
      {/* <div>
        <img src={C} alt="women with water bowl in Africa" />
      </div>
      <div>
        <img src={D} alt="outreach in New York Bronx" />
      </div>
      <div>
        <img src={E} alt="little child on the floor smiling" />
      </div> */}
    </Carousel>
  );
};
export default HealthGallery;
