
import React from 'react';
import { 
  Bot, 
  Workflow, 
  FileCheck, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Headphones, 
  Database, 
  Mail, 
  Search, 
  PenTool, 
  Code2, 
  Rocket, 
  Infinity as InfinityIcon,
  TrendingDown,
  Clock,
  CheckCircle,
  Stethoscope,
  Briefcase,
  ShoppingCart,
  Factory
} from 'lucide-react';
import { PageType } from '../types';

interface AIAutomationProps {
  onNavigate: (page: PageType) => void;
}

const AIAutomation: React.FC<AIAutomationProps> = ({ onNavigate }) => {
  const metrics = [
    { label: "OpEx Reduction", value: "70%", icon: <TrendingDown size={20} />, desc: "Average operational cost savings post-deployment." },
    { label: "Availability", value: "24/7", icon: <Clock size={20} />, desc: "Continuous processing without human intervention." },
    { label: "Error Rate", value: "0.01%", icon: <CheckCircle size={20} />, desc: "Drastic reduction in manual processing errors." },
    { label: "Processing Speed", value: "10x", icon: <Zap size={20} />, desc: "Accelerated throughput for high-volume tasks." }
  ];

  const solutions = [
    {
      title: "Intelligent AI Agents",
      icon: <Bot />,
      desc: "Autonomous LLM-powered agents that execute complex multi-step reasoning to solve business queries.",
      features: ["Cognitive Decisioning", "Long-term Memory", "Tool Integration"]
    },
    {
      title: "Workflow Orchestration",
      icon: <Workflow />,
      desc: "End-to-end automation of cross-platform business processes without manual data re-entry.",
      features: ["Zero-Glue Code", "Real-time Sync", "Error Auto-recovery"]
    },
    {
      title: "Document Intelligence",
      icon: <FileCheck />,
      desc: "Proprietary RAG & OCR pipelines to extract actionable data from unstructured documents.",
      features: ["99.9% Field Accuracy", "Compliance Filtering", "Bulk Processing"]
    },
    {
      title: "Customer Support AI",
      icon: <Headphones />,
      desc: "Human-like voice and text assistants that resolve up to 80% of routine inquiries instantly.",
      features: ["Voice-First Logic", "Emotion Detection", "Seamless Handover"]
    },
    {
      title: "Data Processing Engine",
      icon: <Database />,
      desc: "Automated ETL and data synthesis pipelines for real-time executive decision intelligence.",
      features: ["Anomalous Detection", "Predictive Analytics", "Dynamic Reporting"]
    },
    {
      title: "Email & Comms Automation",
      icon: <Mail />,
      desc: "Smart inbox management that categorizes, prioritizes, and drafts responses autonomously.",
      features: ["Intent Recognition", "Auto-Scheduling", "Sentiment Analysis"]
    }
  ];

  const industries = [
    { name: "Finance", icon: <Briefcase />, benefit: "Automated KYC & Loan Processing", impact: "Reduce processing time by 85%" },
    { name: "Healthcare", icon: <Stethoscope />, benefit: "AI Medical Coding & Scheduling", impact: "Zero billing errors guaranteed" },
    { name: "E-commerce", icon: <ShoppingCart />, benefit: "Dynamic Inventory & Lead Gen", impact: "30% Increase in conversion" },
    { name: "Manufacturing", icon: <Factory />, benefit: "Predictive Maintenance & Supply Chain", impact: "99% Resource optimization" }
  ];

  const steps = [
    { step: "01", name: "In-depth Analysis", icon: <Search />, desc: "We audit your current tech stack and identify high-ROI automation candidates." },
    { step: "02", name: "Solution Blueprint", icon: <PenTool />, desc: "Designing custom AI architectures and mapping data flows for maximum efficiency." },
    { step: "03", name: "Engineering & Pilot", icon: <Code2 />, desc: "Rapid development of AI agents and orchestration logic in a sandbox environment." },
    { step: "04", name: "Full-Scale Launch", icon: <Rocket />, desc: "Phased deployment into production with zero-downtime integration." },
    { step: "05", name: "Hyper-Optimization", icon: <InfinityIcon />, desc: "Continuous fine-tuning of models based on real-world performance metrics." }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-slate-950 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-600/5 blur-[200px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-cyan-500/20 text-cyan-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                Autonomous Intelligence Hub
              </div>
              <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
                AI Automation <br /> <span className="text-gradient-orange">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-12 font-medium mx-auto lg:mx-0">
                Intelligent automation that drives unmatched efficiency and exponential growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-2xl shadow-orange-950/20 group"
                >
                  Book Automation Demo <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate(PageType.SERVICES)}
                  className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold border-white/10"
                >
                  Explore Capabilities
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="glass p-10 rounded-[48px] border-white/10 shadow-3xl bg-gradient-to-br from-white/5 to-transparent">
                <div className="space-y-8">
                  <div className="flex items-center space-x-6 p-4 rounded-2xl bg-white/5 border border-white/5 animate-in slide-in-from-right duration-500">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white"><Bot /></div>
                    <div className="flex-1">
                      <div className="h-2 w-24 bg-white/20 rounded-full mb-3"></div>
                      <div className="h-2 w-full bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 p-4 rounded-2xl bg-white/5 border border-white/5 animate-in slide-in-from-right duration-700 delay-150">
                    <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white"><Workflow /></div>
                    <div className="flex-1">
                      <div className="h-2 w-32 bg-white/20 rounded-full mb-3"></div>
                      <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 p-4 rounded-2xl bg-white/5 border border-white/5 animate-in slide-in-from-right duration-1000 delay-300">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white"><ShieldCheck /></div>
                    <div className="flex-1">
                      <div className="h-2 w-20 bg-white/20 rounded-full mb-3"></div>
                      <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="glass p-8 rounded-[32px] border-white/5 text-center group hover:border-orange-500/30 transition-all">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <div className="text-4xl font-black text-white mb-2">{m.value}</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">{m.label}</div>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Automation Solutions.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">We leverage advanced machine learning and LLM architectures to automate the most complex business processes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <div key={i} className="glass p-10 rounded-[40px] border-white/5 hover:border-cyan-500/30 transition-all duration-500 group flex flex-col">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(sol.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{sol.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{sol.desc}</p>
                <div className="space-y-3">
                  {sol.features.map((f, idx) => (
                    <div key={idx} className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <CheckCircle size={12} className="text-cyan-500 mr-2" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specifics */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 tracking-tight">Industry <span className="text-orange-500">Use Cases</span>.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Proven impact across specialized sectors with high data-density requirements.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="glass p-8 rounded-[32px] border-white/5 hover:bg-white/5 transition-all text-center">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                {React.cloneElement(ind.icon as React.ReactElement<any>, { size: 24 })}
              </div>
              <h4 className="text-white font-bold mb-4">{ind.name}</h4>
              <div className="text-[10px] text-orange-500 font-bold uppercase tracking-widest mb-2">{ind.benefit}</div>
              <p className="text-slate-500 text-xs font-semibold">{ind.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Strategic Roadmap.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our systematic framework for zero-defect automation deployment.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-white/5 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mb-8 border-white/10 group-hover:border-orange-500 transition-all duration-500 relative bg-slate-950">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                      {s.step}
                    </div>
                    <div className="text-orange-500 group-hover:scale-110 transition-transform">
                      {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{s.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[180px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass p-16 rounded-[48px] border-orange-500/20 text-center relative overflow-hidden bg-gradient-to-br from-orange-600/5 to-transparent shadow-3xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[120px] -mr-40 -mt-40"></div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              Limited Consulting Slots Available
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Automate Your Success.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Partner with Cloud Point Solutions to build an intelligent infrastructure that scales without limits.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate(PageType.CONTACT)}
                className="btn-primary text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-950/20"
              >
                Schedule Free Consultation
              </button>
              <button 
                onClick={() => onNavigate(PageType.PRICING)}
                className="glass text-white px-12 py-5 rounded-2xl font-bold text-lg border-white/10 hover:bg-white/5"
              >
                View ROI Models
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;
