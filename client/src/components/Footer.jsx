import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <>
      <section className="contact_us">
        <h3>Contact</h3>
        <div>
          <ul>
            <li>📍 161 Linden Avenue, London</li>
            <li>📞 301-382-4311, 301-461-9671</li>
            <li>✉️ info@hagerbet.com</li>
            <li>
              &#x2022;<a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              ><i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              &#x2022;<a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>
      <br />
      <footer>
        <p>&copy; 2025 Hager Bet Restaurant. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
