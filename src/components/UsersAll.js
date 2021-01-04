import React from "react";
import API from "../services/APIcontext";
import { Link } from "react-router-dom";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allUsers: null,
      reload: null,
      message: null,
    };
  }

  async getUsers() {
    await API.getAllUsers().then((res) => {
      const users = res.data;
      this.setState({
        allUsers: users,
      });
    });
  }

  async componentDidMount() {
    this.getUsers();
  }

  async deleteUser(idUser) {
    await API.deleteUser(idUser).then((res) => {
      console.log(res.data);
      this.setState({ message: "Pomyślnie usunięto użytkownika" });
      this.getUsers();
    });
  }

  render() {
    console.log(this.state.allUsers);
    const { allUsers } = this.state;
    return (
      <>
        <h1>Użytkownicy</h1>
        <Link to="users/add">
          <button id="buttonAdd" className="ml-auto mt-5">
            Dodaj
          </button>
        </Link>
        {this.state.message && (
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        )}
        <div
          className="table-responsive table mt-2"
          id="dataTable"
          role="grid"
          aria-describedby="dataTable_info"
        >
          <table id="dataTable" className="table my-0 inventory">
            <thead>
              <tr>
                <th>ID</th>
                <th>LOGIN</th>
                <th>IMIĘ</th>
                <th>NAZWISKO</th>
                <th>ROLE</th>
                <th>AKCJE</th>
              </tr>
            </thead>
            <tbody>
              {allUsers &&
                allUsers.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.login}</td>
                      <td>{user.name}</td>
                      <td>{user.surname}</td>
                      <td>
                        {user.role === 2
                          ? "Administrator"
                          : user.role === 0
                          ? "Lab Technik"
                          : "Użytkownik"}
                      </td>
                      <td className="operation">
                        <button
                          onClick={this.deleteUser.bind(this, user.id)}
                          id="buttonScrap"
                        >
                          Usuń
                        </button>
                        <button id="buttonEdit">Edytuj</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Users;
