import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "./Contact.module.css";


const Name = () => {
  const email = ContactStyle.email;
  return (
    <>
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
             className={email}
            id="name"
            name="name"
            type="name"
            required
            minLength={3}
            maxLength={20}
            placeholder="Name"
            
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Full name required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Name;
