import React from "react";
import { Card, ListGroup } from "react-bootstrap";
// import profilePicture from "../../images/about_profile_pic.jpg"

import aboutStyle from "./About.module.css";
import Wrapper from "../ui/Wrapper";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";

const About = () => {
  const matchesSm = useMediaQuery("(max-width: 768px)");

  const innerCardWrapper = aboutStyle.innerCardWrapper;
  const cardBody = aboutStyle.cardBody;
  // const aboutImg = aboutStyle.aboutImg;
  const aboutTitle = aboutStyle.aboutTitle;
  const subText = aboutStyle.subText;
  const subTextOffer = aboutStyle.subTextOffer;
  const cardWrapper = aboutStyle.cardWrapper;
  const aboutTitleWrapper = aboutStyle.aboutTitleWrapper;
  const emTitle = aboutStyle.emTitle;
  const listGroup = aboutStyle.listGroup;

  return (
    <>
      <div id="about">
        <Wrapper className={cardWrapper}>
          <div className={aboutTitleWrapper}>
            {matchesSm ? (
              <Card.Title className={aboutTitle}>
                <div className={emTitle}>
                  Proudly <br /> Family Owned
                </div>
              </Card.Title>
            ) : (
              <Card.Title className={aboutTitle}>
                <div className={emTitle}>About Us:</div>
              </Card.Title>
            )}
          </div>
          <Wrapper className={innerCardWrapper}>
            <Wrapper className={cardBody}>
              <figure>
                {/* <Card.Img
                  src={profilePicture}
                  alt="pressure washing marital business"
                  className={[aboutImg
                  ]}
                /> */}
                <div><img src="https://foodforthenations704431282.files.wordpress.com/2019/04/dsc00634.jpg?w=1024&h=633&crop=1" alt="Who We Are" /></div>
              </figure>
              <Card.Text className={subText}>
                <h1>Our History</h1>
                The founder of Food For The Nations, Joanne Fournillier, and her two kids, Monique and Jovan, began feeding the homeless on Easter and Thanksgiving in New York City. Joanne spent a few years not only giving the meals but sharing a word of encouragement and hope for a better tomorrow. The family also took clothing and toys to the kids who lived at the shelters, at this time a close friend joined the group as Joanne’s desire to do more became evident. As a single  parent of two kids she understood the story of some and helped in whatever way she could. Her faith being the motivator.

                In 2007, after a years of witnessing the harsh reality of homelessness and food insecurity, Food For The Nations was formed and registered as a non profit organization.

                <h1>Our Mission</h1>
                Food For The Nations distributes food for local, national and international causes meeting the needs of the hungry and hurting. We equip them through counseling to become self-sufficient and eventually provide for themselves. We actively support the Gospel of Jesus Christ in the Global Church.

              </Card.Text>
              <hr />
              {/* <Card.Text className={subTextOffer}>
                Services
              </Card.Text> */}
              {/* <Card.Text className={subTextOffer}>
                Offered:
              </Card.Text> */}
              {/* <ListGroup className={listGroup}>
                <ListGroup.Item>Service 1</ListGroup.Item>
                <ListGroup.Item>Service 2</ListGroup.Item>
                <ListGroup.Item>Service 3</ListGroup.Item>
                <ListGroup.Item>Service 4</ListGroup.Item>
              </ListGroup> */}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </div>
    </>
  );
};
export default About;
