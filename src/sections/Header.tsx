"use client";

import React from "react";

export const Header = () => {
  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a 
          href="#hero" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleScroll('hero'); 
          }} 
          className="nav-item"
        >
          Home
        </a>
        <a 
          href="#projects" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleScroll('projects'); 
          }} 
          className="nav-item"
        >
          Projects
        </a>
        <a 
          href="#about" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleScroll('about'); 
          }} 
          className="nav-item"
        >
          About
        </a>
        <a 
          href="#contacts" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleScroll('contacts'); 
          }} 
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contacts
        </a>
      </nav>
    </div>
  );
};
