// components/Scripts.jsx
import React, { useEffect } from 'react';

const Scripts = () => {
  useEffect(() => {
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'GT-M6BBKDMD');

    // Facebook Pixel
    window.fbq = window.fbq || function(){ (window.fbq.q = window.fbq.q || []).push(arguments); };
    window.fbq('init', '1229782705355254');
    window.fbq('track', 'PageView');

    // CleanTalk Anti-Spam
    const script = document.createElement('script');
    script.src = 'https://fd.cleantalk.org/ct-bot-detector-wrapper.js?ver=6.70.1';
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <meta name="description" content="Our expert payment ensures seamless transactions, enabling you to focus on delivering exceptional customer experiences." />
      <meta property="og:title" content="Expert payment - expertpayment.co.uk" />
      <meta property="og:description" content="Our expert payment ensures seamless transactions, enabling you to focus on delivering exceptional customer experiences." />
      <meta property="og:image" content="https://expertpayment.co.uk/wp-content/uploads/2025/02/teshero1234.jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "expertpayment.co.uk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://expertpayment.co.uk/wp-content/uploads/2025/02/GLI9sY_inbox.jpeg"
              }
            },
            {
              "@type": "WebSite",
              "url": "https://expertpayment.co.uk",
              "name": "expertpayment.co.uk"
            }
          ]
        })}
      </script>
    </>
  );
};

export default Scripts;