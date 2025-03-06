
import React, { useState, useEffect } from 'react';

interface IframeContainerProps {
  src: string;
  title: string;
  sandbox?: string;
  className?: string;
}

const IframeContainer: React.FC<IframeContainerProps> = ({
  src,
  title,
  sandbox = "allow-same-origin allow-scripts allow-popups allow-forms",
  className = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true);
    setHasError(false);
  }, [src]);
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  
  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm animate-pulse">
            <div className="text-center p-6 rounded-lg glass">
              <svg 
                className="animate-spin h-10 w-10 mb-4 mx-auto text-primary" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                ></circle>
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="text-foreground">Loading content...</p>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
            <div className="text-center p-6 rounded-lg glass">
              <svg 
                className="h-10 w-10 mb-4 mx-auto text-destructive" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
              <p className="text-foreground mb-2">Failed to load content</p>
              <p className="text-sm text-muted-foreground">There was an error loading the iframe content.</p>
            </div>
          </div>
        )}
        
        <iframe
          src={src}
          title={title}
          sandbox={sandbox}
          className="absolute top-0 left-0 w-full h-full border-0 shadow-lg"
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default IframeContainer;
