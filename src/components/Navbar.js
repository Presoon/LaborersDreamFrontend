import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
          <div className="container-fluid d-flex flex-column p-0">
            <a
              className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
              href="#"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <img className="logoimg" src="assets/img/logo.png" alt="sd" />
              </div>
              <div className="sidebar-brand-text mx-3">
                <span>Marzenie Laboranta</span>
              </div>
            </a>
            <hr className="sidebar-divider my-0" />
            <ul className="nav navbar-nav text-light" id="accordionSidebar">
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="home.html">
                  <i className="fas fa-home" />
                  <span>Strona główna</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="profile.html">
                  <i className="fas fa-user" />
                  <span>System zgłoszeń</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="table.html">
                  <i className="fas fa-shopping-cart" />
                  <span>Inwentarz</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="login.html">
                  <i className="far fa-user-circle" />
                  <span>Sprawdź sprzęt</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="register.html">
                  <i className="fas fa-user-circle" />
                  <span>Wyloguj</span>
                </a>
              </li>
            </ul>
            <div className="text-center d-none d-md-inline">
              <button
                className="btn rounded-circle border-0"
                id="sidebarToggle"
                type="button"
              />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
