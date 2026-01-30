import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/home.css';

function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to the taste of Ethiopia</h2>
        <h1>HAGER BET RESTAURANT</h1>
        <p>
          Experience authentic Ethiopian dishes, vegan options, and traditional
          coffee ceremonies in the heart of the city.
        </p>
        <Link to="/reservations"><button>MAKE A RESERVATION</button></Link>
      </section>

      {/* About Us Preview */}
      <section className="about">
        <h3>Discover Tradition</h3>
        <h2>ABOUT US</h2>
        <div className="about-content">
          <img src="/images/food.jpg" alt="Ethiopian Food" />
          <div className="about-box">
            <h4>Our Heritage</h4>
            <h2>TRADITION & HOSPITALITY</h2>
            <p>
              At Hager Bet, we bring Ethiopia's rich culture to your table with
              traditional recipes, warm hospitality, and a modern touch.
            </p>
            <Link to="/about"><button>READ MORE</button></Link>
          </div>
          <img src="/images/coffee.jpg" alt="Coffee Ceremony" />
        </div>
      </section>

      {/* Specials */}
      <section className="specials">
        <img src="/images/b.jpg" alt="kitfo" />
        <div className="specials-text">
          <h3>Our Signature Dishes</h3>
          <h2>OUR SPECIALS</h2>
          <div className="menu-item">
            <p>Doro Wot (Chicken Stew)</p>
            <span>$15</span>
          </div>
          <div className="menu-item">
            <p>Misir Wot (Vegan Lentils)</p>
            <span>$12</span>
          </div>
          <div className="menu-item">
            <p>Kitfo (Minced Beef)</p>
            <span>$18</span>
          </div>
          <div className="menu-item">
            <p>Vegetarian Combination</p>
            <span>$14</span>
          </div>
          <div className="menu-item">
            <p>Tibs (Sautéed Meat)</p>
            <span>$16</span>
          </div>
          <Link to="/menu"><button>VIEW MENU</button></Link>
        </div>
      </section>
      <br /><br />

      <Footer />
    </>
  );
}

export default Home;
