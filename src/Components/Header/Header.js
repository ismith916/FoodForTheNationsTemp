import React from "react";
import { Card, Button, Image } from "react-bootstrap";
// import Logo from "../../images/logo-large.jpg";
import HeaderStyle from "./Header.module.css";
import Wrapper from "../ui/Wrapper";
// import Divider from "../../images/divider-03.svg";
// import DividerLarge from "../../images/divider-04.svg";
import Info from "../Info/Info";
import HeaderGallery from "../Gallery/HeaderGallery"

const Header = () => {
  const cardWrapper = HeaderStyle.cardWrapper;
  const innerCardWrapper = HeaderStyle.innerCardWrapper;
  const cardBody = HeaderStyle.cardBody;
  // const logo = HeaderStyle.logo;
  const slogin = HeaderStyle.slogin;
  const subText = HeaderStyle.subText;
  // const smSubText = HeaderStyle.smSubText;
  const btn = HeaderStyle.btn;
  // const divide = HeaderStyle.divide;
  // const divideLarge = HeaderStyle.divideLarge;
  // const exteriorText = HeaderStyle.exteriorText;
  const hr = HeaderStyle.hr;
  const servicesWrapper = HeaderStyle.servicesWrapper;

  return (
    <>
      <Wrapper className={cardWrapper}>
        <Wrapper className={innerCardWrapper}>
          <Info />
          <Wrapper className={cardBody}>
            {/* <Card.Img src={} alt="Done Bright Done Right LLC" className={logo} /> */}
            <HeaderGallery autoPlay />
            <Card.Title className={slogin}>
              Meeting the needs of the hungry <br /> and hurting since 2007.
            </Card.Title>
            <hr className={hr} />
            {/* <em className={exteriorText}>Services Offered Here</em> */}
            <Card.Text className={subText}>
              <h1>Our Mission:</h1>
              Food For The Nations distributes food for local, national and international causes meeting the needs of the hungry and hurting. We equip them through counseling to become self-sufficient and eventually provide for themselves. We actively support the Gospel of Jesus Christ in the Global Church.&nbsp;
              <h1>Urgent Projects:</h1>
              We are digging Bore-wells in India, getting food and school supplies to kids in Zambia and carrying out programs in New York city. Please contact us to find out how you can help or make an online donation today.&nbsp;
              <h1>Join Us:</h1>
              Hunger isn’t seasonal, which is why our  food drive gets so much attention. Devote an afternoon to stocking our pantry and see first-hand the families we help daily.&nbsp;
              <span className={servicesWrapper}>
                {/* <em>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </em> */}
              </span>
            </Card.Text>
            {/* <Card.Text className={smSubText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text> */}
            <Button
              href="#contact"
              className={btn}
            >
              CONTACT US TODAY
            </Button>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      {/* <Image src={Divider} className={divide} /> */}
      {/* <Image src={DividerLarge} className={divideLarge} /> */}
    </>
  );
};
export default Header;

// created wrapper to over ride bootstrap Card to solve background issue - I wanred
// transparent white but bootstrap bg-color over rode, as Card wrapped arround my Wrapper,
// this still prevented style change
