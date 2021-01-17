import React from "react";
import authService from "../services/auth.service";
import {NavLink} from "react-router-dom";

class Home extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    const user = authService.getCurrentUser();
    return (
      <div>
        <div className="d-flex p-2">
          <h1>Witaj w programie {user.name}</h1>
          <h1 className="ml-auto">{this.state.time}</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4 text-center mt-4">
              <NavLink className="nav-link d-flex flex-column border border-primary rounded" to="/newticket">
                <i className="fas fa-bug fa-6x"/>
                <span className="mt-3 display-4">Utwórz zgłoszenie</span>
              </NavLink>
            </div>
            <div className="col-8 col-md-4 text-center mt-4">
            <NavLink className="nav-link d-flex flex-column border border-primary rounded" to="/tickets">
                      <i className="fas fa-book fa-6x"/>
                      <span className="mt-3 display-4">System zgłoszeń</span>
                    </NavLink>
            </div>
            <div className="col-8 col-md-4 text-center mt-4">
            <NavLink className="nav-link d-flex flex-column border border-primary rounded" to="/inventory">
                      <i className="fas fa-cubes fa-6x"/>
                      <span className="mt-3 display-4">Inwentarz</span>
                    </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-md-4 text-center mt-4">
            <NavLink className="nav-link d-flex flex-column border border-primary rounded" to="/check">
                  <i className="fas fa-question-circle fa-6x" />
                  <span className="mt-3 display-4">Sprawdź sprzęt</span>
                </NavLink>
            </div>
            <div className="col-8 col-md-4 text-center mt-4">
            <NavLink className="nav-link d-flex flex-column border border-primary rounded" to="/users">
                      <i className="fas fa-users fa-6x"/>
                      <span className="mt-3 display-4">Użytkownicy</span>
                    </NavLink>
            </div>
            <div className="col-8 col-md-4 text-center mt-4">
            <NavLink className="nav-link d-flex flex-column border border-primary rounded" to="/localizations">
                      <i className="fas fa-globe fa-6x"/>
                      <span className="mt-3 display-4">Lokalizacje</span>
                    </NavLink>
            </div>
            </div>
            <div className="row">
              <div className="col-8 col-md-4 text-center mt-4">
                <NavLink className="nav-link d-flex flex-column border border-primary rounded"
                  to="/login"
                  onClick={() => {
                    authService.logout();
                    window.location.reload();
                  }}
                >
                  <i className="fas fa-user-circle fa-6x"/>
                  <span className="mt-3 display-4">Wyloguj</span>
                </NavLink>
              </div>
              <div className="col-8 col-md-4 text-center mt-4">
              </div>
              <div className="col-8 col-md-4 text-center mt-4">
              </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Home;
