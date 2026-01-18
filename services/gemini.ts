
import { GoogleGenAI } from "@google/genai";

// Function to get a response from the Gemini 3 Flash model with a specific persona.
export const getGeminiResponse = async (prompt: string) => {
  try {
    // Initialize GoogleGenAI inside the function using process.env.API_KEY directly.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Du bist ein Experte von 'Innovation Pflegen'. Deine Philosophie ist: 'Der Mensch steht im Mittelpunkt, nicht der Prozess'. Du hilfst Nutzern, Herausforderungen in der Pflegebranche zu verstehen und praxisnahe Lösungen zu finden. Du unterscheidest zwischen Großprojekten (strukturelle Änderungen) und kleinen Projekten (konkrete Lösungen vor Ort). Berate stets höflich, kompetent und mit Fokus auf die Stärkung der Pflegekräfte.",
      },
    });
    // The .text property is used directly to extract the generated string content.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Entschuldigung, ich konnte gerade keine Antwort generieren. Bitte versuchen Sie es später erneut.";
  }
};
