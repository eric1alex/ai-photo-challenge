
import React, { useEffect } from 'react';
import { Submission } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

interface ModalProps {
  submission: Submission;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ submission, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);
    
    const keywords = submission.aiKeywords.split(',').map(k => k.trim());

    return (
        <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 transition-opacity"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full md:w-2/3 h-64 md:h-auto flex items-center justify-center bg-black">
                    <img src={submission.imageUrl} alt={submission.title} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2">{submission.title}</h3>
                    <div className="text-sm text-gray-300 mb-6 flex items-start">
                        <SparklesIcon className="w-5 h-5 mr-2 mt-0.5 shrink-0 text-teal-400" />
                        <span>{submission.aiCaption}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">AI Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                        {keywords.map(keyword => (
                            <span key={keyword} className="px-3 py-1 text-sm bg-gray-700 text-gray-200 rounded-full">{keyword}</span>
                        ))}
                    </div>
                     <button
                        onClick={onClose}
                        className="mt-auto ml-auto px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
