import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/menu.css';

function Menu() {
  const specials = [
    { day: 'Monday', desc: 'Vegetarian Monday - 20% off all veggie dishes' },
    { day: 'Wednesday', desc: 'Coffee Ceremony - Complimentary with any main course' },
    { day: 'Friday', desc: 'Fish Friday - Fresh catch with special preparation' },
    { day: 'Sunday', desc: 'Family Feast - Large combo platters for sharing' },
  ];

  const appetizers = [
    { name: 'Sambusa', price: '$8', desc: 'Crispy pastries filled with lentils or meat', img: '/images/sambusa.jpg' },
    { name: 'Kitfo', price: '$15', desc: 'Spicy Ethiopian-style steak tartare with spices', img: '/images/kitfo.jpg' },
    { name: 'Timatim Salad', price: '$7', desc: 'Spicy fresh tomato and onion salad with jalapeños', img: '/images/timatim.jpg' },
  ];

  const categories = [
    { name: 'Vegan', desc: 'Plant-based delights', img: '/images/vegan.jpg', link: '#vegan' },
    { name: 'Non-Vegan', desc: 'Meat & poultry dishes', img: '/images/kitfo.jpg', link: '#non-vegan' },
    { name: 'Beverages', desc: 'Refreshing drinks', img: '/images/coffee.jpg', link: '#beverages' },
    { name: 'Extras', desc: 'Sides & more', img: '/images/injera.jpg', link: '#extras' },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="menu-hero">
        <div className="hero-inner">
          <h1>Our Menu</h1>
          <p>Explore our delicious categories below.</p>
        </div>
      </section>

      {/* Today's Special */}
      <section className="todays-special">
        <h2>Today's Special</h2>
        <div className="special-grid">
          {specials.map((special, idx) => (
            <div key={idx} className="special-box">
              <h3>{special.day}</h3>
              <p>{special.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appetizers */}
      <section className="appetizers">
        <h2>Appetizers</h2>
        <div className="appetizer-grid">
          {appetizers.map((app, idx) => (
            <div key={idx} className="app-item">
              <img src={app.img} alt={app.name} />
              <h3>{app.name}</h3>
              <p>{app.price}</p>
              <p>{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Categories */}
      <section className="menu-section">
        <h2>Menu Categories</h2>
        <div className="menu-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="menu-box">
              <img src={cat.img} alt={cat.name} />
              <div className="menu-content">
                <h2>{cat.name}</h2>
                <p>{cat.desc}</p>
                <a href={cat.link} className="cta">View Items</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Menu;
