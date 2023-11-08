import React from "react";
import Local from "./Local";
import International from "./International";

const WhatWeAre = () => {
  // const matchesSm = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div id="about">
        <Local/>
        <International/>
      </div>
    </>
  );
};
export default WhatWeAre;
