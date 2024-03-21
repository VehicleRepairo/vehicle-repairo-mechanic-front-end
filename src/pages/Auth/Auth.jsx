import React, { useState } from 'react';
import { Flex, Button } from '@chakra-ui/react'; // Assuming you're using Chakra UI components
import { Login } from '../../components/Auth/Login';// Import your Login component
import {Signup} from '../../components/Auth/Signup';
import '../../components/Auth/App.css'


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      
      <div className="switch-container" >
        <p >
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Button colorScheme='teal' variant='outline' marginLeft={5} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "SIGN UP" : "LOGIN"}
          </Button>
        </p>
      </div>
      {isLogin ? <Login /> : <Signup />}
    </>
  );
}

export default Auth;
