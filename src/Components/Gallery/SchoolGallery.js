import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import A from "../../images/new/school-images/1.jpg";
import B from "../../images/new/school-images/2.jpg";
import C from "../../images/new/school-images/3.jpg";
import D from "../../images/new/school-images/4.jpg";
import ASmall from "../../images/new/school-images/1.jpg";
import BSmall from "../../images/new/school-images/2.jpg";
import CSmall from "../../images/new/school-images/3.jpg";
import DSmall from "../../images/new/school-images/4.jpg";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";
// import E from "../../images/new/school-images/5.jpg";
// import F from "../../images/new/school-images/6.jpg";
// import G from "../../images/new/school-images/7.jpg";
// import H from "../../images/new/school-images/8.jpg";

const SchoolGallery = () => {
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
      <div>
        {match728 && <img src={C} alt="" />}
        {!match728 && <img src={CSmall} alt="" />}
      </div>
      <div>
        {match728 && <img src={D} alt="" />}
        {!match728 && <img src={DSmall} alt="" />}
      </div>
    </Carousel>
  );
};
export default SchoolGallery;
