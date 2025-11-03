import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center bg-dark text-light p-3 rounded mb-4 shadow">
        <h3 className="fw-bold text-uppercase mb-0">Users List</h3>
      </div>

      <div className="table-responsive shadow rounded">
        {users.length === 0 ? (
          <p className="text-center text-secondary fs-5">No users found.</p>
        ) : (
          <table className="table table-striped table-hover  rounded">
            <thead className="table-secondary text-dark">
              <tr>
                <th className="text-center">#</th>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td className="text-break">{user.id}</td>
                  <td>{user.name || "N/A"}</td>
                  <td>{user.email || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Users;
