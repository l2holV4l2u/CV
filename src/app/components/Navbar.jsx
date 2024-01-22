"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "Research",
    path: "#research",
  },
  {
    title: "Awards",
    path: "#awards",
  },
  {
    title: "Extracurricular Activities",
    path: "#extra",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 lg:py-4 mx-auto px-4 py-2">
      <ul className="flex flex-row space-x-8 ">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
