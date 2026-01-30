import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { reviewsAPI } from '../utils/api';
import '../styles/review.css';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    message: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const response = await reviewsAPI.getAll();
      setReviews(response.data.data || []);
    } catch (error) {
      console.error('Error loading reviews:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStarClick = (star) => {
    setFormData(prev => ({
      ...prev,
      rating: star
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message || formData.rating === 0) {
      setMessage('Please fill in all fields and select a rating');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await reviewsAPI.create(formData);
      setMessage(response.data.message || 'Review submitted successfully!');
      setFormData({
        name: '',
        rating: 0,
        message: '',
      });
      await loadReviews();
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error submitting review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="review-hero">
        <h1>Customer Reviews</h1>
        <p>Share your experience at Hager Bet</p>
      </section>

      <section className="review-form-section">
        <form id="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Rating:</label>
            <div id="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  data-value={star}
                  className={formData.rating >= star ? 'selected' : ''}
                  onClick={() => handleStarClick(star)}
                  style={{ cursor: 'pointer', fontSize: '24px' }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'SUBMIT REVIEW'}
          </button>

          {message && <p className="message">{message}</p>}
        </form>
      </section>

      <section id="reviews-list" className="reviews-list">
        <h2>Recent Reviews</h2>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review._id} className="review-card">
              <img src="/images/default-user.jpg" alt={review.name} />
              <div className="review-content">
                <h3>{review.name}</h3>
                <div className="stars">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
                <p>{review.message}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Review;
