import React, { Component } from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// Local components
import MainNavbar from "../components/MainNavbar";
// import Header from "../components/sections/Header";
import MainHeader from "../components/sections/MainHeader";
import About from "../components/sections/About";
import Services from "../components/sections/Service";
import Projects from "../components/sections/Project";
import End from "../components/sections/End-section";
import Footer from "../components/Footer";

class Index extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <MainHeader />
          <About />
          <Services />
          {/* <Projects /> */}
          <End />
          <Footer />
        </main>
      </>
    );
  }
}

export default Index;
