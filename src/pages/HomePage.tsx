import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            AMO AI Digital Agency
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Turn 3-Day Processes Into 3-Minute Solutions
          </p>
          <p className="text-lg text-gray-500 mb-12">
            AI-powered automation that transforms your business in weeks, not months. 
            90% automation, 300% ROI, proven results with 500+ projects delivered.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI Automation</h3>
              <p className="text-gray-600">Intelligent systems with Claude, GPT-4, and advanced AI</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Rapid Development</h3>
              <p className="text-gray-600">From $15K MVPs to enterprise solutions in 2-8 weeks</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Production Ready</h3>
              <p className="text-gray-600">Scalable, secure, and user-friendly applications</p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">✅ HOMEPAGE IS WORKING!</h2>
            <p className="text-green-600 text-xl font-semibold">
              🎉 Component errors fixed - No more redirects to /brief!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
