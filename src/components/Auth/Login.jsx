import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import useLogin from "../../hooks/useLogin";
import "./App.css";

export const Login = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(inputs);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="heading-container">
          <h2>
            <b>Welcome to Vehicle Repairo!</b>
          </h2>
          <p className="login">Register your account</p>
          <form onSubmit={handleSubmit}>
            <div className="body-container">
              <p>
                <label htmlFor="Email" className="label">
                  Email
                </label>
              </p>
              <Input
                marginTop={2}
                marginBottom={3}
                placeholder="Email"
                fontSize={15}
                type="email"
                size={'lg'}
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
              <p>
                <label htmlFor="Password">Password</label>
              </p>
              <Input
                marginTop={2}
                placeholder="Password"
                fontSize={15}
                size={'lg'}
                type="password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div className="submit-container">
              <Button
                textColor={"white"}
                colorScheme="#1D2B78"
                marginTop={10}
                isLoading={loading}
                onClick={() => login(inputs)}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="image-section">
        <img
          src="/login.jpg"
          alt="webLogin"
          // style={{ width: "50%", maxWidth: "750px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Login;
