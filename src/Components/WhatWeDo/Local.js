import React from "react";
import aboutStyle from "./WhatWeDo.module.css";
import Wrapper from "../ui/Wrapper";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";
import FoodDistGallery from "../Gallery/FoodDistGallery";
import HealthGallery from "../Gallery/HealthGallery";
import EasterGallery from "../Gallery/EasterGallery";
import ChristmasGallery from "../Gallery/ChristmasGallery";
import SchoolGallery from "../Gallery/SchoolGallery";

const Local = () => {
  // const matchesSm = useMediaQuery("(max-width: 768px)");
  const aboutTitle = aboutStyle.aboutTitle;
  const aboutTitleWrapper = aboutStyle.aboutTitleWrapper;
  const emTitle = aboutStyle.emTitle;
  const cardWrapper = aboutStyle.cardWrapper;
  const cardWrapper2 = aboutStyle.cardWrapper2;
  const easterTitle = aboutStyle.easterTitle;

  return (
    <>
      <div id="about">
        <div className={aboutTitleWrapper}>
          <div className={aboutTitle}>
            <div id="local" className={emTitle}>What We Do</div>
            <h1 style={{ margin: "0 0 -1rem 0" }}>Local Work</h1>
            <h1>
              <em>Community Building</em>
            </h1>
            <hr style={{ margin: ".5rem " }} />
          </div>
          <h1>Food Distribution</h1>
          <p>
            Food For The Nations goes into various communities, to distribute
            food to individuals and families with a need, at times pantries may
            be set up.
          </p>
          <hr style={{ margin: ".3rem 0 0 0", opacity: "0" }} />
          <Wrapper className={cardWrapper}>
            <FoodDistGallery autoPlay />
          </Wrapper>
          <h1 style={{ margin: "2rem 0 0 0" }}>Health and Wellness</h1>
          <p>
            In 2007, after a years of witnessing the harsh reality of
            homelessness and food insecurity, Food For The Nations was formed
            and registered as a non profit organization.
          </p>
          <hr style={{ margin: ".3rem 0 0 0", opacity: "0" }} />
          <Wrapper className={cardWrapper2}>
            <HealthGallery autoPlay />
          </Wrapper>
          <h1 className={easterTitle} style={{ margin: "2rem 0 0 0" }}>
            Easter and Thanksgiving Meals
          </h1>
          <p>
            We wish to celebrate the holidays with those persons in need. Meals
            will be given out at an advertised location. All are welcome!
          </p>
          <hr style={{ margin: ".3rem 0 0 0", opacity: "0" }} />
          <Wrapper className={cardWrapper}>
            <EasterGallery autoPlay />
          </Wrapper>
          <h1 style={{ margin: "2rem 0 0 0" }}>Christmas Angel Program</h1>
          <p>
            Our biggest and longest running program to date! Around the holidays
            we collect donated unwrapped gifts for children in situations of
            need. We usually partner with a local shelter with a large youth
            population to ensure every child in that shelter could have at least
            one gift during the season.
          </p>

          <p>We also partner with churches to distribute clothing, books and toys during the holidays </p>


          <p>
            Fact: Families make up 3/4 of the New York City municipal shelter
            system.
          </p>
          <hr style={{ margin: ".3rem 0 0 0", opacity: "0" }} />
          <Wrapper className={cardWrapper2}>
            <ChristmasGallery autoPlay />
          </Wrapper>
          <h1 style={{ margin: "2rem 0 0 0" }}>Back to School Giveaways</h1>
          <p>
            Before the start of the new school year we distribute school
            supplies such as backpacks, notebooks and pencils to the community.
            This occurs during the summer at a community block party or
            gathering. This year it will be on July 13th at Cuyler Gore Park in
            Brooklyn, New York.
          </p>
          <hr style={{ margin: ".3rem 0 0 0", opacity: "0" }} />
          <Wrapper className={cardWrapper}>
            <SchoolGallery autoPlay />
          </Wrapper>
        </div>
      </div>
    </>
  );
};
export default Local;
