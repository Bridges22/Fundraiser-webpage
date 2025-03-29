import React from 'react';
import './Header.css'; // Ensure the file name matches exactly (all lowercase)

function Header() {
  return (
    <div className="header-container">
      <header className="hero-section">
        <h1>Support My Journey to Bible School</h1>
        <p>
          My name is Bridges Mwashighadi, and I come from Kenya. I am on a mission to deepen my faith and serve my community through biblical education at Summit International School of Ministry in Grantville, Pennsylvania. This journey is about more than just my personal growth, it’s about being equipped to uplift others, share the love of Jesus, and bring hope to those in need.
        </p>
        <h3>How Your Donation Helps</h3>
        <p>
          I am raising $30,000 to cover the full cost of my two-year program at Summit. This is how the funds will be used:
        </p>
        <p>
          Tuition & Student Housing (1st Year): $8,925, Tuition & Student Housing (2nd Year): $8,925, Plane Ticket to the U.S.: $1,500, Plane Ticket back to Kenya: $1,500, Food & Basic Living Expenses: $3,500, Visa & Travel Documents: $2,000, School & Study Materials, Additional Expenses: $3,650
        </p>
        <h3>Join Me on This Journey!</h3>
        <p>
          Your generosity doesn’t just support my education, it helps plant seeds of hope, faith, and transformation in many lives. If you feel led to give, know that your support will make an eternal impact.
        </p>
        <a href="#donate-section" className="cta-button">Donate Now</a>

      </header>
    </div>
  );
}

export default Header;
