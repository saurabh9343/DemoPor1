import React from 'react'

import { Link,  useNavigate } from "react-router-dom";

const AdminHeader = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminData");
    alert("Admin logged out successfully!");
    navigate("/admin/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/admin/dashboard">Admin Panel</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/users">Users</Link>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-danger">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AdminHeader
