
import React from 'react';
import { Submission } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

interface PhotoCardProps {
  submission: Submission;
  onSelect: (submission: Submission) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ submission, onSelect }) => {
  const keywords = submission.aiKeywords.split(',').map(k => k.trim());

  return (
    <div 
        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-1 transition-transform duration-300"
        onClick={() => onSelect(submission)}
    >
      <img src={submission.imageUrl} alt={submission.title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h4 className="text-lg font-bold text-white truncate">{submission.title}</h4>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
            <p className="text-sm text-gray-300 flex items-start">
                <SparklesIcon className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-teal-400" />
                <span>{submission.aiCaption}</span>
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
                {keywords.map(keyword => (
                    <span key={keyword} className="px-2 py-0.5 text-xs bg-gray-700/80 text-gray-300 rounded-full">{keyword}</span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
