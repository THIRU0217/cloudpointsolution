
import { GoogleGenAI } from "@google/genai";

export const sendMessageToAI = async (message: string, history: { role: 'user' | 'model', text: string }[]) => {
  if (!process.env.API_KEY) {
    return "I'm currently in offline mode. Please contact us directly at info@cloudpointsolution.com.";
  }

  // Initializing GoogleGenAI using process.env.API_KEY directly as per the specified guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the Cloud Point Solutions AI Assistant (Lead Qualification Specialist).
    
    STRICT SCOPE RULE:
    - Answer ONLY questions related to Cloud Point Solutions: Services (AI Automation, SaaS, Cybersecurity, IT Outsourcing, Digital Marketing), Training Programs (SAP S/4HANA, BTP, College Training, Custom L&D), Locations (UAE, India), and Contact Info.
    - If a user asks about external topics (politics, weather, general facts, other companies, personal advice), you MUST respond ONLY with: 
      "I can assist you only with information related to our services and training programs. Please let me know how I can help."
    - DO NOT provide speculative, external, or non-company information.

    GOALS:
    1. Professional & Innovative Tone: Use clear, simple language suitable for students and corporate decision-makers.
    2. Lead Qualification: If the user expresses interest in a service or training, guide them to provide their Name, Email, Organization, and Interest area.
    3. No Products Page: Remember, we deliver IP through Services.
    
    COMPANY DATA:
    - Locations: Dubai (UAE) Shams Free Zone; Puducherry (India) Innovation Hub.
    - Core Services: SaaS Development, AI Automation, Corporate Training, Cybersecurity, Digital Marketing, IT Outsourcing.
    - Training: SAP S/4HANA, SAP BTP, College Placement Training, Custom Enterprise L&D.
    - Contact Email: info@cloudpointsolution.com
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text || "I can assist you only with information related to our services and training programs. Please let me know how I can help.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a technical glitch. Please reach out to info@cloudpointsolution.com for direct assistance.";
  }
};
