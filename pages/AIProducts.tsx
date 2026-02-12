
import React from 'react';
import { Bot, FileSearch, Users, Activity, Play, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface AIProductsProps {
  onNavigate: (page: PageType) => void;
}

const products = [
  {
    title: "Document Core AI",
    icon: <FileSearch className="text-orange-500" />,
    desc: "Transform unstructured documents into searchable enterprise intelligence with proprietary RAG workflows.",
    features: ["Instant Semantic Indexing", "Multi-Language OCR", "Automated Policy Auditing"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Talent Sentinel",
    icon: <Users className="text-orange-500" />,
    desc: "Autonomous recruitment assistant that identifies top 1% talent using skill-based psychometrics.",
    features: ["Bias-Free Screening", "Technical Interview Copilot", "Pipeline Predictive Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  }
];

const AIProducts: React.FC<AIProductsProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-slate-950 pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-32">
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 tracking-tighter">Native <span className="text-orange-500">AI</span> Products.</h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-xl font-medium">Ready-to-deploy enterprise solutions built on the Cloud Point automation stack.</p>
          </div>

          <div className="space-y-40">
            {products.map((product, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-8">
                  <div className="inline-block p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                    {/* Fix: Explicitly cast icon to React.ReactElement<any> to resolve type error for 'size' property */}
                    {React.cloneElement(product.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h2 className="text-4xl font-heading font-bold text-white">{product.title}</h2>
                  <p className="text-slate-400 text-lg leading-relaxed">{product.desc}</p>
                  <ul className="space-y-4">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center text-slate-300 font-semibold text-sm">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mr-4"></div> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex pt-6 space-x-6">
                    <button className="btn-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center shadow-xl shadow-orange-950/20">
                      Watch Demo <Play size={18} className="ml-3 fill-white" />
                    </button>
                    <button onClick={() => onNavigate(PageType.CONTACT)} className="text-white font-bold flex items-center hover:text-orange-500 transition-colors">
                      Full Case Study <ChevronRight size={20} className="ml-1" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-orange-500/10 blur-3xl rounded-full opacity-50"></div>
                    <div className="relative glass rounded-[40px] p-3 border-white/10 shadow-3xl">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="rounded-[32px] w-full aspect-video object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-32 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center glass p-16 rounded-[48px] border-orange-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -mr-32 -mt-32"></div>
          <h2 className="text-4xl font-heading text-white mb-6">Need a custom implementation?</h2>
          <p className="text-slate-400 text-lg mb-12">Our engineering team specializes in deep API integrations and proprietary model fine-tuning.</p>
          <button 
            onClick={() => onNavigate(PageType.CONTACT)}
            className="btn-primary text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-950/30"
          >
            Start Your Custom Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIProducts;
