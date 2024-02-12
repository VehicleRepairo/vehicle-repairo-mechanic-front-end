import React, { useState } from "react";

export const Signup = (props) => {
  const [Name, setName] = useState('');
  const [Contact, setContact] = useState('');
  const [Category, setCategory] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { Name, Contact, Category, Email, Password };
    props.onSignup(formData);
  }

  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <div className="switch-container">
            <p>Already have an account?<button onClick={() => props.onFormSwitch('Login')}>LOGIN</button></p>
          </div>
          <div className="heading-container">
            <p><b><h1>Welcome to Vehicle Repairo!</h1></b></p>
            <div className="word-container">
              <p>Register your account</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="body-container">
                <p><label htmlFor="Name">Name</label></p>
                <input value={Name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" id="Name" name="Name"/>
                <p><label htmlFor="Contact">Contact</label></p>
                <input value={Contact} onChange={(e) => setContact(e.target.value)} type="tel" placeholder="Enter your contact number" id="Contact" name="Contact"/>
                <p><label htmlFor="Email">Email</label></p>
                <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" id="Email" name="Email"/>
                <p><label htmlFor="Password">Password</label></p>
                <input value={Password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="************" id="Password" name="Password"/>
                <p><label htmlFor="Category">Category</label></p>
                <select value={Category} onChange={(e) => setCategory(e.target.value)} id="Category" name="Category">
                  <option value="">Select your category</option>
                  <option value="vehicle service">Vehicle Service</option>
                  <option value="vehicle inspection">Vehicle Inspection</option>
                  <option value="tyre replacement">Tyre Replacement</option>
                  <option value="tyre repair">Tyre Repair</option>
                  <option value="vehicle wash">Vehicle Wash</option>
                </select>
              </div>
              <p><button type="submit">Sign up</button></p>
            </form>
          </div>
        </div>
        <div className="image-section">
          <img src="/webLogin.jpg" alt="webLogin" />
        </div>
      </div>
    </>
  )
};
