import React from "react";
import { Container, Row, Col } from "reactstrap";
class End extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <div className="sectio mid-section">
            <Container>
              <Row>
                <Col lg="12" className="mr-r">
                  <div className="lead">
                    <h3 className="sec-color">
                      Do you have any question or collaboration?
                    </h3>
                  </div>
                  <p>
                    Please Don't hesitate to{" "}
                    <a href="#/contact" className="color-none b-text ">
                      contact me
                    </a>{" "}
                    to discuss.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default End;
