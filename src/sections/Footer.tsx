import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-darkBlue text-lightBlue py-8 px-4">
      <div className="text-center">
       
      </div>
      <div className="mt-8 border-t border-gray-600 pt-4">
        <p className="text-center text-xs text-gray-400">&copy; 2024. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentBlue"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com/vaibhavisno-one"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentBlue"
          >
            GitHub
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentBlue"
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/vaibhav-kumar-b2a1662b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentBlue"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};
