
import React, { useState, useEffect, useCallback } from 'react';
import { generateTopic } from '../services/geminiService';
import Spinner from './Spinner';
import { SparklesIcon } from './icons/SparklesIcon';

const DailyTopic: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchTopic = useCallback(async () => {
    setIsLoading(true);
    const newTopic = await generateTopic();
    setTopic(newTopic);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTopic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Today's Challenge</h3>
      <div className="mt-4 min-h-[6rem] flex items-center justify-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <p className="text-3xl font-bold text-center text-teal-400">"{topic}"</p>
        )}
      </div>
      <button
        onClick={fetchTopic}
        disabled={isLoading}
        className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:ring-offset-gray-800 disabled:bg-teal-800 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <SparklesIcon className="w-5 h-5 mr-2" />
        Generate New Topic
      </button>
    </div>
  );
};

export default DailyTopic;
