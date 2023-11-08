import React from "react";
import BannerStyle from "./BannerStyle.module.css";
import { Image } from "react-bootstrap";

const Banner = () => {
  const logoStyle = BannerStyle.logoStyle;
  const imgSrc = "https://foodforthenations704431282.files.wordpress.com/2019/04/e067b0919f0f602ff8586b5cd61b1353-e1556139777183.jpeg?w=103"
  return (
    <>
      <div className={logoStyle}>
        <Image
          src={imgSrc}
          alt="food for the nations logo"
        />
        <h1>Food for the Nations</h1>
        {/* <hr style={{margin:".5rem 0"}}/> */}
        <h5>Meeting the needs of the hungry and hurting since 2007</h5>
        <h3>Call: 516-983-4197</h3>
      </div>
    </>
  );
};
export default Banner;
