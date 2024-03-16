import React from "react";
import "./Navbar.css";
import { Link as RouterLink } from "react-router-dom";
import { Link, Button, Avatar, Flex } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";

export default function Navbar() {

  const { handleLogout, isLoggingOut } = useLogout();
  
  return (
    <nav className="nav">
      <a href="/">
        <img
          src="/Mech_Logo.jpg"
          alt="Logo"
          style={{ width: "120px", height: "100px" }}
        />
      </a>
      <ul className="nav-links">
        <li>
          <Link
            to={"/"}
            as={RouterLink}
            _hover={{ textDecoration: "underline", color: "#002699" }}
            fontWeight="500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/appointments"}
            as={RouterLink}
            _hover={{ textDecoration: "underline", color: "#002699" }}
            fontWeight="500"
          >
            Appointments
          </Link>
        </li>
        <li>
          <Link
            to={"/profile"}
            as={RouterLink}
            _hover={{ textDecoration: "underline", color: "#002699" }}
            fontWeight="500"
          >
            Profile
          </Link>
        </li>
        <li>
          <Button
            display={{ base: "none", md: "block" }}
            colorScheme='telegram' 
            size='lg'
            _hover={{ bg: "#990000", color: "white" }}
            transition="background-color 0.3s ease-out, color 0.3s ease-out"
            isLoading={isLoggingOut}
            onClick={handleLogout}
            
          >
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
}
