import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>

        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>

        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;