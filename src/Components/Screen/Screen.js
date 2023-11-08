import React from "react";
import Header from "../Header/Header";
import Nav from "../ui/Nav";
import Banner from "../Banner/Banner";
import AboutStyle from "../About/About.module.css";

import { Container } from "react-bootstrap";
import Contact from "../Contact/Contact"; //test
import About from "../About/About";
import WhatWeAre from "../WhatWeAre/WhatWeAre";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Volunteer from "../Volunteer/Volunteer";

const Screen = () => {
  const backgroundStyle = AboutStyle.backgroundStyle;
  const bodyBackground = AboutStyle.bodyBackground;
  return (
    <>
      <div className={bodyBackground}>
        <Container style={{maxWidth:"1780px"}} className="p-0">
          <Nav />
          <div className={backgroundStyle}>
            <Banner />
            <Header />
            <About />
            <WhatWeAre />
            <WhatWeDo />
            <Volunteer />
            <Contact />
          </div>
        </Container>
      </div>
    </>
  );
};
export default Screen;
