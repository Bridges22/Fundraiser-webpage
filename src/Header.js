import React from 'react';
import './Header.Css';  // Optional: create a separate CSS file for header-specific styles

function Header() {
  return (
    <header className="hero-section">
      <h1>Support My Journey to Bible School</h1>
      <p>Your contribution helps me fulfill my calling</p>
      <p>
        I am on a mission to deepen my faith and serve my community through biblical education. Your support can transform my dreams into reality!
      </p>
      <h3>Why Your Support Matters:</h3>
      <ul>
        <li><strong>Empower Change:</strong> Your donation equips me with the knowledge and tools to uplift others and share the message of love and hope.</li>
        <li><strong>Create Impact:</strong> Every contribution not only aids my education but also sows seeds of positive change within our community.</li>
        <li><strong>Join a Purposeful Journey:</strong> Together, we can inspire and mentor those in need, spreading compassion and understanding far and wide.</li>
      </ul>
      <h3>Make a Difference Today</h3>
      <p>
        Join me in this journey of faith and transformation. Your generosity will help me fulfill my calling and touch countless lives. Together, we can create a brighter future!
      </p>
      <a href="#donate-section" className="cta-button">Donate Now</a>
    </header>
  );
}

export default Header;

