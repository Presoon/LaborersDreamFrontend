import React from "react";
import UserService from "../services/user.service";

class Inventory extends React.Component {
  state = {
    inventory: "",
  };

  componentDidMount() {
    UserService.getQRCodeInfo().then(
      (response) => {
        this.setState({
          inventory: response.data,
        });
      },
      (error) => {
        this.setState({
          inventory:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    const { inventory } = this.state;
    return (
      <>
        <h1>Inventory Page</h1>
        {
          <div>
            <p>
              <span>ID: </span>
              <b>{inventory.id}</b>
            </p>
            <p>
              <span>Name: </span>
              <b>{inventory.specification}</b>
            </p>
            <p>
              <span>Series Number: </span>
              <b>{inventory.seriesNumber}</b>
            </p>
          </div>
        }
      </>
    );
  }
}

export default Inventory;
