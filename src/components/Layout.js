import React, { Component } from "react";
import Navtop from "./layout/Navtop";
import Footer from "./layout/Footer";

class Layout extends Component {
  render() {
    return (
      <>
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Navtop />
            <div class="container-fluid">
              <h3 class="text-dark mb-1">Blank Page</h3>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Layout;
