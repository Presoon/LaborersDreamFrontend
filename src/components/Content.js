import React, { Component } from "react";
import Navtop from "../components/Navtop";
import Footer from "../components/Footer";

class Content extends Component {
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

export default Content;
