import React, { Component } from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";

class MainLayout extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <Layout />
      </div>
    );
  }
}

export default MainLayout;
