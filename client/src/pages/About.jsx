import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/about.css';

function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">
        <h1>About Hager Bet</h1>
        <p>Discover our heritage and passion</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Hager Bet, which means "House of Mother" in Amharic, was founded with a vision to bring
            authentic Ethiopian cuisine and culture to the heart of the city. Our restaurant celebrates
            the rich traditions of Ethiopian hospitality and culinary excellence.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide an authentic Ethiopian dining experience that honors our heritage while
            embracing modern hospitality. We believe in serving fresh, traditional dishes prepared
            with care and passion.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our dedicated team brings years of culinary experience and a genuine love for Ethiopian
            cuisine. We are committed to making every visit to Hager Bet a memorable experience.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
