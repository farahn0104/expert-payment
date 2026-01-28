// components/LoadingScreen.jsx
import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
      // Dispatch events like in original code
      document.dispatchEvent(new Event('DOMContentLoaded'));
      window.dispatchEvent(new Event('load'));
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {/* Critical CSS background styles */}
      <style>{`
        @media (min-width: 320px) and (max-width: 480px) {
          .elementor-18 .elementor-element.elementor-element-5f27c04f > .elementor-background-overlay {
            background-image: url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20%20%22%3E%3C/svg%3E#}https://expertpayment.co.uk/wp-content/uploads/2025/02/background123-768x432.png") !important;
          }
        }
      `}</style>

      {/* Loading indicator */}
      {!loaded && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#00CFB4] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#2F2F2F] font-medium">Loading Expert Payment...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;