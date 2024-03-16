import React from "react";
import "./home.css";
import { Button } from '@chakra-ui/react';

const HomePage = () => {
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
          <i>
            <h2>Let's redefine car care together!</h2>
          </i>
        </p><br></br>
        <Button colorScheme='blue' size="lg">About Us</Button>

      </div>
    </div>
  );
};

export default HomePage;
