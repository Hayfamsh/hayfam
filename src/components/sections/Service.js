import React from "react";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

class Services extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative" id="services">
          <div className="section mid-section">
            <Container fluid className="full-height align-items-center">
              <Row className=" justify-content-center ">
                <div className="text-center">
                  <h3 className="mr-t"> Services</h3>
                </div>
                <Col lg="12">
                  <Row className="row-components mr-r row">
                    <Col lg="4" className="y-action">
                      <Card className="boder-rad shadow h-100">
                        <CardBody className="text-center">
                          <div className="svg-img">
                            <img
                              alt="..."
                              className="icon"
                              src={require("../../assets/icons/wDesign-i.png")}
                            />
                          </div>
                          <h6 className="sec-color">Web Design</h6>
                          <p>
                            Design the user interface that reflect your
                            requirements.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="4" className="y-action">
                      <Card className="boder-rad shadow h-100">
                        <CardBody className="text-center">
                          <div className="svg-img">
                            <img
                              alt="..."
                              className="icon"
                              src={require("../../assets/icons/code-i.png")}
                            />
                          </div>
                          <h6 className="sec-color">Web Development</h6>
                          <p>Develop a website that fulfil your needs.</p>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="4" className="y-action">
                      <Card className="boder-rad shadow h-100">
                        <CardBody className="text-center">
                          <div className="svg-img">
                            <img
                              alt="..."
                              className="icon"
                              src={require("../../assets/icons/graphic-i.png")}
                            />
                          </div>
                          <h6 className="sec-color">Graphic Design</h6>
                          <p>Design whatever you need.</p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
