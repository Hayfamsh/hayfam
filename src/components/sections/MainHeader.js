import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class MainHeader extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-main section-shaped shadow">
            {/* ***** New container ******** */}
            <Container className=" align-items-center py-lg  ">
              <Row>
                <Col lg="6" className="col-md-12 order-2 order-md-1">
                  <div className="text-left-lg">
                    <h3 className="lead ">Hello, I am Hayfa</h3>

                    <p className=" sub-text mr-t">
                      I am Web developer and UI/UX designer, I work to make your
                      dreams come true, from designing to digital products.
                    </p>
                    <p className=" sub-text ">
                      Let's cut the distance and make your dreams real.
                    </p>
                    <Button
                      className="btn-prim btn-filled  mr-t"
                      color="default"
                      href="#/contact"
                    >
                      <span className="nav-link-inner--text ml-1">
                        Contact me
                      </span>
                    </Button>
                  </div>
                </Col>
                <Col lg="6" className="col-md-0 order-1 order-md-2  full-width">
                  <img
                    alt="..."
                    className="header-img  "
                    src={require("../../assets/img/desktop_img.jpg")}
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default MainHeader;
