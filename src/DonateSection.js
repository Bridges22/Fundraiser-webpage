import React from 'react';

function DonateSection() {
  return (
    <section id="donate-section" className="donate-section">
      <h2>How You Can Help</h2>
      <p>Your generosity is key in making this journey possible!</p>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="YOUR_PAYPAL_BUTTON_ID" />
        <input type="submit" value="Donate via PayPal" />
      </form>
    </section>
  );
}

export default DonateSection;

