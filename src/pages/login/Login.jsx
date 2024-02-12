import React, { useState } from "react";

export const Login = (props) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email);
  
    props.onLogin({ email: Email, password: Password });
  }

  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <div className="switch-container">
            <p>Don't have an account?<button onClick={() => props.onFormSwitch('Signup')}> SIGN UP</button></p>
          </div>
          <div className="heading-container">
            <p><h2><b>Welcome to Vehicle Repairo!</b></h2></p>
            <div className="word-container">
              <p>Register your account</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="body-container">
                <p><label htmlFor="Email">Email</label></p>
                <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" id="Email" name="Email"/>
                <p><label htmlFor="Password">Password</label></p>
                <input value={Password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="************" id="Password" name="Password"/>
              </div>
              <div className="submit-container">
                <p><button type="submit">Login</button></p>
              </div>
            </form>
          </div>
        </div>
        <div className="image-section">
          <img src="/webLogin.jpg" alt="webLogin" style={{ width: "750px", height: "750px" }} />
        </div>
      </div>
    </>
  )
};
