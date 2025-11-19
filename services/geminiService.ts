import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: In a production environment, you would likely proxy this through a backend
// to keep the API key secure. For this demo/portfolio structure, we use the env var.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "ECT Assistant", a demo AI agent for ECT's portfolio website.
ECT is an AI Automation Developer & RAG Engineer who helps businesses automate repetitive work and build custom AI tools.

Services offered by ECT:
1. Internal AI Assistants (RAG pipelines, private document search).
2. Automated Reporting (Weather, inventory, sales reports via Cron/Python).
3. AI Document Search Engines (Index PDFs, emails, contracts).
4. Custom Business Chatbots (Customer service, email sorting).
5. AI Automation Consulting.

Tech stack used: Python, ChromaDB, Nomadic/HuggingFace embeddings, FastAPI, Docker, Local/Cloud LLMs.

Your goal is to answer visitor questions about ECT's services briefly and professionally.
Keep answers under 50 words. Be helpful and technical but accessible.
If asked for pricing, mention it's flexible and to check the pricing section.
`;

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Demo Mode: API Key not configured. (In a real deployment, this would connect to the Gemini API).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Error: Unable to reach the AI service at this moment.";
  }
};