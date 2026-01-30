import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { reservationsAPI } from '../utils/api';
import '../styles/reservation.css';

function Reservation() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    reservationDate: '',
    reservationTime: '',
    guests: 1,
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await reservationsAPI.create(formData);
      setMessage(response.data.message || 'Reservation successful!');
      setFormData({
        customerName: '',
        customerEmail: '',
        reservationDate: '',
        reservationTime: '',
        guests: 1,
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error creating reservation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="reservation-hero">
        <h1>Make a Reservation</h1>
        <p>Book your table at Hager Bet</p>
      </section>

      <section className="reservation-form-section">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="customerName">Name:</label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="customerEmail">Email:</label>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reservationDate">Date:</label>
              <input
                type="date"
                id="reservationDate"
                name="reservationDate"
                value={formData.reservationDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reservationTime">Time:</label>
              <input
                type="time"
                id="reservationTime"
                name="reservationTime"
                value={formData.reservationTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'RESERVE TABLE'}
            </button>

            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Reservation;
