// import React from "react";
// import { Card, Image } from "react-bootstrap";
// import Gallery from "../Gallery/Gallery";
// import PowerTool from "../../images/power-washer.svg";
// import ComponentOne from "./CompOne.module.css";
// import "../../../src/Components/Styling/style.css";
// import Wrapper from "../ui/Wrapper";
// // import Divider from "../../images/divider-03.svg";
// // import DividerLarge from "../../images/divider-04.svg";

// const CompOne = () => {
//   const class1 = ComponentOne.class1;
//   const class2 = ComponentOne.class2;
//   const class3 = ComponentOne.class3;
//   const class4 = ComponentOne.class4;
//   const powerWasher = ComponentOne.powerWasher;
//   const iconWrapper = ComponentOne.iconWrapper;
//   const divide = ComponentOne.divide;
//   const divideLarge = ComponentOne.divideLarge;

//   return (
//     <>
//       <div>
//         <Image src={PowerTool} className={powerWasher} />
//         <div className={iconWrapper}>
//           <Card.Title id="Hello World" className={class3}>
//             We Do It <em>class3</em>
//           </Card.Title>
//           <Card.Title className={class4}>
//             We Do It <em>class4</em>
//           </Card.Title>
//         </div>
//         <Wrapper className={class1}>
//           <Wrapper className={class2}>
//             <hr />
//             <Gallery autoPlay />
//             {/* <Image src={Divider} className={divide} /> */}
//             {/* <Image src={DividerLarge} className={divideLarge} /> */}
//           </Wrapper>
//         </Wrapper>
//         <Card.Text className="None">
//           <h1>Our Mission:</h1>
//           Food For The Nations distributes food for local, national and international causes meeting the needs of the hungry and hurting. We equip them through counseling to become self-sufficient and eventually provide for themselves. We actively support the Gospel of Jesus Christ in the Global Church.&nbsp;
//           <h1>Urgent Projects:</h1>
//           We are digging Bore-wells in India, getting food and school supplies to kids in Zambia and carrying out programs in New York city. Please contact us to find out how you can help or make an online donation today.&nbsp;
//           <h1>Join Us:</h1>
//           Hunger isn’t seasonal, which is why our  food drive gets so much attention. Devote an afternoon to stocking our pantry and see first-hand the families we help daily.&nbsp;
//           <span className="none1">
//           </span>
//         </Card.Text>
//       </div>
//     </>
//   );
// };
// export default CompOne;

import React from "react";
import { Card, Button, Image } from "react-bootstrap";
// import Logo from "../../images/logo-large.jpg";
import HeaderStyle from "../Header/Header.module.css";
import Wrapper from "../ui/Wrapper";
// import Divider from "../../images/divider-03.svg";
// import DividerLarge from "../../images/divider-04.svg";
import Info from "../Info/Info";
import HeaderGallery from "../Gallery/HeaderGallery"

const Header = () => {
  const cardWrapper = HeaderStyle.cardWrapper;
  const innerCardWrapper = HeaderStyle.innerCardWrapper;
  const cardBody = HeaderStyle.cardBody;
  const logo = HeaderStyle.logo;
  const slogin = HeaderStyle.slogin;
  const subText = HeaderStyle.subText;
  const smSubText = HeaderStyle.smSubText;
  const btn = HeaderStyle.btn;
  const divide = HeaderStyle.divide;
  const divideLarge = HeaderStyle.divideLarge;
  const exteriorText = HeaderStyle.exteriorText;
  const hr = HeaderStyle.hr;
  const servicesWrapper = HeaderStyle.servicesWrapper;

  return (
    <>
      <Wrapper className={cardWrapper}>
        <Wrapper className={innerCardWrapper}>
          <Info />
          <Wrapper className={cardBody}>
            {/* <Card.Img src={} alt="Done Bright Done Right LLC" className={logo} /> */}
            <img src="https://foodforthenations704431282.files.wordpress.com/2019/04/e067b0919f0f602ff8586b5cd61b1353-e1556139777183.jpeg?w=103" alt="Local and Internation Place Holder" />
            <Card.Title className={slogin}>
              Local Work (Commmunity Builidng) <br /> and International Work
            </Card.Title>
            <hr className={hr} />
            {/* <em className={exteriorText}>Services Offered Here</em> */}
            <Card.Text className={subText}>
              <h1>Food Distribution:</h1>
              Food For The Nations goes into various communities, to distribute food to individuals and families with a need, at times pantries may be set up.
              <HeaderGallery autoPlay />&nbsp;
              <h1>Health and Wellness:</h1>
              Volunteers are trained and certified by the NYC Department of Health to read and monitor Blood Pressure of our guests if requested. This is usually done at our community feeding location. We also have volunteers who are trained in Mental Health.
              <HeaderGallery autoPlay />&nbsp;
              <h1>Easter and Thanksgiving Meals:</h1>
              We wish to celebrate the holidays with those persons in need. Meals will be given out at an advertised location. All are welcome!
              <HeaderGallery autoPlay />&nbsp;
              <h1>Christmas Angel Program:</h1>
              Our biggest and longest running program to date! Around the holidays we collect donated unwrapped gifts for children in situations of need. We usually partner with a local shelter with a large youth population to ensure every child in that shelter could have at least one gift during the season.
              <p>Fact: Families make up 3/4 of the New York City municipal shelter system.</p>
              <HeaderGallery autoPlay />&nbsp;
              <h1>Back to School Giveaways:</h1>
              Before the start of the new school year we distribute school supplies such as backpacks, notebooks and pencils to the community. This occurs during the summer at a community block party or gathering. This year it will be on July 13th at Cuyler Gore Park in Brooklyn, New York.
              <HeaderGallery autoPlay />&nbsp;
              {/* <Card.Title className={slogin}>
                International <br /> Work: */}

              <h1>International Work:</h1>
              <h2>India Mission:</h2>
              <h3>Clean water for ALL people:</h3>
              Before the start of the new school year we distribute school supplies such as backpacks, notebooks and pencils to the community. This occurs during the summer at a community block party or gathering. This year it will be on July 13th at Cuyler Gore Park in Brooklyn, New York.
              <HeaderGallery autoPlay />&nbsp;
              <h2>Zambia Mission:</h2>
              <h3>Education and Food Security for ALL people:</h3>
              We are working with Pastor Standwell Kajani the founder of Lusungu community school to provide supplies for the students and their community. We have helped with the cost of providing education for Lusungu community school by collecting, packing and shipping school supplies. Additionally, as some students walk a long way to get to school, we have ensured that they have a meal each school day by covering the delivery costs of donated packaged meals. Finally, we have strengthened the community of these students by assisting the farmers with the cost of seed and fertilizer to ensure the families can have food.

              Due to the success of the Lusungu community school, the local government has taken over the daily operations and maintenance. We are now working with Pastor Kajani to build a new school to feed and provide an education to a new community.

              <p>FACT: For many Zambians their staple is ​ maize/ corn which is used to make Nshima, a thick porridge from finely ground corn.</p>
              <HeaderGallery autoPlay />&nbsp;
              {/* </Card.Title> */}


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
      </Wrapper >
      {/* <Image src={Divider} className={divide} /> */}
      {/* <Image src={DividerLarge} className={divideLarge} /> */}
    </>
  );
};
export default Header;

// created wrapper to over ride bootstrap Card to solve background issue - I wanred
// transparent white but bootstrap bg-color over rode, as Card wrapped arround my Wrapper,
// this still prevented style change
