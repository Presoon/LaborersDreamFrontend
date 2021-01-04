import React from "react";
import { Route } from "react-router-dom";
import API from "../services/APIcontext";
import UsersAdd from "../components/UsersAdd";
import Users from "../components/UsersAll";

class UsersLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Route path="/users" exact component={Users} />
        <Route path="/users/add" component={UsersAdd} />
      </>
    );
  }
}

export default UsersLayout;
