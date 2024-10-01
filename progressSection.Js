import React, { useState } from 'react';

function ProgressSection() {
  const [progress, setProgress] = useState(0); // Start with 0%

  return (
    <section className="progress-section">
      <h2>Fundraising Progress</h2>
      <progress max="100" value={progress}></progress>
      <p>{progress}% of $30,000 raised</p>
    </section>
  );
}

export default ProgressSection;
