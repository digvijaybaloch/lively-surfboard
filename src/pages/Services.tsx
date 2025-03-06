
import React from 'react';
import IframeContainer from '@/components/ui/IframeContainer';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-header text-header-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display font-bold mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl text-header-foreground/80 animate-fade-in" style={{ animationDelay: '100ms' }}>
              We offer comprehensive digital solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Comprehensive Digital Solutions</h2>
            <p className="text-lg text-muted-foreground">
              From concept to execution, we handle every aspect of your digital presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg 
                  width="28" 
                  height="28" 
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
              <h3 className="font-display text-2xl mb-3">Web Design & Development</h3>
              <p className="text-muted-foreground mb-4">
                We create beautiful, responsive websites that not only look great but also provide an excellent user experience across all devices.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Custom Web Applications</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Content Management Systems</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground mb-4">
                We craft intuitive user interfaces and seamless user experiences that engage and delight your audience.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>User Research & Testing</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Wireframing & Prototyping</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Visual Design</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Usability Enhancement</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3">Digital Marketing</h3>
              <p className="text-muted-foreground mb-4">
                We help you reach and engage your target audience through strategic digital marketing campaigns.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Search Engine Optimization (SEO)</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Content Marketing</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Pay-Per-Click Advertising</span>
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3">App Development</h3>
              <p className="text-muted-foreground mb-4">
                We build native and cross-platform mobile applications that provide seamless user experiences.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>iOS Development</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Android Development</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Cross-Platform Development</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="mr-2 mt-1 text-primary" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>App Maintenance & Updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">Interactive Demo</span>
            <h2 className="font-display text-3xl md:text-4xl mb-4">See Our Work in Action</h2>
            <p className="text-lg text-muted-foreground">
              Experience a sample of our interactive applications
            </p>
          </div>
          
          <IframeContainer 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Product Demo"
            className="max-w-5xl mx-auto shadow-xl rounded-lg overflow-hidden"
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-header text-header-foreground p-10 rounded-2xl shadow-xl">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-header-foreground/80">
              Let's discuss how we can help bring your vision to life.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-250"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
