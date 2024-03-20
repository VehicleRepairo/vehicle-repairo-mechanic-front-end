import React, { useState } from "react";
import "./Navbar.css";
import { Link as RouterLink } from "react-router-dom";
import { Link, Button } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";

export default function Navbar() {
  const { handleLogout, isLoggingOut } = useLogout();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <a href="/">
        <img
          src="/Mech_Logo.png"
          alt="Logo"
          style={{ width: "120px", height: "100px" }}
        />
      </a>
      <div className={`nav-links ${showMenu ? "active" : ""}`}>
        <ul>
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
            <Link
              to={"/aboutUs"}
              as={RouterLink}
              _hover={{ textDecoration: "underline", color: "#002699" }}
              fontWeight="500"
            >
              AboutUs
            </Link>
          </li>
          <li>
            <Button
              colorScheme="telegram"
              size="lg"
              _hover={{ bg: "#990000", color: "white" }}
              transition="background-color 0.3s ease-out, color 0.3s ease-out"
              isLoading={isLoggingOut}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </li>
        </ul>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
    </nav>
  );
}
