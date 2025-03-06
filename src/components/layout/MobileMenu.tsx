
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Handle mounting animation
    if (isOpen) {
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => setIsMounted(false), 300); // Match animation duration
      return () => clearTimeout(timer);
    }
    
    // Close when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);
  
  if (!isMounted) return null;
  
  return (
    <div
      className={`fixed inset-0 z-50 bg-header/95 backdrop-blur-sm transition-opacity duration-350 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div 
        ref={menuRef}
        className={`w-full h-full transform transition-transform duration-350 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-6 py-12 h-full flex flex-col">
          <div className="flex justify-end mb-8">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-250"
              aria-label="Close menu"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col items-center justify-center space-y-8 text-center">
            <NavLink 
              to="/" 
              onClick={onClose}
              className={({ isActive }) => 
                `text-3xl font-display nav-link transition-all duration-350 ease-out transform hover:scale-105 ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={onClose}
              className={({ isActive }) => 
                `text-3xl font-display nav-link transition-all duration-350 ease-out transform hover:scale-105 ${isActive ? 'active' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={onClose}
              className={({ isActive }) => 
                `text-3xl font-display nav-link transition-all duration-350 ease-out transform hover:scale-105 ${isActive ? 'active' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={onClose}
              className={({ isActive }) => 
                `text-3xl font-display nav-link transition-all duration-350 ease-out transform hover:scale-105 ${isActive ? 'active' : ''}`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
