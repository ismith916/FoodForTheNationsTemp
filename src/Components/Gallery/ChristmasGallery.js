import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import A from "../../images/new/christmas-images/1.jpg";
import ASmall from "../../images/new/christmas-images/editied/1_.jpg";
import B from "../../images/new/christmas-images/2.jpg";
import BSmall from "../../images/new/christmas-images/editied/2.jpg";
import C from "../../images/new/christmas-images/3.jpg";
import CSmall from "../../images/new/christmas-images/editied/3.jpg";
import D from "../../images/new/christmas-images/4.jpg";
import DSmall from "../../images/new/christmas-images/editied/4.jpg";
import E from "../../images/new/christmas-images/5.jpg";
import ESmall from "../../images/new/christmas-images/editied/5.jpg";
import F from "../../images/new/christmas-images/6.jpg";
import FSmall from "../../images/new/christmas-images/editied/6.jpg";
import G from "../../images/new/christmas-images/7.jpg";
import GSmall from "../../images/new/christmas-images/editied/7.jpg";
import H from "../../images/new/christmas-images/8.jpg";
import HSmall from "../../images/new/christmas-images/editied/8.jpg";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";

const ChristmasGallery = () => {
  const match728 = useMediaQuery("(min-width:921px)")
  return (
    <Carousel
      autoPlay={false}
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
      <div>
      { match728 && <img src={H} alt="" />}
      { !match728 && <img src={HSmall} alt="" />}
      </div>
    </Carousel>
  );
};
export default ChristmasGallery;
