import React from "react";
import BannerStyle from "./BannerStyle.module.css";

const Banner = () => {
  const bannerBox = BannerStyle.bannerBox;
  return (
    <>
      <div className={bannerBox}>
        Welcome to Food for the Nations!
      </div>
      <br></br>
      <div className={bannerBox}><img src="https://foodforthenations704431282.files.wordpress.com/2019/04/e067b0919f0f602ff8586b5cd61b1353-e1556139777183.jpeg?w=103" alt="Main Logo" /></div>
      <br></br>


    </>
  );
};
export default Banner;
