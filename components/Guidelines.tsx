
import React from 'react';

const Guidelines: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6">Community Guidelines</h1>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>Welcome to PhotoChallenge! To ensure our community remains a positive, inspiring, and safe space for everyone, please adhere to the following guidelines.</p>
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">1. Be Respectful</h2>
          <p>Treat fellow photographers with courtesy and respect. We are a community of learners and creators. Constructive feedback is welcome, but personal attacks, harassment, hate speech, or any form of bullying will not be tolerated.</p>
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">2. Keep it Safe and Appropriate</h2>
          <p>All submitted content must be appropriate for a general audience. Do not upload photos that are sexually explicit, graphically violent, or promote illegal activities. Submissions should be your own original work.</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">3. Stay on Topic</h2>
          <p>Submissions should relate to the daily challenge topic. While creative interpretation is encouraged, please make a genuine effort to align your photo with the theme. This keeps the challenge fair and fun for everyone.</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">4. No Spam or Self-Promotion</h2>
          <p>This platform is for sharing photography related to the challenges. Please do not use it for commercial advertising, spam, or excessive self-promotion unrelated to your submissions. Linking to your portfolio in your profile is acceptable.</p>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
