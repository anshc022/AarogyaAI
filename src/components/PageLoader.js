import React from 'react';

function PageLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Aa</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mt-4">AarogyaAI</h1>
        <p className="text-white/80 mt-2">AI-Powered Healthcare</p>
      </div>
    </div>
  );
}

export default PageLoader;
