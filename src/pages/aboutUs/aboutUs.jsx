import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="card" data-message="Hover message for card 1">
        <h2>Card 1</h2>
        <p>This is the content of card 1.</p>
      </div>
      <div className="card" data-message="Hover message for card 2">
        <h2>Card 2</h2>
        <p>This is the content of card 2.</p>
      </div>
      <div className="card" data-message="Hover message for card 3">
        <h2>Card 3</h2>
        <p>This is the content of card 3.</p>
      </div>
      <div className="card" data-message="Hover message for card 4">
        <h2>Card 4</h2>
        <p>This is the content of card 4.</p>
      </div>
      <button>Click Me</button>
      <p>This is a paragraph.</p>
    </div>
  );
}

export default AboutUs;
