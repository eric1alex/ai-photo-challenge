
import React, { useState, useCallback } from 'react';
import { analyzeImage, ImageAnalysisResult } from '../services/geminiService';
import { uploadToDrive } from '../services/driveService';
import { Submission } from '../types';
import Spinner from './Spinner';
import { UploadIcon } from './icons/UploadIcon';
import { SparklesIcon } from './icons/SparklesIcon';


interface SubmissionFormProps {
  onNewSubmission: (submission: Omit<Submission, 'id'>) => void;
  showNotification: (message: string, type: 'success' | 'error') => void;
}

const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

const SubmissionForm: React.FC<SubmissionFormProps> = ({ onNewSubmission, showNotification }) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
        if (selectedFile.size > 4 * 1024 * 1024) { // 4MB limit
            setError('File is too large. Please select a file under 4MB.');
            return;
        }
        setError(null);
        setFile(selectedFile);
        const dataUrl = await fileToDataUrl(selectedFile);
        setPreview(dataUrl);
    }
  };
  
  const resetForm = () => {
      setTitle('');
      setFile(null);
      setPreview(null);
      setError(null);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) {
        setError('Please provide a title and select a photo.');
        return;
    }
    setError(null);
    setIsLoading(true);

    try {
        const dataUrl = await fileToDataUrl(file);
        const base64Image = dataUrl.split(',')[1];
        const analysis: ImageAnalysisResult = await analyzeImage(base64Image, file.type);
        
        const newSubmissionData = {
            title,
            imageUrl: dataUrl,
            aiCaption: analysis.caption,
            aiKeywords: analysis.keywords,
        };

        onNewSubmission(newSubmissionData);
        setIsLoading(false);
        setIsUploading(true);

        // Simulate backend upload
        const uploadResult = await uploadToDrive(newSubmissionData, file.name);
        if (uploadResult.success) {
            showNotification('Submission saved to gallery!', 'success');
        } else {
            // Even if upload fails, submission is in the local state.
            // A real app might handle this more robustly.
            showNotification('Could not save to gallery. Submission is viewable for this session.', 'error');
        }
        
        resetForm();

    } catch (err) {
        console.error(err);
        setError('An error occurred during submission. Please try again.');
        showNotification('Submission failed. Please try again.', 'error');
    } finally {
        setIsLoading(false);
        setIsUploading(false);
    }
  };

  const isButtonDisabled = isLoading || isUploading || !file || !title;

  const getButtonContent = () => {
    if (isLoading) {
      return (
          <>
              <Spinner className="w-5 h-5 mr-3" />
              Analyzing with AI...
          </>
      );
    }
    if (isUploading) {
        return (
            <>
                <Spinner className="w-5 h-5 mr-3" />
                Saving to Gallery...
            </>
        );
    }
    return (
        <>
            <SparklesIcon className="w-5 h-5 mr-2"/>
            Submit & Analyze
        </>
    );
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Submit Your Photo</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="e.g., Golden Hour at the Pier"
                    disabled={isLoading || isUploading}
                />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-300">Photo</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        {preview ? (
                            <img src={preview} alt="Preview" className="mx-auto h-32 w-auto rounded-md" />
                        ) : (
                            <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                        <div className="flex text-sm text-gray-500">
                            <label htmlFor="file-upload" className={`relative cursor-pointer bg-gray-800 rounded-md font-medium text-teal-400 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 focus-within:ring-teal-500 ${isLoading || isUploading ? 'pointer-events-none' : ''}`}>
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/png, image/jpeg, image/webp" disabled={isLoading || isUploading} />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 4MB</p>
                    </div>
                </div>
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
                type="submit"
                disabled={isButtonDisabled}
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:ring-offset-gray-800 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-200"
            >
                {getButtonContent()}
            </button>
        </form>
    </div>
  );
};

export default SubmissionForm;
