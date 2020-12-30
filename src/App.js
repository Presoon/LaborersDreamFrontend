import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "./AppContext.js";

import Login from "./pages/Login";
import MainLayout from "./pages/MainLayout";
import AuthService from "./services/auth.service";

class App extends Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);

    this.state = {
      isUserLogged: false,
      currentUser: null,
      showAdminBoard: false,
      toggleLoggedState: this.handleToggleStateIsLogged.bind(this),
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  handleToggleStateIsLogged() {
    this.setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));
  }

  render = () => {
    const { Provider } = AppContext;
    return (
      <>
        {console.log(this.state)}
        <Provider value={this.state}>
          <Router>
            <Switch>
              {this.state.isUserLogged ? (
                <Route to="/" exact component={MainLayout} />
              ) : (
                <Route to="/" exact component={Login} />
              )}
            </Switch>
          </Router>
        </Provider>
      </>
    );
  };
}

export default App;
