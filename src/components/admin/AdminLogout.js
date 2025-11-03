import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("adminData");
    alert("Admin logged out successfully!");
    navigate("/admin/login");
  }, [navigate]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        color: "white",
        backgroundColor: "#212529",
        padding: "40px",
        borderRadius: "10px",
        width: "50%",
        margin: "100px auto",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
      }}
    >
      <h3>Logging out admin...</h3>
    </div>
  );
};

export default AdminLogout;
