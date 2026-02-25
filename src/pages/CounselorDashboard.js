import React from "react";

function CounselorDashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Counselor Dashboard</h2>

      <p>View Student Bookings</p>

      <button>Approve</button>
      <button style={{ marginLeft: "10px" }}>Reject</button>
    </div>
  );
}

export default CounselorDashboard;