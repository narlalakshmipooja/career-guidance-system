import React from "react";

function BookingPage() {
  return (
    <div className="container">
      <div className="card">
        <h1>Career Guidance System</h1>
        <h2>Book Counseling Session</h2>

        <div className="form-group">
          <label>Select Date</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Select Time</label>
          <input type="time" />
        </div>

        <button
          className="btn"
          onClick={() => alert("Your counseling session is booked successfully!")}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default BookingPage;