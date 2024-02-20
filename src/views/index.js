import React, { Component } from "react";

// Local components
import MainHeader from "../components/sections/MainHeader";
import About from "../components/sections/About";
import Services from "../components/sections/Service";
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
        <main ref="main">
          <MainHeader />
          <About />
          <Services />
          <End />
          <Footer />
        </main>
      </>
    );
  }
}

export default Index;
