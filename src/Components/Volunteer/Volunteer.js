import React from "react";
import aboutStyle from "./Volunteer.module.css";

const Volunteer = () => {
  // const matchesSm = useMediaQuery("(max-width: 768px)");
  const aboutTitle = aboutStyle.aboutTitle;
  const aboutTitleWrapper = aboutStyle.aboutTitleWrapper;
  const emTitle = aboutStyle.emTitle;

  return (
    <>
      <div id="about">
        <div className={aboutTitleWrapper}>
          <div className={aboutTitle}>
            <div id="volunteer" className={emTitle}>Volunteer</div>
          </div>
          <p>
            Hunger isn’t seasonal, which is why our food drive gets so much
            attention. Devote an afternoon to stocking our pantry or a day to
            giving out toys to children and see first-hand the families we help daily.
          </p>
          <hr style={{margin:".5rem 0"}}/>
          <em><b>To volunteer with us today please fill out the contact from below</b></em>
        </div>
      </div>
    </>
  );
};
export default Volunteer;
