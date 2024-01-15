import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

//CV
import Resume from "../../assets/documents/HAYFA-CV.pdf";
class About extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative" id="about">
          <div className="sectio mid-section">
            <Container fluid>
              <Row className="align-items-center justify-content-center ">
                <div className="text-center">
                  <h3 className="mr-t"> About</h3>
                </div>

                <Col lg="6" className="full-width ">
                  <div className="m-card mr-t shadow">
                    <img
                      alt="..."
                      className="rel-img shadow"
                      src={require("../../assets/img/laptop-img.jpeg")}
                      style={{ width: "200px" }}
                    />
                    <p className="">Find me on:</p>
                    <div className=" pd-r">
                      <a
                        className="color-none"
                        href="https://wwww.linkedin.com/in/hayfa-moh"
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
                <Col lg="6" className="">
                  <div className="text-content  justify-content-center">
                    <p>
                      I am very excited to introduce myself to you. My name is
                      Hayfa Mohammed. In 2022, I earned a master's degree in
                      computer science from King Saud University. My MSc project
                      was in deep learning. I have been working as a web
                      developer and designer for a long time. I am trying to be
                      professional in what I do, so I am a person who believes
                      that there is nothing that cannot be learned. <br />I am
                      looking forward to being a Software engineer, Business
                      Intelligence developer, or any position that matches my
                      qualifications. For more information, please take a look
                      at my resume below.
                    </p>
                    <div className="center-s">
                      <Button
                        className="btn-prim btn-second mr-t "
                        color="default"
                        href={Resume}
                        download="HAYFA Mohammed CV"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="nav-link-inner--text ml-1">
                          My resume
                        </span>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default About;
