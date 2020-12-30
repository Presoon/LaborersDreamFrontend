import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

class Login extends Component {
  render() {
    const { Consumer } = AppContext;
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
              <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-flex blackback">
                      <div className="flex-grow-1 bg-login-image">
                        <span className="fslarge">Marzenie laboranta</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h4 className="text-dark mb-4">
                            <br />
                            Logowanie do panelu!
                          </h4>
                        </div>
                        <form className="user">
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              type="email"
                              placeholder="Wprowadź adres email..."
                              name="email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              type="password"
                              placeholder="...oraz hasło"
                              name="password"
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <div className="form-check">
                                <input
                                  className="form-check-input custom-control-input"
                                  type="checkbox"
                                  id="formCheck-1"
                                />
                                <label
                                  className="form-check-label custom-control-label"
                                  htmlFor="formCheck-1"
                                >
                                  Zapamiętaj
                                </label>
                              </div>
                            </div>
                          </div>
                          <Consumer>
                            {({ toggleLoggedState }) => (
                              <Link to="/">
                                <button
                                  className="btn btn-primary btn-block text-white btn-user"
                                  onClick={toggleLoggedState}
                                >
                                  Zaloguj
                                </button>
                              </Link>
                            )}
                          </Consumer>
                          <hr />
                        </form>
                        <div className="text-center">
                          <a className="small" href="forgot-password.html">
                            Zapomniałeś hasła?
                          </a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="register.html">
                            Stwórz konto!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
