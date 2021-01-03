import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
          <div className="container-fluid d-flex flex-column p-0">
            <Link
              className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
              to="/home"
            >
              <div className="sidebar-brand-icon ">
                <img className="logoimg" src="assets/img/logo.png" alt="sd" />
              </div>
              <div className="sidebar-brand-text mx-3">
                <span>
                  Marzenie <br />
                  Laboranta
                </span>
              </div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <ul className="nav navbar-nav text-light" id="accordionSidebar">
              <li className="nav-item" role="presentation">
                <NavLink className="nav-link" exact to="/home">
                  <i className="fas fa-home" />
                  <span>Strona główna</span>
                </NavLink>
              </li>
              <li className="nav-item" role="presentation">
                <NavLink className="nav-link" to="/newticket">
                  <i className="fas fa-bug" />
                  <span>Utwórz zgłoszenie</span>
                </NavLink>
              </li>
              <li className="nav-item" role="presentation">
                <NavLink className="nav-link" to="/tickets">
                  <i className="fas fa-user" />
                  <span>System zgłoszeń</span>
                </NavLink>
              </li>
              <li className="nav-item" role="presentation">
                <NavLink className="nav-link" to="/inventory">
                  <i className="fas fa-shopping-cart" />
                  <span>Inwentarz</span>
                </NavLink>
              </li>
              <li className="nav-item" role="presentation">
                <NavLink className="nav-link" to="/check">
                  <i className="far fa-user-circle" />
                  <span>Sprawdź sprzęt</span>
                </NavLink>
              </li>

              <li className="nav-item" role="presentation">
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={() => {
                    AuthService.logout();
                    window.location.reload();
                  }}
                >
                  <i className="fas fa-user-circle" />
                  <span>Wyloguj</span>
                </NavLink>
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
