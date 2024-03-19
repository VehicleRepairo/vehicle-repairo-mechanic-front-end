import React from "react";
import "./aboutUs.css";



const AboutUs = () => {
  return (
    <div className="container">
      <h1>What we offer</h1>
      <div className="card" data-message="Hover message for card 1">
        <h2>Guidance</h2>
        <img src="/wrench.png" />
        <p>We provide guidance to basic vehicle problems</p>
      </div>
      <div className="card" data-message="Hover message for card 2">
        <h2>Finding nearest mechanic</h2>
        <img src="/wrench.png" />
        <p>
          We make sure to provide u the nearest mechanic according to your
          category
        </p>
      </div>
      <div className="card" data-message="Hover message for card 3">
        <h2>Appointment booking</h2>
        <img src="/wrench.png" />
        <p>A booking appointment system is available</p>
      </div>
      <div className="card" data-message="Hover message for card 4">
        <h2>Service reminder</h2>
        <img src="/wrench.png" />
        <p>
          Provide vehicle service reminders to keep you updated with vehicle
          maintainance
        </p>
      </div>
      <div className="bottom-container">
        <p className="descrip">
          The above services are provided by our Vehicle Repair mobile
          application.<br></br> Join us today with our company to make the
          company and your life better!
        </p>
      </div>
    </div>
  );
};


export default AboutUs;
