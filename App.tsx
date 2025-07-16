
import React, { useState } from 'react';
import Header from './components/Header';
import DailyTopic from './components/DailyTopic';
import SubmissionForm from './components/SubmissionForm';
import PhotoGrid from './components/PhotoGrid';
import { Submission } from './types';
import Modal from './components/Modal';
import Guidelines from './components/Guidelines';
import Competition from './components/Competition';
import Blog from './components/Blog';
import About from './components/About';
import Notification from './components/Notification';

type NotificationType = 'success' | 'error';

const App: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedImage, setSelectedImage] = useState<Submission | null>(null);
  const [currentPage, setCurrentPage] = useState('Home');
  const [notification, setNotification] = useState<{ message: string; type: NotificationType } | null>(null);

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleNewSubmission = (submission: Omit<Submission, 'id'>) => {
    setSubmissions(prev => [{ ...submission, id: new Date().toISOString() }, ...prev]);
  };

  const handleSelectImage = (submission: Submission) => {
    setSelectedImage(submission);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  
  const handleNavigate = (page: string) => {
      setCurrentPage(page);
      setSelectedImage(null); // Close modal on navigation
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'Guidelines':
        return <Guidelines />;
      case 'Competition':
        return <Competition />;
      case 'Blog':
        return <Blog />;
      case 'About':
        return <About />;
      case 'Home':
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <DailyTopic />
              <SubmissionForm onNewSubmission={handleNewSubmission} showNotification={showNotification} />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">Latest Submissions</h2>
              {submissions.length > 0 ? (
                  <PhotoGrid submissions={submissions} onImageSelect={handleSelectImage} />
              ) : (
                  <div className="flex flex-col items-center justify-center h-96 bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-700">
                      <p className="text-gray-400">No submissions yet.</p>
                      <p className="text-gray-500">Be the first to accept the challenge!</p>
                  </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      {selectedImage && (
        <Modal submission={selectedImage} onClose={handleCloseModal} />
      )}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default App;
