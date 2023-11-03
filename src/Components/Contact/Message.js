import React from "react";
import { Form } from "react-bootstrap";
import ContactStyle from "./Contact.module.css";

const Message = () => {
  const message = ContactStyle.message;
  return (
    <>
      <Form.Control
        className={message}
        as="textarea"
        name="message"
        type="text"
        placeholder="Reason for Connecting"
        rows={3}
        style={{ margin: ".5rem 0 0 0" }}
      />
    </>
  );
};
export default Message;
