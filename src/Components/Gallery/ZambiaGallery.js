import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import A from "../../images/new/zambia-images/1.jpg";
import B from "../../images/new/zambia-images/2.jpg";
import C from "../../images/new/zambia-images/3.jpg";
import D from "../../images/new/zambia-images/4.jpg";
import E from "../../images/new/zambia-images/5.jpg";
import F from "../../images/new/zambia-images/6.jpg";
import G from "../../images/new/zambia-images/7.jpg";
import ASmall from "../../images/new/zambia-images/edit/1.jpg";
import BSmall from "../../images/new/zambia-images/edit/2.jpg";
import CSmall from "../../images/new/zambia-images/edit/3.jpg";
import DSmall from "../../images/new/zambia-images/edit/4.jpg";
import ESmall from "../../images/new/zambia-images/edit/5.jpg";
import FSmall from "../../images/new/zambia-images/edit/6.jpg";
import GSmall from "../../images/new/zambia-images/edit/7.jpg";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";

const ZambiaGallery = () => {
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
      <div>
      { match728 && <img src={E} alt="" />}
      { !match728 && <img src={ESmall} alt="" />}
      </div>
      <div>
      { match728 && <img src={F} alt="" />}
      { !match728 && <img src={FSmall} alt="" />}
      </div>
      <div>
      { match728 && <img src={G} alt="" />}
      { !match728 && <img src={GSmall} alt="" />}
      </div>
   {/*    <div>
        <img src={H} alt="little child on the floor smiling" />
      </div> */}
    </Carousel>
  );
};
export default ZambiaGallery;
