import React from 'react';
import './Header.Css';  // Optional: create a separate CSS file for header-specific styles

function Header() {
  return (
    <header className="hero-section">
      <h1>Please Support My Journey to Bible School</h1>
      <p> My name is Bridges Mwshighadi I come from kenya and  I am on a mission to depeen my faith and serve my community through biblical education in Summit International School of Ministry. Your contribution helps me fulfill my calling to deepen my faith and serve my community through biblical education. Your support can transform my dreams into reality!</p>
      <p>
        Your donation equips me with the knowledge and tools to uplift others and share the message of love and hope. Every contribution not only aids my education but also sows seeds of positive change within our community. Together, we can inspire and mentor those in need, spreading compassion and understanding far and wide.
      </p>
      <p>
        Join me in this journey of faith and transformation. Your generosity will help fulfill my calling and touch countless lives. Together, we can create a brighter future!
      </p>
      <a href="#donate-section" className="cta-button">Donate Now</a>
    </header>
  );
}

export default Header;

