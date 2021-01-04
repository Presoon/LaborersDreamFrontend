import React from "react";

class Tickets extends React.Component {
  render() {
    return <h1>Tickets tutaj będzie</h1>;
  }
}

export default Tickets;


/*import React, { Component } from "react";
import API from "../services/APIcontext";

//const URL = 'http://localhost:5000/resources/all'

class Tickets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: { students: {} },
    };
  }

  componentDidMount() {
    API.getAllTickets().then((res) => {
      this.setState({
        resources: res,
      });
    });
  }

  renderHeader = () => {
    let headerElement = [
      "id",
      "nazwa",
      "numer seryjny",
      "klucz instalacji",
      "data zakupu",
      "lokalizacja",
      "działanie",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  renderBody = () => {
    const res = this.state.resources;
    return (
      res &&
      res.map(
        ({
          id,
          specification,
          seriesNumber,
          instalationKey,
          dateOfPurchase,
          localization,
        }) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{specification}</td>
              <td>{seriesNumber}</td>
              <td>{instalationKey}</td>
              <td>{dateOfPurchase}</td>
              <td>{localization}</td>
              <td className="operation">
                <button id="buttonScrap">Zezłomuj</button>
                <button id="buttonEdit">Edytuj</button>
              </td>
            </tr>
          );
        }
      )
    );
  };
  render() {
    return (
      <>
        <div id="top-bar">
          <h1 id="title">Inwentarz</h1>
          <button id="buttonAdd" className="ml-auto">
            Dodaj
          </button>
        </div>
        <br></br>
        <div
          className="table-responsive table mt-2"
          id="dataTable"
          role="grid"
          aria-describedby="dataTable_info"
        >
          <table id="dataTable" className="table my-0 inventory">
            <thead>
              <tr>{this.renderHeader()}</tr>
            </thead>
            <tbody>{this.renderBody()}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Tickets;*/
