import React, { useState } from 'react';
import './App.css';
import Header from './Header';  // Import Header component

function App() {
  const [donationAmount, setDonationAmount] = useState('');
  const [totalRaised, setTotalRaised] = useState(0);
  const fundraisingGoal = 30000;

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(donationAmount);
    if (amount > 0) {
      setTotalRaised(totalRaised + amount);
      setDonationAmount('');
      alert(`Thank you for your donation of $${amount}!`);
    } else {
      alert('Please enter a valid donation amount.');
    }
  };

  return (
    <div className="App">
      <Header />  {/* Include the Header component */}
      
      {/* Grid container for 2x2 layout */}
      <div className="container"> {/* Added container div */}
        <section id="donate-section" className="donate-section">
          <h2>How You Can Help</h2>
          <p>Your generosity is the heartbeat of this journey! Every contribution brings me one step closer to my dreams and makes a lasting impact. Thank you for being a part of this meaningful endeavor!</p>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="WKH6BBL25TPSY" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal" />
            <img alt="" border="0" src="https://www.paypal.com/en_KE/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </section>

        <section className="progress-section">
          <h2>Fundraising Progress</h2>
          <progress max={fundraisingGoal} value={totalRaised}></progress>
          <p>${totalRaised} of ${fundraisingGoal} raised ({((totalRaised / fundraisingGoal) * 100).toFixed(2)}%)</p>
        </section>

        <section className="about-section">
          <h2>About Me</h2>
          <p>Life has presented me with many challenges, but through it all, I have held onto faith and the belief that God has a greater plan for me. Growing up in difficult circumstances, I’ve experienced hardships that have shaped my desire to make a meaningful difference—not only in my own life but also in the lives of others.

Despite the struggles I’ve faced, I’ve always been driven by the goal of contributing to my community and society as a whole. I believe education is the key to unlocking that potential. That’s why I am committed to pursuing my studies at Summit, where I can gain the knowledge and skills needed to create lasting change.

This journey isn’t just about my personal growth—it’s about being equipped to give back, to uplift those who feel forgotten, and to inspire hope in others who are going through tough times. I want to be a part of building a better, more compassionate society, and I believe this program will help me do that.

I am fundraising because, while my determination is strong, the financial burden is more than I can manage on my own. Your support, whether through donations or prayers, will help make this dream possible. Every contribution will bring me closer to realizing my goal of serving others and creating a brighter future for my community.

Thank you for believing in my vision and for walking with me on this journey. Your kindness truly makes a difference.
          </p>
        </section>

        <section className="contact-section">
          <h2>Contact Me</h2>
          <p>Email: bridgesmwashighadi2@gmail.com</p>
          
          <h3> Share This Campaign!</h3>
          <p>Help Spread the word by sharing this campaign with your friends</p>
          
          <div className="share-buttons">
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Share on Facebook
    </a>
    <a
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out this fundraising campaign!`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Share on Twitter
    </a>
    <a
      href={`https://api.whatsapp.com/send?text=Check out this fundraising campaign: ${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Share on WhatsApp
    </a>
  </div>
        </section>
      </div> 
    </div>
  );
}

export default App;
