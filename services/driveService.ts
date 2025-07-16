import { Submission } from '../types';

/**
 * Simulates uploading a submission to a backend service like Google Drive.
 * In a real application, this function would make an API call to a secure
 * backend endpoint. The backend would then handle the authentication and
 * file upload to Google Drive.
 *
 * @param submission The submission data including title, image, and AI analysis.
 * @param filename The name of the original file.
 * @returns A promise that resolves with a success or error status.
 */
export const uploadToDrive = async (
  submission: Omit<Submission, 'id'>,
  filename: string
): Promise<{ success: boolean; message: string }> => {
  console.log('Simulating upload to Google Drive...');
  console.log('Filename:', filename);
  console.log('Submission Title:', submission.title);

  // This is a mock implementation.
  // To "access" a real backend, you would replace this mock logic
  // with a `fetch` call to your server's endpoint, like the example below.
  /*
  try {
    // This is how the frontend "accesses" the backend.
    const response = await fetch('https://your-backend-server.com/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: submission.title,
        imageDataUrl: submission.imageUrl, // Send the base64 data URL
        aiCaption: submission.aiCaption,
        aiKeywords: submission.aiKeywords,
        filename: filename
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Backend upload failed');
    }

    const result = await response.json();
    return { success: true, message: result.message };

  } catch (error) {
    console.error('Error uploading to backend:', error);
    return { success: false, message: (error as Error).message };
  }
  */

  // Simulate network latency for the mock service
  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log('Simulated upload successful!');

  // Always return success in this mock version
  return { success: true, message: 'File uploaded successfully.' };
};