import React from 'react';
import './aboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="container">
      <div className="card" data-message="Hover message for card 1">
        <h2>Guidance</h2>
        <p>We provide guidance to basic vehicle problems</p>
      </div>
      <div className="card" data-message="Hover message for card 2">
        <h2>Finding nearest mechanic</h2>
        <p>We make sure to provide u the nearest mechanic according to your category</p>
      </div>
      <div className="card" data-message="Hover message for card 3">
        <h2>Appointment booking</h2>
        <p>A booking appointment system is available</p>
      </div>
      <div className="card" data-message="Hover message for card 4">
        <h2>Service reminder</h2>
        <p>Provide vehicle service reminders to keep you updated with vehicle maintainance</p>
      </div>
      <button>Join Us</button>
      <p>The above services are provided by our Vehicle Repairo mobile application. Join us today with our company to make the company and your life!!!</p>
    </div>
  );
}

export default AboutUs;
