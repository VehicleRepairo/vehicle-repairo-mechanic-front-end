import React from "react";
import "./aboutUs.css";



const AboutUs = () => {
  return (
    <div className="container">
      <h1>What we offer</h1>
      <div className="cards">
        <div className="card" data-message="Hover message for card 1">
          <h4>Guidance</h4>
          <img src="/wrench.png" />
          <p>We provide guidance to basic vehicle problems</p>
        </div>
        <div className="card" data-message="Hover message for card 2">
          <h4>Finding nearest mechanic</h4>
          <img src="/wrench.png" />
          <p>
            We make sure to provide u the nearest mechanic according to your
            category
          </p>
        </div>
        <div className="card" data-message="Hover message for card 3">
          <h4>Appointment booking</h4>
          <img src="/wrench.png" />
          <p>A booking appointment system is available</p>
        </div>
        <div className="card" data-message="Hover message for card 4">
          <h4>Service reminder</h4>
          <img src="/wrench.png" />
          <p>
            Provide vehicle service reminders to keep you updated with vehicle
            maintainance
          </p>
        </div>
      </div>      
      <div className="bottom-container">
        <p className="descrip">
        Discover the multitude of services offered by our innovative Vehicle Repair mobile application, designed to streamline your automotive maintenance needs effortlessly. Join our esteemed company today and embark on a journey towards enhancing both the company's success and your personal fulfillment.  </p>      </div>
    </div>
  );
};


export default AboutUs;
