import React, { useState } from "react";
import { Login } from "./pages/login/Login.jsx";
import { Signup } from "./pages/signup/Signup.jsx";
import HomePage from "./pages/home/home.jsx"; 
import Navbar from "./pages/Navbar/Navbar.jsx";
import ServiceCompletion from "./pages/servicecompletion/Service.jsx";
import Appointments from "./pages/appointments/appointments.jsx";
import Profile from "./pages/profile/profile.jsx";
import "./App.css";
import "./pages/Navbar/Navbar.css";

const App = () => {
  const [currentForm, setCurrentForm] = useState("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormSwitch = (form) => {
    setCurrentForm(form);
  };

  const handleSignup = (formData) => {
    console.log("Signup form data:", formData);
    setIsLoggedIn(true); 
    setCurrentForm("Home"); 
  };

  const handleLogin = (formData) => {
    console.log("Login form data:", formData);
    setIsLoggedIn(true); 
    setCurrentForm("Home");
  };

  let mainComponent;
  let showNavbar = true;

  switch (window.location.pathname) {
    case "/home":
      mainComponent = <HomePage />;
      break;
    case "/Service":
      mainComponent = <ServiceCompletion />;
      break;
    case "/appointments":
      mainComponent = <Appointments />;
      break;
    case "/profile":
      mainComponent = <Profile />;
      break;
    default:
      mainComponent = isLoggedIn ? <HomePage /> : 
        currentForm === "Login" ? 
        <Login onFormSwitch={handleFormSwitch} onLogin={handleLogin} /> : 
        <Signup onFormSwitch={handleFormSwitch} onSignup={handleSignup} />;
      showNavbar = isLoggedIn;
  }

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      {mainComponent}
    </div>
  );
};

export default App;
