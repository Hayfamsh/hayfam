import React, { Component } from "react";
import { Link } from "react-router-dom";
// hides or shows a component based on your scroll
import Headroom from "headroom.js";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class MainNavbar extends Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              {/* <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img alt="..." src={require("../assets/img/test.jpeg")} />
              </NavbarBrand> */}
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        {/* <img alt="..." src={require("assets/img/test.jpeg")} /> */}
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  {/* <NavItem>
                    <NavLink to="/"> HAYFA </NavLink>
                  </NavItem> */}
                  <NavbarBrand className="" to="/" tag={Link}>
                    <img
                      alt="..."
                      src={require("../assets/img/HAYFA-logo.jpg")}
                    />
                  </NavbarBrand>

                  <NavItem>
                    <NavLink href="/#about">About</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/#services">Services</NavLink>
                  </NavItem>

                  {/* <NavItem>
                    <NavLink href="/components/">Portifilio</NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink href="/contact">Contact</NavLink>
                    {/* <Button
                      className="btn-prim "
                      color="default"
                      href="/contact"
                      // target="_blank"
                    >
                      <span className="nav-link-inner--text ml-1">
                        Contact me
                      </span>
                    </Button> */}
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/in/hayfa-moh"
                      id="tooltip184698704"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        LinkedIn
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698704">
                      Connet me on LinkedIn
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.behance.net/Hayfamsha7c5"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-behance" aria-hidden="true" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Behance
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow me on Behance
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MainNavbar;
