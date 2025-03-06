
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-header text-header-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display font-bold mb-6 animate-fade-in">About Our Company</h1>
            <p className="text-xl text-header-foreground/80 animate-fade-in" style={{ animationDelay: '100ms' }}>
              We're a team of designers and developers passionate about creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">Our Mission</span>
                <h2 className="font-display text-3xl mb-4">To Simplify Digital Experiences</h2>
                <p className="text-muted-foreground mb-4">
                  We believe that technology should enhance human experiences, not complicate them. Our mission is to create digital solutions that are both beautiful and functional, with a focus on simplicity and user experience.
                </p>
                <p className="text-muted-foreground">
                  Since our founding in 2015, we've helped hundreds of clients transform their digital presence and create meaningful connections with their audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground">
              These core principles guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
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
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="font-display text-xl mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly explore new technologies and methodologies to stay ahead of the curve.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
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
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-display text-xl mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in open communication and honesty in all our client relationships.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-250 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-display text-xl mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality, delivering excellence in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">Our Team</span>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Meet the Experts</h2>
            <p className="text-lg text-muted-foreground">
              Passionate professionals dedicated to creating exceptional digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-250">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-xl mb-1">Alex Chen</h3>
                <p className="text-primary text-sm mb-3">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  With over 15 years of industry experience, Alex leads our vision and strategic direction.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-250">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-xl mb-1">Maya Johnson</h3>
                <p className="text-primary text-sm mb-3">Lead Designer</p>
                <p className="text-muted-foreground text-sm">
                  Maya brings creativity and user-focused design principles to every project we undertake.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-250">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-xl mb-1">David Park</h3>
                <p className="text-primary text-sm mb-3">Technical Director</p>
                <p className="text-muted-foreground text-sm">
                  David oversees all technical aspects, ensuring robust and scalable solutions.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-250">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-xl mb-1">Sarah Miller</h3>
                <p className="text-primary text-sm mb-3">Client Relations</p>
                <p className="text-muted-foreground text-sm">
                  Sarah ensures our clients receive exceptional service throughout their journey with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
