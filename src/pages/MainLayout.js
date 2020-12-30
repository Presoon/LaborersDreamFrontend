import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Navtop from "../components/layout/Navtop";
import Footer from "../components/layout/Footer";
import Home from "../pages/Home";
import Tickets from "../pages/Tickets";
import Inventory from "../pages/Inventory";
import Check from "../pages/Check";

class MainLayout extends Component {
  render() {
    return (
      <>
        <div id="wrapper">
          <Navbar />
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <Navtop />
              <div className="container-fluid">
                <Route path="/home" exact component={Home} />
                <Route path="/tickets" component={Tickets} />
                <Route path="/inventory" component={Inventory} />
                <Route path="/check" component={Check} />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default MainLayout;
