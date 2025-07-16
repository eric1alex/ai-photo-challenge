
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we assume the key is available.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateTopic = async (): Promise<string> => {
  try {
    const prompt = `Generate a single, creative, and inspiring daily photography challenge topic. The topic should be concise, under 10 words. Examples: 'Symmetry in Chaos', 'The World at Your Feet', 'Hidden Faces in Plain Sight'. Provide only the topic name as a single string, with no extra text, quotes, or labels.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text.trim().replace(/\"/g, '');
  } catch (error) {
    console.error("Error generating topic:", error);
    return "Error: Could not fetch topic. Please try again.";
  }
};

export interface ImageAnalysisResult {
  caption: string;
  keywords: string;
}

export const analyzeImage = async (base64Image: string, mimeType: string): Promise<ImageAnalysisResult> => {
  try {
    const prompt = `Analyze this photograph. Based on its content, composition, and mood, provide a short, descriptive caption (one sentence) and 3-5 relevant keywords as a single comma-separated string.`;
    
    const imagePart = {
      inlineData: {
        data: base64Image,
        mimeType,
      },
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [{text: prompt}, imagePart] },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                caption: {
                    type: Type.STRING,
                    description: 'A short, descriptive caption for the photograph (one sentence).'
                },
                keywords: {
                    type: Type.STRING,
                    description: '3-5 relevant keywords as a single comma-separated string.'
                }
            }
        },
      }
    });

    const jsonText = response.text.trim();
    const result: ImageAnalysisResult = JSON.parse(jsonText);
    return result;

  } catch (error) {
    console.error("Error analyzing image:", error);
    return { caption: 'AI analysis failed.', keywords: 'error' };
  }
};
