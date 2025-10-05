











// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleVerify = async (userId) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/verify/${userId}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/delete/${userId}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderTable = (role) => {
    const filtered = users.filter(user => user.role === role);

    if (filtered.length === 0) return <p>No {role}s found.</p>;

    return (
      <table border="1" cellPadding="10" style={{ width: "100%", marginBottom: "30px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {role === "student" && <th>Roll No</th>}
            {role === "staff" && <th>Designation</th>}
            {role === "alumni" && <th>Batch</th>}
            <th>Verified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {role === "student" && <td>{user.rollNo}</td>}
              {role === "staff" && <td>{user.designation}</td>}
              {role === "alumni" && <td>{user.batch}</td>}
              <td>{user.verified ? "Yes" : "No"}</td>
              <td>
                {!user.verified && <button onClick={() => handleVerify(user._id)}>Verify</button>}
                <button onClick={() => handleDelete(user._id)} style={{ marginLeft: "10px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      <h3>Students</h3>
      {renderTable("student")}

      <h3>Staff</h3>
      {renderTable("staff")}

      <h3>Alumni</h3>
      {renderTable("alumni")}
    </div>
  );
};

export default AdminDashboard;
