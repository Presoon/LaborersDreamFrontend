import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../services/APIcontext";

const Table = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await API.getAllResources();
    setResources(response.data);
  };

  const renderHeader = () => {
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

  const renderBody = () => {
    return (
      resources &&
      resources.map(
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

  return (
    <>
      <div id="top-bar">
        <h1 id="title">Inwentarz</h1>
      </div>
      <Link to="/inventory/add">
        <button id="buttonAdd" className="ml-auto mt-5">
          Dodaj
        </button>
      </Link>
      <br />
      <div
        className="table-responsive table mt-2"
        id="dataTable"
        role="grid"
        aria-describedby="dataTable_info"
      >
        <table id="dataTable" className="table my-0 inventory">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
