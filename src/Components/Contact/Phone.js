import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "./Contact.module.css";
const Phone = () => {
  const email = ContactStyle.email;
  return (
    <>
      <Form.Group as={Col} sm={12}>
        <InputGroup hasValidation>
          <Form.Control
            className={email}
            name="phone"
            type="tel"
            placeholder="Phone Number"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Please enter a valid phone number format
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Phone;
