import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import useLogin from "../../hooks/useLogin";
import './App.css';


export const Login = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const{loading,error,login}=useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email);

    props.onLogin({ email: Email, password: Password });
  };

  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <div className="heading-container">
            <p>
              <h2 >
                <b>Welcome to Vehicle Repairo!</b>
              </h2>
            </p>
            <div className="word-container">
              <p>Register your account</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="body-container">
                <p>
                  <label htmlFor="Email"  className="label">Email</label>
                </p>
                <Input
                  marginTop={2}
                  marginBottom={3}
                  placeholder="Email"
                  fontSize={15}
                  type="email"
                  size={"sm"}
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
                  size={"sm"}
                  type="password"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
              <div className="submit-container">
                <p>
                <Button textColor={"white"} colorScheme="#1D2B78" marginTop={10} isLoading={loading} onClick={() => login(inputs)} >Login</Button>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="image-section">
          <img
            src="/webLogin.jpg"
            alt="webLogin"
            style={{ width: "750px", height: "700px" }}
          />
        </div>
      </div>
    </>
  );
};
