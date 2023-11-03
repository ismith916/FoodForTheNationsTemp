import React from "react";
import aboutStyle from "./WhatWeDo.module.css";
import Wrapper from "../ui/Wrapper";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";
import ZambiaGallery from "../Gallery/ZambiaGallery";
import IndiaGallery from "../Gallery/IndiaGallery";

const International = () => {
  // const matchesSm = useMediaQuery("(max-width: 768px)");
  const aboutTitle = aboutStyle.aboutTitle;
  const zambiaTitle = aboutStyle.zambiaTitle;
  const aboutTitleWrapper = aboutStyle.aboutTitleWrapper;
  const emTitle = aboutStyle.emTitle;
  const cardWrapper = aboutStyle.cardWrapper;
  const cardWrapper2 = aboutStyle.cardWrapper2;

  return (
    <>
      <div id="about">
        <div className={aboutTitleWrapper}>
          <div className={aboutTitle}>
            <div className={emTitle}></div>
            <h1 id="abroad" style={{ margin: "0 0 -1rem 0" }}>International Work</h1>
            <h1>
              <em>India Mission</em>
            </h1>
            <hr style={{ margin: ".5rem " }} />
          </div>
          <h1>Clean water for all people​</h1>
          <p>
            Here at Food For The Nations, we are working with the Leadership of
            Jesus Grace Gospel Churches in digging borewells in India and giving
            clean drinking water to so many families in the Villages. Imagine
            living with no access to clean water, making you vulnerable to
            diseases that can sometimes result in death. Help us save a life
            today!
          </p>
          <p>
            Jesus tired from His journey sat down by the well where He met a
            Samaritan woman who came to draw water. As Jesus spoke to her she
            received a revelation of who He was. Though she came to draw out
            natural water Jesus offered her water where she will never thirst
            again (John 4:14). The Samaritan woman left the well with a spirit
            of evangelism and by her testimony many were saved in that place.
            Today we share this message at the well.
          </p>

          <hr style={{ margin: ".3rem 0 0 0", opacity: "0" }} />
          <Wrapper className={cardWrapper2}>
            <IndiaGallery autoPlay />
          </Wrapper>
          <div className={aboutTitle}>
            <h1 className={zambiaTitle} style={{ margin: "2rem 0 0 0" }}>
              <em>Zambia Mission</em>
            </h1>
          </div>
          <hr style={{ margin: ".5rem " }} />
          <h1>Education, Food and Security for all people</h1>
          <p>
            We are working with Pastor Standwell Kajani the founder of Lusungu
            community school to provide supplies for the students and their
            community. We have helped with the cost of providing education for
            Lusungu community school by collecting, packing and shipping school
            supplies. Additionally, as some students walk a long way to get to
            school, we have ensured that they have a meal each school day by
            covering the delivery costs of donated packaged meals. Finally, we
            have strengthened the community of these students by assisting the
            farmers with the cost of seed and fertilizer to ensure the families
            can have food
          </p>
          <p>
            Due to the success of the Lusungu community school, the local
            government has taken over the daily operations and maintenance. We
            are now working with Pastor Kajani to build a new school to feed and
            provide an education to a new community.
          </p>
          <p>
            FACT: For many Zambians their staple is ​ maize/ corn which is used
            to make Nshima, a thick porridge from finely ground corn.
          </p>
          <hr style={{ margin: ".3rem 0 0 0", opacity: "0" }} />
          <Wrapper className={cardWrapper}>
            <ZambiaGallery autoPlay />
          </Wrapper>
        </div>
      </div>
    </>
  );
};
export default International;
