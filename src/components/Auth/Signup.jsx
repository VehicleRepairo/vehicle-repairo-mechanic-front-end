import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
 
} from "@chakra-ui/react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpwithEmailandPassword";;
import './App.css';


export const Signup = (props) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    contact: "",
    email: "",
    password: "",
    catergory: "",
  });
  const { loading, error, signup } = useSignUpWithEmailAndPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    console.log(inputs);
    props.onSignup(formData);
   
  };
  

  return (
    <>
      <div className="login-container">
        <div className="form-container">
          
          <div className="heading-container">
            <p>
              <b>
                <h2>Welcome to Vehicle Repairo!</h2>
              </b>
            </p>
            <div className="word-container">
              <p>Register your account</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="body-container">
                <p>
                  <label htmlFor="Email">  Email</label>
                </p>
                <Input
                  placeholder="Email"
                  fontSize={14}
                  type="email"
                  size={"sm"}
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
                <p>
                  <label htmlFor="Contact">Contact</label>
                </p>
                <Input
                  placeholder="Contact"
                  fontSize={14}
                  type="text"
                  size={"sm"}
                  value={inputs.contact}
                  onChange={(e) =>
                    setInputs({ ...inputs, contact: e.target.value })
                  }
                />
                <p>
                  <label htmlFor="Name">Name</label>
                </p>
                <Input
                  placeholder="Full Name"
                  fontSize={14}
                  type="text"
                  size={"sm"}
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
                <p>
                  <label htmlFor="Password">Password</label>
                </p>

                <Input
                  placeholder="Password"
                  fontSize={14}
                  value={inputs.password}
                  size={"sm"}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />

                <p>
                  <label htmlFor="Category" className="catergory">Category</label>
                </p>
                <select
                  value={inputs.catergory}
                  onChange={(e) =>
                    setInputs({ ...inputs, catergory: e.target.value })
                  }
                  id="Category"
                  name="Category"
                >
                  <option value="">Select your category</option>
                  <option value="vehicle service">Vehicle Service</option>
                  <option value="vehicle inspection">Vehicle Inspection</option>
                  <option value="tyre replacement">Tyre Replacement</option>
                  <option value="tyre repair">Tyre Repair</option>
                  <option value="vehicle wash">Vehicle Wash</option>
                </select>
              </div>
              {error && (
                <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                  <AlertIcon fontSize={12} />
                  {error.message}
                </Alert>
              )}
              <p>
                
                <Button
                  textColor={"white"}
                  colorScheme="#1D2B78"
                  marginTop={10}
                  isLoading={loading}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Signup
                 
                </Button>
                
              </p>
            
            </form>
          </div>
        </div>
        <div className="image-section" >
          <img src="/webLogin.jpg" alt="webLogin" />
        </div>
      </div>
      
    </>
  );
};
