import React, { PureComponent } from "react";
import Header from "../components/Header";
import Content from "../components/Content";

class Home extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default Home;
