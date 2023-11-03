import React from "react";
import { Card } from "react-bootstrap";
import ContactStyle from "./Contact.module.css";

const Title = () => {
  const contact = ContactStyle.contact;
  const contactTitleWrapper = ContactStyle.contactTitleWrapper;

  return (
    <>
        <div className={contactTitleWrapper}>
          <Card.Title className={contact}>Contact Us</Card.Title>
          <h3 style={{ color: "white" }}>Call: 516-983-4197</h3>
        </div>
    </>
  );
};
export default Title;
