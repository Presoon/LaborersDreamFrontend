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
      currentUser: { login: null },
      showAdminBoard: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render = () => {
    var user = AuthService.getCurrentUser();
    const { Provider } = AppContext;
    return (
      <>
        <Provider value={this.state}>
          <Router>
            <Switch>
              {user ? (
                <Route to="/" component={MainLayout} />
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
