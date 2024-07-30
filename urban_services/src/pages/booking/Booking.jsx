import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { CustomerContext } from "../../contexts/CustomerContext";
import { PlaceContext } from "../../contexts/PlaceContext";
import "./booking.css";
import BookingImage from "../../assets/booking_time_date_cleanup-removebg_enchanced.png";
import axios from "axios";
import moment from 'moment';

function Booking() {
  const { customer } = useContext(CustomerContext);
  const { place } = useContext(PlaceContext);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const location = useLocation();
  const { utility_id, utility_name, utility_price, utility_picture } =
    location.state || {};

  if (!customer) {
    return <div>Please log in to book a service.</div>;
  }

  const clearForm = () => {
    setDate("");
    setTime("");
  };

  function goToMyBooking() {}

  // Function to format date
const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
};

// Function to format date and time
const formatDateTime = (date, time) => {
  const combined = `${date}T${time}`;
  return moment(combined).toISOString();
};

  const handleBooking = async (e) => {
    e.preventDefault();
    // Handle booking logic here
    const data = {
      utilities_id: utility_id,
      customer_id: customer.customer_id,
      booking_date: formatDate(new Date()),
      scheduled_date: formatDate(date),
      scheduled_time: formatDateTime(date, time),
      place: place,
    };
    try {
      const response = await axios.post("https://smart-utility-services.adarshrajpathak.dev/booking/add", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      e.target.reset();
      if (response.data.booking) {
        alert(`Service booked for ${date} at ${time}`);
        goToMyBooking();
      } else {
        alert("Service Booking failed");
      }
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
      alert("An error occurred during booking");
    }
    clearForm();
    e.target.reset();
  };

  return (
    <div className="container-booking">
      <div className="booking-image">
        <img src={BookingImage} alt="booking" height="500px" width="500px" />
      </div>
      <div className="booking-container">
        <h1>Book a Service</h1>
        <div
          className="booking-header"
          style={{
            backgroundImage: `url(${utility_picture})`,
            height: "100px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "inline-block",
              lineHeight: "1.5rem",
              color: "white",
            }}
          >
            {utility_name}
          </p>
          <br />
          <p
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "inline-block",
              lineHeight: "1.3rem",
              color: "white",
            }}
          >
            Price: ₹{utility_price} /-
          </p>
        </div>
        <form onSubmit={handleBooking} className="booking-form">
          <div className="form-group">
            <label>Enter date for service</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Enter time for service</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="booking-button">
            Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
