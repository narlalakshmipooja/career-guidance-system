import React from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Admin Login</h2>

      <input type="text" placeholder="Enter Username" />
      <br /><br />

      <input type="password" placeholder="Enter Password" />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;