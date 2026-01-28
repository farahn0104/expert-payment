// components/ElementorSupport.jsx
import React from 'react';

const ElementorSupport = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-gray-200 z-40 hidden md:block">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-[#00CFB4]/20 rounded-lg flex items-center justify-center">
          <span className="text-[#00CFB4] font-bold">E</span>
        </div>
        <div>
          <div className="text-sm font-semibold text-[#2F2F2F]">Powered by Elementor</div>
          <div className="text-xs text-gray-500">v3.34.1</div>
        </div>
      </div>
    </div>
  );
};

export default ElementorSupport;