import React from "react";
import HeaderStyle from "./Header.module.css";
import Wrapper from "../ui/Wrapper";

import Gallery from "../Gallery/Gallery";

const Header = () => {
  const cardWrapper = HeaderStyle.cardWrapper;

  return (
    <>
      <Wrapper className={cardWrapper}>
        <Gallery autoPlay />
      </Wrapper>
    </>
  );
};
export default Header;