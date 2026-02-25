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

<br /><br />

<h4>Select Role</h4>

<button onClick={() => navigate("/student-login")}>
  Student
</button>

<button 
  onClick={() => navigate("/counselor-login")} 
  style={{ marginLeft: "10px" }}
>
  Counselor
</button>

<button 
  onClick={() => navigate("/admin-login")} 
  style={{ marginLeft: "10px" }}
>
  Admin
</button>
      </div>
    </div>
  );
}

export default LoginPage;