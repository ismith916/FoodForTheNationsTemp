import React from "react";
import aboutStyle from "./WhatWeAre.module.css";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";
import { Button } from "react-bootstrap";

const WhatWeAre = () => {
  // const matchesSm = useMediaQuery("(max-width: 768px)");
  const aboutTitle = aboutStyle.aboutTitle;
  const aboutTitleWrapper = aboutStyle.aboutTitleWrapper;
  const emTitle = aboutStyle.emTitle;

  return (
    <>
      <div id="about">
        <div className={aboutTitleWrapper}>
          <div className={aboutTitle}>
            <div id="who-we-are" className={emTitle}>Who We Are</div>
            <h1>Our History</h1>
          </div>
          <p>
            The founder of Food For The Nations, Joanne Henry, and her two
            children, Monique and Jovan, began feeding the homeless on Easter
            and Thanksgiving in New York City. Joanne spent a few years not only
            giving the meals but sharing a word of encouragement and hope for a
            better tomorrow. The family also took clothing and toys to the kids
            who lived at the shelters, at this time a close friend joined the
            group as Joanne’s desire to do more became evident. As a single
            parent of two kids she understood the story of some and helped in
            whatever way she could. Her faith being the motivator.
          </p>
          <p>
            In 2007, after a years of witnessing the harsh reality of
            homelessness and food insecurity, Food For The Nations was formed
            and registered as a non profit organization.
          </p>
          <div className={aboutTitle}>
            <h1>Our Mission</h1>
          </div>
          <p>
            Food For The Nations distributes food for local, national and
            international causes meeting the needs of the hungry and hurting. We
            equip them through counseling to become self-sufficient and
            eventually provide for themselves. We actively support the Gospel of
            Jesus Christ in the Global Church.
          </p>

          <div className={aboutTitle}>
            <h1>Urgent Projects</h1>
          </div>
          <p>
            We are digging Bore-wells in India, getting food and school supplies
            to kids in Zambia and carrying out programs in New York city. Please
            contact us to find out how you can help or make an online donation
            today.
          </p>
        </div>
      </div>
    </>
  );
};
export default WhatWeAre;
