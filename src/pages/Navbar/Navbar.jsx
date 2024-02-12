import React from 'react';
import "./Navbar.css";

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

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    );
}

