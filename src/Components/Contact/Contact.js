import { useNavigate } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactStyle from "./Contact.module.css";
import Wrapper from "../ui/Wrapper";
import Title from "./Title";
import Email from "./Email";
import Message from "./Message";
import Phone from "./Phone";
import SubmitButton from "./SubmitButton";
import Name from "./Name";

const Contact = () => {
  const form = ContactStyle.form;
  const footer = ContactStyle.footer;
  const cardWrapper = ContactStyle.cardWrapper;
  const fieldWrapper = ContactStyle.fieldWrapper;

  const navigate = useNavigate();
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xjpxy88", //service id
        "template_gjsh70q", //template id (get from settings)
        // console.log("DATA",  refForm.current.name.value),
        refForm.current,
        "Z3WrABviQQrOqHpiM" //public key (get from account page in Email.js)
      )
      .then(
        (result) => {
          //   alert("Message successfully sent!");
          navigate(`thankyou/${refForm.current.name.value}`);
          // window.location.reload(false);
          console.log("result", refForm.current.name.value);
        },
        (error) => {
          alert("Failed to send the message, please try again");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Card
        id="contact"
        style={{ border: "none", borderRadius: "0", background: "#5b2443" }}
      >
        <Title />
        <Wrapper className={cardWrapper}>
          <Form
            id="contact"
            ref={refForm}
            onSubmit={sendEmail}
            className={form}
            autoComplete="on"
          >
            <div className={fieldWrapper}>
              <Email />
              <Name />
            </div>
            <Phone />

            <Message />

            <SubmitButton />
          </Form>
        </Wrapper>
      </Card>
      <Card.Text className={footer}>
        © 2023 All Rights Reserved{" "}
        <a style={{textDecoration:"none", color:"#371528"}} href="https://www.designinglory.com">DesigninGlory.com</a>
      </Card.Text>
    </>
  );
};
export default Contact;
