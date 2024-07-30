import React from 'react';
import './serviceStatusCard.css';
import axios from 'axios';

const ServiceStatusCard = ({ booking,setActiveBookings, setCancelledBookings }) => {
  const { booking_id, customer, agent, utility, schedule_date, scheduled_time, status, updated_at} = booking;
  const imageUrl = utility.pictures;
  const price=utility.price;
  function cancelBooking() {
    axios.delete(`http://localhost:8585/cancel/${booking_id}`)
    .then(response => {
      const { message, deleted } = response.data;
      console.log(response.data);
      if (deleted) {
          setActiveBookings(prevState => prevState.filter(booking => booking.booking_id !== booking_id));
          booking.status = 'cancelled';
          setCancelledBookings(prevState => [booking, ...prevState]);
          alert(`Success: ${message}`);
      } else {
        alert(`Failed: ${message}`);
      }
    })
    .catch(error => {
      console.error('There was an error cancelling the booking:', error);
      alert('An error occurred while cancelling the booking. Please try again later.');
    });
 }
  return (
    <div className="service-status-card">
        <div className="service-status-card-image">
          <img src={imageUrl} alt={utility.name} />
        </div>
        <div className="service-status-card-info">
          <div className="service-status-card-section">
            <small>Customer Name: </small><strong>{`${customer.first_name} ${customer.last_name}`}</strong>
          </div>
          <div className="service-status-card-section">
            <small>Agent Name: </small><strong>{`${agent.first_name} ${agent.last_name}`}</strong>
          </div>
          <div className="service-status-card-section">
            <small>Utility Name: </small><strong>{utility.name}</strong>
          </div>
          <div className="service-status-card-section">
            <small>Schedule Date & Time: </small><strong>{`${schedule_date} ${new Date(scheduled_time).toLocaleTimeString()}`}</strong>
          </div>
        <div className="service-status-card-section">
            <small>Price: ₹</small><strong>{price}</strong>
        </div>
          {status === 'pending' ? (
            <div className="service-status-card-section">
              <button className="service-status-card-cancel-button" onClick={cancelBooking}>Cancel</button>
            </div>
          ):(
            <div className="service-status-card-section">
              <small>Cancelled at: </small><strong>{new Date(updated_at).toLocaleString()}</strong>
            </div>
          )}
        </div>
    </div>
  );
};

export default ServiceStatusCard;
