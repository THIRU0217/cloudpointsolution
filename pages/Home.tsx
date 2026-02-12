
import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Rocket, Shield, Globe, Users, Layers, Award, Target, Cpu } from 'lucide-react';
import { PageType } from '../types';

export interface HomeProps {
  onNavigate: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [statementIndex, setStatementIndex] = useState(0);
  
  const statements = [
    "We develop and deliver scalable technology solutions with industry-ready training for modern enterprises.",
    "We architect high-performance SaaS platforms and AI automation workflows for world-class enterprises."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % statements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* 1. HOME SECTION (Hero) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-36 pb-20 md:pt-48 md:pb-28 lg:pt-52">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-orange-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-orange-900/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F26522 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <div className="mb-10 animate-in slide-in-from-left duration-700">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 text-[#F26522] text-[10px] font-black tracking-[0.2em] uppercase border border-orange-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#F26522] mr-2.5 animate-pulse"></span> Enterprise Grade AI
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-slate-900 leading-[0.95] mb-12 tracking-tighter uppercase">
              Build the <br /><span className="text-gradient-orange">Intelligent</span> <br />Future.
            </h1>
            <div className="min-h-[140px] md:min-h-[100px] mb-14">
              <p key={statementIndex} className="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
                {statements[statementIndex]}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8">
              <button onClick={() => onNavigate(PageType.SERVICES)} className="btn-primary text-white px-12 py-6 rounded-2xl font-black flex items-center justify-center transition-all shadow-2xl shadow-orange-600/20 group uppercase text-[12px] tracking-widest">
                Explore Solutions <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => onNavigate(PageType.CONTACT)} className="bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-900 px-12 py-6 rounded-2xl font-black flex items-center justify-center transition-all uppercase text-[12px] tracking-widest shadow-sm">
                Book a Demo
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative bg-slate-100 rounded-[3.5rem] p-4 border border-slate-200 shadow-2xl transform hover:rotate-1 transition-transform duration-1000">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3032&auto=format&fit=crop" alt="AI System Visualization" className="rounded-[3rem] w-full h-[700px] object-cover mix-blend-multiply opacity-95 shadow-inner" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS SECTION (Services Grid) */}
      <section className="py-44 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-slate-900 mb-8 tracking-tight uppercase tracking-tighter">Strategic Solutions.</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium">Our methodology combines rigorous engineering with creative AI implementation to deliver world-class ROI.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Rocket />, title: "SaaS Ecosystems", desc: "We build multi-tenant architectures designed for massive scale, low latency, and global compliance." },
              { icon: <Bot />, title: "Cognitive AI", desc: "Custom-trained LLMs and autonomous agents tailored to your unique enterprise logic and data privacy." },
              { icon: <Shield />, title: "Bank-Grade Security", desc: "Every line of code is audited for security, ensuring SOC2-ready platforms and data encryption." },
              { icon: <Globe />, title: "Global Scale", desc: "Strategically located in Puducherry and Dubai to serve global markets with 24/7 technical delivery." },
              { icon: <Users />, title: "Workforce Prep", desc: "Intensive corporate training programs to upskill your teams in SAP, AI, and modern tech stacks." },
              { icon: <Layers />, title: "Hybrid Cloud", desc: "Optimized multi-cloud deployment across AWS, Azure, and private infrastructures for maximum resilience." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-14 rounded-[3.5rem] border border-slate-100 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-3 group shadow-sm hover:shadow-2xl">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-12 text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 36 })}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRAINING SECTION (New Preview Section) */}
      <section className="py-44 bg-slate-950 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-[#F26522] text-[10px] font-black tracking-[0.2em] uppercase border border-orange-500/20 mb-8">
                Corporate Enablement
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black mb-10 tracking-tighter uppercase leading-none">
                Upskill for the <br /><span className="text-gradient-orange">Next Era.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                Bridge the technical gap with our world-class SAP Technical Hub and AI Workforce prep programs. Designed for production-ready competency.
              </p>
              <div className="space-y-6 mb-14">
                {[
                  { icon: <Cpu size={20} />, text: "SAP S/4HANA & BTP Technical Training" },
                  { icon: <Award size={20} />, text: "AI Agent Engineering Certifications" },
                  { icon: <Target size={20} />, text: "Enterprise Placement Prep for Professionals" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="text-[#F26522]">{item.icon}</div>
                    <span className="text-slate-200 font-bold uppercase tracking-widest text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onNavigate(PageType.CORP_TRAINING)}
                className="btn-primary text-white px-10 py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all shadow-xl shadow-orange-500/20 group"
              >
                View Training Hub <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="glass p-8 rounded-[3.5rem] border-white/5 bg-white/5 backdrop-blur-3xl">
                <div className="aspect-square bg-slate-900 rounded-[2.5rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop" alt="Corporate Training" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION (Visionary Summary) */}
      <section className="py-44 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-slate-900 mb-12 tracking-tight uppercase tracking-tighter">Architecting the Future.</h2>
            <p className="text-slate-500 text-2xl font-medium leading-relaxed mb-16">
              Cloud Point Solutions (CPS) helps organizations adopt modern technologies such as AI, SAP, SaaS, and Cloud platforms to improve efficiency and build future-ready teams.
            </p>
            <div className="grid sm:grid-cols-2 gap-10 text-left mb-20">
              <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                <h4 className="text-slate-900 font-black uppercase tracking-tighter text-2xl mb-4">Our Mission</h4>
                <p className="text-slate-500 font-medium">To make enterprise-grade technology and training accessible to businesses, enabling continuous innovation and digital excellence.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                <h4 className="text-slate-900 font-black uppercase tracking-tighter text-2xl mb-4">Our Vision</h4>
                <p className="text-slate-500 font-medium">To become a trusted global partner in enterprise technology, setting standards for how people and intelligent systems work together.</p>
              </div>
            </div>
            <button 
              onClick={() => onNavigate(PageType.ABOUT)}
              className="text-[#F26522] font-black uppercase tracking-widest text-xs flex items-center justify-center mx-auto group"
            >
              Full Corporate Profile <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
