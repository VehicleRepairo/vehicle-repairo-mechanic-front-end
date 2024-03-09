import React from "react";
import "./home.css";

const HomePage = () => {
  return (
    
      <div className="home-container">
        <div className="image-container">
          <img src="/Web_mech.jpg" alt="webMech" style={{ width: '800px', height: '500px' }} />
        </div>
        <div className="content-container">
          <p>
            <strong>Welcome to Vehicle Repairo</strong>
          </p>
          <p> 
            Join our platform to showcase your expertise,<br />
            accept appointments, and receive feedback <br />
            from vehicle owners. Be part of a community<br />
            committed to delivering exceptional automotive service.
          </p>
          <br />
          <p><i><h3>Let's redefine car care together!</h3></i></p>
        </div>
      </div>
  );
};

export default HomePage;
