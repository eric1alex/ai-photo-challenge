
import React from 'react';
import { CameraIcon } from './icons/CameraIcon';
import { SparklesIcon } from './icons/SparklesIcon';

const About: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">About PhotoChallenge</h1>
      <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center mb-12">
        PhotoChallenge is a community-driven platform designed to ignite your passion for photography. We believe that creativity flourishes with practice and inspiration. That's why we're here to provide a daily dose of both.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-center mb-4">
              <CameraIcon className="w-12 h-12 text-teal-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-3">Our Mission</h2>
          <p className="text-gray-400">
            Our mission is to help photographers of all skill levels grow by providing daily creative challenges. We aim to foster a supportive environment where members can share their work, receive feedback, and feel inspired every day.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-center mb-4">
              <SparklesIcon className="w-12 h-12 text-teal-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-3">Powered by AI</h2>
          <p className="text-gray-400">
            We use cutting-edge AI to generate unique and inspiring daily topics. Our AI also provides instant analysis of your photos, offering captions and keywords to help you see your work in a new light and understand its key elements.
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-white">Join the Challenge</h3>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Ready to start your journey? Grab your camera, check out today's topic, and show us what you can create. We can't wait to see your perspective.
        </p>
      </div>
    </div>
  );
};

export default About;
