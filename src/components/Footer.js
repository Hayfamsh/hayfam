import React from "react";
// import { Container } from "reactstrap";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        {/* <div className=" py-2  justify-content-center footer">
          <div class="container text-center">
            <p>&copy; 2023 All right reserved by Hayfa M</p>
          </div>
        </div> */}

        <Container className="footer text-center mr-t" fluid>
          <hr />
          <Row className="align-items-center justify-content-md-between">
            <Col>
              <div className="copyright">
                © {new Date().getFullYear()} All right reserved by Hayfa M .
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Footer;
