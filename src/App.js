import React, { PureComponent } from "react";
import { AppContext, defaultObject } from "./AppContext.js";

import Login from "./pages/Login";
import Home from "./pages/Home";

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  };

  render() {
    return (
      <>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          {!this.state.isUserLogged ? <Login /> : <Home />}
        </AppContext.Provider>
      </>
    );
  }

  handleToggleStateIsLogged = () =>
    this.setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));
}

export default App;
