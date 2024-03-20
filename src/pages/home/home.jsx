import React from "react";
import "./home.css";
import { Button } from '@chakra-ui/react';

const HomePage = () => {
  const handleButtonClick = () => {
    window.location.href = '/aboutUs'; // Redirect to the signup page when the button is clicked
  };

  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content-container">
        <p>
          <strong>Welcome to Vehicle Repairo</strong><br></br>
        </p>
        <p>
          Join our platform to showcase your expertise,
          accept appointments, and receive feedback <br />
          from vehicle owners. Be part of a community<br />
          committed to delivering exceptional automotive service.
        </p>
        <br />
        <p>
          {/* Use Chakra UI Button component for the button */}
          <Button colorScheme="blue" onClick={handleButtonClick}>About Us</Button>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
