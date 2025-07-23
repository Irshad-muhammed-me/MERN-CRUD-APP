import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    console.log("API_URL:", API_URL); // Debug: Check API URL
    axios
      .get(`${API_URL}/`)
      .then((result) => {
        console.log("Fetched users:", result.data); // Debug: See fetched data
        setUsers(result.data);
      })
      .catch((err) => {
        console.log("Fetch error:", err); // Debug: See error
      });
  }, [API_URL]);

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/deleteUser/` + id)
      .then((res) => {
        console.log("Delete response:", res);
        // Remove deleted user from state instead of reloading the page
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((err) => console.log("Delete error:", err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-75">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title bg-dark text-white p-3 rounded-top">
              <div className="row">
                <div className="col-sm-4">
                  <h2>
                    Manage <b>Employees</b>
                  </h2>
                </div>
                <div className="col-sm-8 text-end">
                  <Link to="/create" className="btn btn-success">
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Employee</span>
                  </Link>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="4">No users found.</td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                        <Link
                          to={`/update/${user._id}`}
                          className="btn btn-warning me-2"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
