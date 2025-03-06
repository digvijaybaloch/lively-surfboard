
import React from 'react';
import IframeContainer from '@/components/ui/IframeContainer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-header text-header-foreground py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display font-bold mb-6 animate-fade-in">
              Create Stunning Digital Experiences
            </h1>
            <p className="text-xl md:text-2xl text-header-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              A modern platform for building beautiful, responsive websites
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <a 
                href="#iframe-demo" 
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-250"
              >
                View Demo
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 rounded-lg bg-transparent border border-header-foreground/20 hover:bg-white/10 transition-colors duration-250"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Iframe Demo Section */}
      <section id="iframe-demo" className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">Interactive Demo</span>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Experience Our Platform</h2>
            <p className="text-lg text-muted-foreground">
              Explore our interface with this interactive demonstration
            </p>
          </div>
          
          <IframeContainer 
            src="https://maps.google.com/maps?q=san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Interactive Demo"
            className="max-w-5xl mx-auto shadow-xl rounded-lg overflow-hidden"
          />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">Features</span>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Why Choose Our Platform</h2>
            <p className="text-lg text-muted-foreground">
              Designed with simplicity and performance in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
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
                  className="text-primary"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="font-display text-xl mb-2">High Performance</h3>
              <p className="text-muted-foreground">
                Optimized for speed and efficiency, ensuring a smooth user experience at all times.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
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
                  className="text-primary"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="font-display text-xl mb-2">Responsive Design</h3>
              <p className="text-muted-foreground">
                Automatically adapts to any screen size, from desktop to mobile devices.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
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
                  className="text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-display text-xl mb-2">User-Friendly</h3>
              <p className="text-muted-foreground">
                Intuitive interface designed with the end-user in mind for maximum usability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
