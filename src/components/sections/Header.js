import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

//local componetnt
import Social from "../Social-link";
class Header extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero ">
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-start justify-content-start">
                  <Col className="text-left" lg="6">
                  
                    <p className="lead text-white">Hello, I am Hayfa</p>

                    <div className="mt-5">
                      <p className="text-white  mb-0 mr-2">
                        Web developer and UI/UX designer.
                      </p>
                      {/* <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={require("assets/img/brand/creativetim-white-slim.png")}
                      /> */}
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Header;
