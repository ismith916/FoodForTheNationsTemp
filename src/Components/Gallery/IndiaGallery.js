import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import A from "../../images/new/india-images/1.jpg";
import B from "../../images/new/india-images/2.jpg";
import C from "../../images/new/india-images/3.jpg";
import D from "../../images/new/india-images/4.jpg";
import ASmall from "../../images/new/india-images/edit/1.jpg";
import BSmall from "../../images/new/india-images/edit/2.jpg";
import CSmall from "../../images/new/india-images/edit/3.jpg";
import DSmall from "../../images/new/india-images/edit/4.jpg";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";
// import E from "../../images/new/india-images/5.jpg";
// import F from "../../images/new/india-images/6.jpg";
// import G from "../../images/new/india-images/7.jpg";

const IndiaGallery = () => {
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
    {/*   <div>
        <img src={E} alt="little child on the floor smiling" />
      </div>
      <div>
        <img src={F} alt="little child on the floor smiling" />
      </div>
      <div>
        <img src={G} alt="little child on the floor smiling" />
      </div>
     <div>
        <img src={H} alt="little child on the floor smiling" />
      </div> */}
    </Carousel>
  );
};
export default IndiaGallery;
