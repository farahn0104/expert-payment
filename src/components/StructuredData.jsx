// components/StructuredData.jsx
import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://expertpayment.co.uk/#organization",
        "name": "expertpayment.co.uk",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://expertpayment.co.uk/#logo",
          "url": "https://expertpayment.co.uk/wp-content/uploads/2025/02/GLI9sY_inbox.jpeg",
          "caption": "expertpayment.co.uk"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://expertpayment.co.uk/#website",
        "url": "https://expertpayment.co.uk",
        "name": "expertpayment.co.uk",
        "alternateName": "theexpertpayment",
        "publisher": { "@id": "https://expertpayment.co.uk/#organization" }
      },
      {
        "@type": "WebPage",
        "@id": "https://expertpayment.co.uk/#webpage",
        "url": "https://expertpayment.co.uk/",
        "name": "Expert payment - expertpayment.co.uk",
        "isPartOf": { "@id": "https://expertpayment.co.uk/#website" },
        "primaryImageOfPage": {
          "@id": "https://expertpayment.co.uk/wp-content/uploads/2025/02/teshero1234.jpeg"
        }
      },
      {
        "@type": "Service",
        "name": "Expert payment",
        "description": "Our expert payment ensures seamless transactions, enabling you to focus on delivering exceptional customer experiences.",
        "offers": {
          "@type": "Offer",
          "availability": "InStock"
        },
        "image": {
          "@id": "https://expertpayment.co.uk/wp-content/uploads/2025/02/teshero1234.jpeg"
        },
        "@id": "https://expertpayment.co.uk/#schema-18115",
        "mainEntityOfPage": {
          "@id": "https://expertpayment.co.uk/#webpage"
        }
      }
    ]
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  );
};

export default StructuredData;