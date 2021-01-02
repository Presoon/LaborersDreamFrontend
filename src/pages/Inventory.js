import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserService from "../services/user.service"

//const URL = 'http://localhost:5000/resources/all'

const Table = () => {
    const [resources, setResources] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await UserService.getAllResources();
        setResources(response.data)
    }

    const renderHeader = () => {
        let headerElement = ['id', 'nazwa', 'numer seryjny', 'klucz instalacji', 'data zakupu', 'lokalizacja', 'działanie']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return resources && resources.map(({ id, specification, seriesNumber, instalationKey, dateOfPurchase, localization }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{specification}</td>
                    <td>{seriesNumber}</td>
                    <td>{instalationKey}</td>
                    <td>{dateOfPurchase}</td>
                    <td>{localization}</td>
                    <td className='operation'>
                      <button id="buttonDelete">Usuń</button>
                      <button id="buttonEdit">Edytuj</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
          <div id="top-bar">
            <h1 id='title'>Inwentarz</h1>
            <button id="buttonAdd" class="ml-auto">Dodaj</button>
          </div>
          <br></br>
          <table id='resource'>
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
               {renderBody()}
            </tbody>
          </table>
        </>
    )
}

export default Table
