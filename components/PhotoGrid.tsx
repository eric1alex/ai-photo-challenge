
import React from 'react';
import { Submission } from '../types';
import PhotoCard from './PhotoCard';

interface PhotoGridProps {
  submissions: Submission[];
  onImageSelect: (submission: Submission) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ submissions, onImageSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {submissions.map((submission) => (
        <PhotoCard key={submission.id} submission={submission} onSelect={onImageSelect} />
      ))}
    </div>
  );
};

export default PhotoGrid;
