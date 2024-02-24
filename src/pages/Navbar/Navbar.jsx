import React from "react";
import "./Navbar.css";
import { Link as RouterLink } from "react-router-dom";
import { Link ,Button,Avatar,Flex} from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/">
            <img src="/Mech_Logo.jpg" alt="Logo" style={{ width: '120px', height: '100px' }} />
            </a>
            <ul>
                <CustomLink href="/home">Home</CustomLink>
                <CustomLink href="/Service">Service Completion</CustomLink>
                <CustomLink href="/appointments">Appointments</CustomLink>
                <CustomLink href="/profile">Profile</CustomLink>
            </ul>
        </nav>
    );
}
