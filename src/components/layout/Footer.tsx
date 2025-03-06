
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-footer text-footer-foreground pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us Section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-footer-foreground/80 max-w-xs">
              We create digital experiences that are both beautiful and functional, 
              focusing on clean design and intuitive interfaces.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h4 className="font-display text-xl mb-4 pb-2 border-b border-white/10">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-footer-foreground/80 hover:text-primary transition-colors duration-250">
                Home
              </Link>
              <Link to="/about" className="text-footer-foreground/80 hover:text-primary transition-colors duration-250">
                About
              </Link>
              <Link to="/services" className="text-footer-foreground/80 hover:text-primary transition-colors duration-250">
                Services
              </Link>
              <Link to="/contact" className="text-footer-foreground/80 hover:text-primary transition-colors duration-250">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact Info Section */}
          <div>
            <h4 className="font-display text-xl mb-4 pb-2 border-b border-white/10">Contact Us</h4>
            <div className="space-y-3">
              <p className="flex items-start text-footer-foreground/80">
                <svg 
                  className="mr-3 mt-1 flex-shrink-0 text-primary" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>123 Design Street, Creative City, CA 94103</span>
              </p>
              <p className="flex items-center text-footer-foreground/80">
                <svg 
                  className="mr-3 flex-shrink-0 text-primary" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(123) 456-7890</span>
              </p>
              <p className="flex items-center text-footer-foreground/80">
                <svg 
                  className="mr-3 flex-shrink-0 text-primary" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hello@framework.example</span>
              </p>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h4 className="font-display text-xl mb-4 pb-2 border-b border-white/10">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Twitter/X Icon */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-footer-foreground/5 hover:bg-primary/20 transition-colors duration-250 hover:text-primary"
                aria-label="Twitter"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              
              {/* Facebook Icon */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-footer-foreground/5 hover:bg-primary/20 transition-colors duration-250 hover:text-primary"
                aria-label="Facebook"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-footer-foreground/5 hover:bg-primary/20 transition-colors duration-250 hover:text-primary"
                aria-label="Instagram"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              
              {/* LinkedIn Icon */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-footer-foreground/5 hover:bg-primary/20 transition-colors duration-250 hover:text-primary"
                aria-label="LinkedIn"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-footer-foreground/60">
          <p>© {currentYear} Framework. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
