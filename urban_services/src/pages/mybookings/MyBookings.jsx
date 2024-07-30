import React from 'react';
import './myBookings.css';
import { useContext, useState, useEffect } from 'react';
import { CustomerContext } from '../../contexts/CustomerContext';
import axios from 'axios';
import ServiceStatusCard from '../../components/serviceStatusCard/ServiceStatusCard';

function MyBookings() {
  const { customer } = useContext(CustomerContext);
  const [activeBookings, setActiveBookings] = useState([]);
  const [cancelledBookings, setCancelledBookings] = useState([]);

  useEffect(() => {
    if (customer) {
      // Fetch active bookings
      axios.get(`http://localhost:8585/mybookings-active/${customer.customer_id}`)
        .then(response => {
          setActiveBookings(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the active bookings!', error);
        });

      // Fetch cancelled bookings
      axios.get(`http://localhost:8585/mybookings-cancelled/${customer.customer_id}`)
        .then(response => {
          setCancelledBookings(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the cancelled bookings!', error);
        });
      }
    }, [customer]);

    if (!customer) {
      return <div>Please log in to display your Booking :)</div>;
    }
    return (
      <div className="my-bookings-container">
      <h1>My Bookings</h1>
      <hr></hr>
      <div className="bookings-sections">
        <div className="bookings-section active-bookings">
          <h2>Active Bookings</h2>
          <div className="bookings-list">
            {/* Active bookings will be displayed here */}
            {activeBookings.map(booking => (
              <ServiceStatusCard key={booking.booking_id} booking={booking} setActiveBookings={setActiveBookings} setCancelledBookings={setCancelledBookings}/>
            ))}
          </div>
        </div>
        <div className="bookings-section cancelled-bookings">
          <h2>Cancelled Bookings</h2>
          <div className="bookings-list">
            {/* Cancelled bookings will be displayed here */}
            {cancelledBookings.map(booking => (
              <ServiceStatusCard key={booking.booking_id} booking={booking} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
