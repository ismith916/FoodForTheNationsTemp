import React from "react";
import aboutStyle from "./About.module.css";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";
import { Button } from "react-bootstrap";

const About = () => {
  // const matchesSm = useMediaQuery("(max-width: 768px)");
  const aboutTitle = aboutStyle.aboutTitle;
  const aboutTitleWrapper = aboutStyle.aboutTitleWrapper;
  const emTitle = aboutStyle.emTitle;
  const btn = aboutStyle.btn;
  const matches473 = useMediaQuery("(min-width:473px)");
  const matches432 = useMediaQuery("(min-width:411px)");
  return (
    <>
      <div id="about">
        <div className={aboutTitleWrapper}>
          <div className={aboutTitle}>
            <div id="vision" className={emTitle}>
              Our vision
            </div>
            <p>
              We demonstrate the
              {!matches473 && <br />}
              Love of God in our
              {!matches473 && <br />}
              giving to those in need
              <hr style={{ margin: ".4rem 0" }} />
              <span>
                Matthew 25:35-40
                {!matches473 && <br />} Isaiah 58:6,7
              </span>
            </p>
          </div>
          <p style={{margin:"2rem 0 0 0"}}>
            No need is too small and no voice is too quiet to be heard. We will
            devote the time necessary to advocate for and feed those in need!
          </p>
          <p>
            We do community work both locally, in New York City, and abroad.
          </p>
          <p>
            People volunteer for us each year and make the difference in the
            lives of others. Find out how to become part of our team here!
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "2rem 0 0 0"
            }}
          >
            <Button href="#contact" className={btn}>
              CONTACT US TODAY
            </Button>

            <Button
              style={{ padding: "0.5rem 4.2rem" }}
              href="https://square.link/u/ICunELm7"
              className={btn}
            >
              DONATE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
