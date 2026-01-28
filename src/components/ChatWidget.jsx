// components/ChatWidget.jsx
import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chatOptions = [
    { platform: 'WhatsApp', number: '+7493333037', color: 'bg-green-500' },
    { platform: 'Phone', number: '+7493333037', color: 'bg-blue-500' }
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#A886CD] rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 z-50"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl z-50 border border-gray-200">
          <div className="bg-[#4AA485] text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Let's chat on WhatsApp</h3>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                ✕
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <p className="text-gray-600 mb-2">How can I help you? 😊</p>
            </div>

            <div className="space-y-3">
              {chatOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.platform === 'WhatsApp' 
                    ? `https://wa.me/${option.number.replace(/\D/g, '')}` 
                    : `tel:${option.number}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-lg ${option.color} text-white hover:opacity-90 transition-opacity`}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      {option.platform === 'WhatsApp' ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{option.platform}</div>
                      <div className="text-sm opacity-90">{option.number}</div>
                    </div>
                  </div>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <input
                type="text"
                placeholder="Write your message..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00CFB4]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;