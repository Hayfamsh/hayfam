import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  InputGroup,
  Input,
  Alert,
} from "reactstrap";

// nodejs library that concatenates classes
import classnames from "classnames";

import Footer from "../components/Footer";

import { db } from "../firebase";

function getCurrentTime() {
  // define current Riyadh's time
  var d = new Date();
  var time = d.getTime();
  var offset = d.getTimezoneOffset() * (60 * 1000);
  var utc = new Date(time + offset);
  // set current time
  return new Date(utc.getTime() + 3 * 60 * 60 * 1000).toString();
}
const Contact = () => {
  const [submitTag, setSubmitTag] = useState(false);
  const [warning, setWarning] = useState(false);
  const [nFoc, setNFoc] = useState(false);
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
    currentTime: "",
  });
  const [didEdit, setDidEdit] = useState({
    name: false,
    email: false,
    message: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const nameIsInvalid = didEdit.name && enteredValues.name === "";
  const msgIsInvalid = didEdit.message && enteredValues.message === "";

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({ ...prevValues, [identifier]: value }));
    setDidEdit((prevValues) => ({ ...prevValues, [identifier]: false }));
  };

  const handleInputBlur = (identifier) => {
    setNFoc(false);
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    enteredValues.currentTime = getCurrentTime();

    if (
      !nameIsInvalid &&
      !emailIsInvalid &&
      !msgIsInvalid &&
      enteredValues.name !== "" &&
      enteredValues.email !== "" &&
      enteredValues.message !== ""
    ) {
      try {
        const docRef = await addDoc(collection(db, "contacts"), {
          name: enteredValues.name,
          email: enteredValues.email,
          title: enteredValues.title,
          message: enteredValues.message,
          currentTime: enteredValues.currentTime,
        });
        //reset the form
        setDidEdit({
          name: false,
          email: false,
          message: false,
        });
        setEnteredValues({
          name: "",
          email: "",
          title: "",
          message: "",
        });
        //Show alert and hide it after 5 sec
        setSubmitTag(true);
        setTimeout(() => {
          setSubmitTag(false);
        }, "5000");
      } catch (e) {
        alert(e.message);
      }
    } else {
      //Show alert and hide it after 5 sec
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, "5000");
    }
  };

  return (
    <>
      <main>
        {/* ########  Header ######## */}
        <div className="position-relative">
          <section className="section section-hero section-shaped shadow">
            <Container className=" align-items-center py-lg  ">
              <Row>
                <Col lg="6" className="col-md-6 order-2 order-md-1">
                  <div className="text-left-lg">
                    <h3 className="lead ">Contact Me</h3>

                    <p className=" sub-text mr-t">
                      I am glad to get in touch with you.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        {/* ########  Body ######## */}
        <div className="position-relative">
          <div className="sectio mid-section">
            <Container fluid className="">
              <Row className="align-items-center justify-content-center  ">
                <Col lg="12" className="  ">
                  <div className="   ">
                    <Row className=" justify-content-center m-card mx-width  mr-t shadow">
                      <Col
                        lg="6"
                        className="full-width col-md-6 order-2 order-md-1"
                      >
                        <div className="mr-1">
                          <div>
                            {submitTag && (
                              <Alert color="primary">
                                Your message has been sent
                              </Alert>
                            )}
                          </div>
                          <div>
                            {warning && (
                              <Alert color="danger">
                                Please, be sure all fields are valid before you
                                submit!
                              </Alert>
                            )}
                          </div>
                          <form className="form" onSubmit={handleSubmit}>
                            <FormGroup
                              className={classnames("mt-5", {
                                focused: nFoc,
                              })}
                            >
                              <InputGroup className="input-group-s">
                                <Input
                                  onChange={(e) =>
                                    handleInputChange("name", e.target.value)
                                  }
                                  onBlur={() => handleInputBlur("name")}
                                  value={enteredValues.name}
                                  placeholder="Your name"
                                  type="text"
                                  onFocus={(e) => setNFoc(true)}
                                  // onBlur={(e) => setNFoc(false)}
                                />
                              </InputGroup>
                              <div className="error-msg">
                                {nameIsInvalid && (
                                  <p>Name should not be empty</p>
                                )}
                              </div>
                            </FormGroup>
                            <FormGroup>
                              <InputGroup className="input-group-s">
                                <Input
                                  onChange={(e) =>
                                    handleInputChange("email", e.target.value)
                                  }
                                  onBlur={() => handleInputBlur("email")}
                                  onFocus={(e) => setNFoc(true)}
                                  value={enteredValues.email}
                                  placeholder="Email address"
                                  type="email"
                                />
                              </InputGroup>
                              <div className="error-msg">
                                {emailIsInvalid && (
                                  <p>Please enter a valid email address</p>
                                )}
                              </div>
                            </FormGroup>

                            <FormGroup className="mb-4">
                              <Input
                                onChange={(e) =>
                                  handleInputChange("title", e.target.value)
                                }
                                value={enteredValues.title}
                                className="form-control-s"
                                name="title"
                                placeholder="Title (optional)"
                              />
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <InputGroup className="input-group-s">
                                <Input
                                  onChange={(e) =>
                                    handleInputChange("message", e.target.value)
                                  }
                                  onBlur={() => handleInputBlur("message")}
                                  value={enteredValues.message}
                                  className="form-control-s"
                                  cols="30"
                                  name="name"
                                  placeholder="Type a message..."
                                  rows="4"
                                  type="textarea"
                                />
                              </InputGroup>
                              <div className="error-msg">
                                {msgIsInvalid && (
                                  <p>Message should not be empty</p>
                                )}
                              </div>
                            </FormGroup>
                            <div>
                              <Button
                                block
                                className="btn-prim btn-filled mr-t"
                                color="default"
                                // size="lg"
                                type="submit"
                              >
                                Send Message
                              </Button>
                            </div>
                          </form>
                          <div></div>
                        </div>
                      </Col>
                      <Col
                        lg="6"
                        className="full-width right-img col-md-6 order-1 order-md-2"
                      >
                        <div className="img-text mr-r">
                          <div className="text-left-lg mr-r">
                            <h4>Get in touch with me! </h4>
                            <p>I will response to you as soon as possible.</p>
                          </div>
                          <div className=" pd-r">
                            <a
                              className="color-none"
                              href="https://www.linkedin.com/in/hayfa-moh"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fa fa-linkedin" aria-hidden="true" />
                            </a>

                            <a
                              className="color-none"
                              href="https://www.behance.net/Hayfamsha7c5"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fa fa-behance" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
