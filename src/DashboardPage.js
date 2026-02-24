import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h1>Student Dashboard</h1>

        <button className="btn" onClick={() => navigate("/booking")}>
          Book Counseling Session
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;