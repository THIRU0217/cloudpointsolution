import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Image as ImageIcon, 
  Download, 
  Loader2, 
  AlertCircle, 
  Key,
  ArrowRight,
  Maximize2,
  Layout
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PageType } from '../types';

interface AIGeneratorProps {
  onNavigate: (page: PageType) => void;
}

const AIGenerator: React.FC<AIGeneratorProps> = ({ onNavigate }) => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '16:9' | '9:16' | '4:3' | '3:4'>('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState('Initializing Creative Engine...');

  const loadingMessages = [
    'Analyzing visual concepts...',
    'Architecting digital infrastructure visuals...',
    'Synthesizing enterprise light UI aesthetics...',
    'Refining minimalistic compositions...',
    'Generating high-fidelity textures...',
    'Optimizing for 4K resolution standards...',
    'Finalizing professional rendering...'
  ];

  useEffect(() => {
    const checkKey = async () => {
      // @ts-ignore
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    };
    checkKey();
  }, []);

  useEffect(() => {
    // Fix: Use ReturnType<typeof setInterval> instead of NodeJS.Timeout for browser compatibility
    let interval: ReturnType<typeof setInterval>;
    if (isGenerating) {
      let i = 0;
      interval = setInterval(() => {
        setLoadingMessage(loadingMessages[i % loadingMessages.length]);
        i++;
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isGenerating]);

  const handleOpenKeyDialog = async () => {
    // @ts-ignore
    await window.aistudio.openSelectKey();
    setHasKey(true);
  };

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [
            {
              text: `A high-quality, professional, enterprise technology-focused visual. Minimalistic composition, soft lighting, modern, premium feel. Brand colors: subtle orange accents with slate and white. Style: clean, professional, suitable for a corporate SaaS and AI services website. Scene: ${prompt}`,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
            imageSize: size
          }
        },
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            setGeneratedImage(`data:image/png;base64,${base64Data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        throw new Error("The model did not return an image part. Please try a different prompt.");
      }

    } catch (err: any) {
      console.error("Generation Error:", err);
      if (err.message?.includes("Requested entity was not found")) {
        setHasKey(false);
        setError("API Key session expired or invalid. Please re-select your paid project key.");
      } else {
        setError(err.message || "An unexpected error occurred during generation. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `cloudpoint-ai-gen-${Date.now()}.png`;
    link.click();
  };

  if (!hasKey) {
    return (
      <div className="pt-40 pb-20 min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="max-w-xl w-full glass p-12 rounded-[48px] text-center border border-slate-200 shadow-xl">
          <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-[#FF7D54] border border-orange-100">
            <Key size={40} />
          </div>
          <h1 className="text-4xl font-heading font-black text-slate-900 mb-6 uppercase tracking-tighter">Creative Studio Access</h1>
          <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">
            To use our enterprise-grade AI image generator, you must connect a paid Google Cloud Project API key. 
            <br />
            <a 
              href="https://ai.google.dev/gemini-api/docs/billing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FF7D54] hover:underline font-bold"
            >
              Learn more about billing.
            </a>
          </p>
          <button 
            onClick={handleOpenKeyDialog}
            className="btn-primary w-full py-5 rounded-3xl font-black uppercase text-sm tracking-widest shadow-xl flex items-center justify-center"
          >
            Connect Enterprise Key <ArrowRight size={20} className="ml-3" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white animate-in fade-in duration-1000 pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-[#FF7D54] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-orange-100">
            Advanced Generative Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter uppercase">
            Creative <span className="text-gradient-orange">Orchestrator.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Generate high-fidelity, enterprise-aligned visuals using the Gemini 3 Pro model. Architect your own digital assets in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Controls Panel */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-3 mb-8">
                <Layout size={20} className="text-[#FF7D54]" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Generator Config</h3>
              </div>

              <div className="space-y-6">
                {/* Prompt */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Visual Concept</label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A minimalist SAP dashboard visualizing global supply chain logistics with clean orange highlights..."
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm text-slate-900 focus:outline-none focus:border-[#FF7D54] transition-colors resize-none h-32 font-medium"
                  />
                </div>

                {/* Size Selection */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Output Resolution</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['1K', '2K', '4K'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s as any)}
                        className={`py-3 rounded-xl text-xs font-black uppercase tracking-widest border transition-all ${
                          size === s 
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Aspect Ratio */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Aspect Ratio</label>
                  <div className="grid grid-cols-5 gap-2">
                    {['1:1', '16:9', '9:16', '4:3', '3:4'].map((ar) => (
                      <button
                        key={ar}
                        onClick={() => setAspectRatio(ar as any)}
                        className={`py-2 rounded-lg text-[10px] font-bold border transition-all ${
                          aspectRatio === ar 
                          ? 'bg-[#FF7D54] text-white border-[#FF7D54]' 
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {ar}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={generateImage}
                  disabled={isGenerating || !prompt.trim()}
                  className="btn-primary w-full py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="animate-spin mr-3" size={18} />
                      Architecting...
                    </>
                  ) : (
                    <>
                      Generate Asset <Sparkles className="ml-3 group-hover:scale-110 transition-transform" size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="bg-orange-50/50 p-8 rounded-[32px] border border-orange-100">
              <div className="flex items-start space-x-4">
                <AlertCircle size={20} className="text-[#FF7D54] shrink-0 mt-1" />
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  <strong>Creative Guideline:</strong> For best results, use descriptors like "minimalistic", "premium lighting", "depth of field", or "corporate tech style". The engine is optimized for enterprise visuals.
                </p>
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-8">
            <div className="relative bg-slate-50 rounded-[48px] border border-slate-100 min-h-[500px] flex items-center justify-center overflow-hidden group shadow-inner">
              {isGenerating ? (
                <div className="text-center animate-in fade-in zoom-in duration-500 p-12">
                  <Loader2 className="w-16 h-16 text-[#FF7D54] animate-spin mx-auto mb-8" />
                  <p className="text-xl font-heading font-black text-slate-900 mb-3">{loadingMessage}</p>
                  <p className="text-slate-500 text-sm font-medium">Estimated time: 10-15 seconds</p>
                </div>
              ) : generatedImage ? (
                <div className="relative w-full h-full flex items-center justify-center p-6">
                   <div className="relative shadow-2xl rounded-[32px] overflow-hidden bg-white border border-slate-200 group/img">
                      <img 
                        src={generatedImage} 
                        alt="Generated enterprise visual" 
                        className="max-w-full max-h-[70vh] object-contain block"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                        <button 
                          onClick={downloadImage}
                          className="bg-white text-slate-900 p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center space-x-2"
                        >
                          <Download size={24} />
                        </button>
                      </div>
                   </div>
                   <div className="absolute top-8 right-8 flex space-x-3">
                      <button 
                        onClick={downloadImage}
                        className="bg-white/90 backdrop-blur glass p-4 rounded-2xl shadow-lg border border-white/20 hover:bg-white transition-all text-slate-900"
                        title="Download Asset"
                      >
                        <Download size={20} />
                      </button>
                   </div>
                </div>
              ) : error ? (
                <div className="text-center p-12 max-w-md animate-in slide-in-from-bottom duration-500">
                  <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Rendering Interrupted</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{error}</p>
                  <button 
                    onClick={() => setError(null)}
                    className="text-[#FF7D54] font-black uppercase text-xs tracking-widest hover:underline"
                  >
                    Clear and Try Again
                  </button>
                </div>
              ) : (
                <div className="text-center p-20 opacity-40 group-hover:opacity-60 transition-opacity">
                  <ImageIcon size={80} className="text-slate-300 mx-auto mb-8" />
                  <h4 className="text-2xl font-heading font-black text-slate-400 uppercase tracking-tighter">Output Canvas</h4>
                  <p className="text-slate-400 text-sm font-medium mt-4">Initialize parameters to architect visual data.</p>
                </div>
              )}
            </div>
            
            {generatedImage && !isGenerating && (
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={() => setGeneratedImage(null)}
                  className="text-slate-400 hover:text-slate-600 text-xs font-black uppercase tracking-widest transition-colors flex items-center"
                >
                  Clear Canvas and Start New
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Suggested Prompts Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tight">Recommended Blueprints</h2>
          <p className="text-slate-500 font-medium">Pre-optimized prompt structures for enterprise aesthetics.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "SAP Infrastructure", 
              prompt: "A sophisticated enterprise SAP S/4HANA dashboard showing real-time global logistics on a futuristic 3D map, soft orange neon lines, minimalistic UI, premium studio lighting." 
            },
            { 
              title: "AI Neural Network", 
              prompt: "A high-tech visualization of an autonomous AI agent neural network, translucent glowing nodes, clean white background, soft orange accents, cinematic depth of field." 
            },
            { 
              title: "SaaS Cloud Platform", 
              prompt: "A macro shot of a sleek, dark-mode SaaS dashboard with vibrant data visualizations, glassmorphism UI elements, ultra-premium professional finish, 8k resolution." 
            }
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => setPrompt(item.prompt)}
              className="text-left p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:border-[#FF7D54]/30 hover:shadow-md transition-all group"
            >
              <h4 className="text-slate-900 font-bold mb-3 uppercase text-xs tracking-widest">{item.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-700">{item.prompt}</p>
              <div className="mt-6 flex items-center text-[#FF7D54] font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Load Prompt <ArrowRight size={14} className="ml-2" />
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIGenerator;