
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 transition-transform duration-250 ease-in-out hover:scale-105">
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-250"
      >
        <rect width="32" height="32" rx="8" fill="currentColor" className="text-primary" />
        <path 
          d="M9 9H15C17.7614 9 20 11.2386 20 14C20 16.7614 17.7614 19 15 19H9V9Z" 
          fill="white" 
        />
        <path 
          d="M23 23H17C14.2386 23 12 20.7614 12 18C12 15.2386 14.2386 13 17 13H23V23Z" 
          fill="white" 
          fillOpacity="0.8" 
        />
      </svg>
      <span className="font-display font-semibold text-xl md:text-2xl">Framework</span>
    </Link>
  );
};

export default Logo;
