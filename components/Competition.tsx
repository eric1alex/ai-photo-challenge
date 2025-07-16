
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

const Competition: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6">Photo Competitions</h1>
      <p className="text-gray-300 leading-relaxed mb-8">Ready to take your photography to the next level? Participate in our weekly and monthly competitions for a chance to win amazing prizes and get featured in our gallery!</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-teal-500/30">
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">Weekly Showdown</h2>
          <p className="text-gray-400 mb-4">A fast-paced competition based on a unique theme announced every Monday. Submit your best shot by Friday to be in the running.</p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-2 mt-1 text-teal-400 shrink-0" /><span><strong>Prize:</strong> $50 Gift Card & Social Media Feature</span></li>
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-2 mt-1 text-teal-400 shrink-0" /><span><strong>Theme:</strong> Changes Weekly</span></li>
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-2 mt-1 text-teal-400 shrink-0" /><span><strong>Winner:</strong> Announced every Sunday</span></li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-3">Monthly Masterpiece</h2>
          <p className="text-gray-400 mb-4">Our premier competition. A broader theme gives you more time to plan, shoot, and perfect your masterpiece.</p>
           <ul className="space-y-2 text-gray-300">
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-2 mt-1 text-teal-400 shrink-0" /><span><strong>Grand Prize:</strong> New Camera Gear & Gallery Showcase</span></li>
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-2 mt-1 text-teal-400 shrink-0" /><span><strong>Theme:</strong> Announced on the 1st of each month</span></li>
            <li className="flex items-start"><SparklesIcon className="w-5 h-5 mr-2 mt-1 text-teal-400 shrink-0" /><span><strong>Judging:</strong> By a panel of professional photographers</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-white">How to Enter</h3>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Simply participate in the daily challenges. Our team and the community will nominate the best submissions for entry into the weekly and monthly competitions. The more you participate, the higher your chances!</p>
        <button className="mt-6 px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
          View Current Standings
        </button>
      </div>
    </div>
  );
};

export default Competition;
