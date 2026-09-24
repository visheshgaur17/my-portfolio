import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="floating-footer">
        <p className="footer-text">
          🚀 Made by <strong>Vishesh</strong> | © {new Date().getFullYear()}
        </p>

        <button 
          onClick={scrollToTop} 
          className="back-to-top-btn" 
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;