import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "./Contact.module.css";

const Email = () => {
  const email = ContactStyle.email;

  return (
    <>
      <Form.Group as={Col} sm={12}>
        <InputGroup hasValidation>
          <Form.Control
            id="email"
            className={email}
            name="email"
            type="email"
            required
            placeholder="Email Address"
            minLength={3}
            maxLength={50}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email format
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Email;
