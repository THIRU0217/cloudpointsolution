
import React from 'react';
import { PageType } from '../types';
import { Target, Lightbulb, ArrowRight } from 'lucide-react';

const About: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => (
  <div className="animate-in fade-in duration-700 bg-slate-950">
    {/* Hero Section */}
    <section className="pt-40 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-inner shadow-orange-500/10">
          Engineering the Next Era
        </div>
        <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 leading-tight tracking-tighter uppercase">
          Architecting the <span className="text-gradient-orange">Future</span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed font-medium">
          Cloud Point Solutions (CPS) helps organizations and institutions adopt modern technologies such as AI, SAP, SaaS, and Cloud platforms to improve efficiency and build future-ready teams. We bridge the gap between advanced technology and real-world business needs through practical solutions, training, and engineering expertise.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 items-stretch mb-40 px-6">
        <div className="glass p-12 rounded-[40px] border-white/5 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl -mr-16 -mt-16 group-hover:bg-orange-600/10 transition-all"></div>
          <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8">
            <Target size={28} />
          </div>
          <h3 className="text-3xl font-heading font-bold text-white mb-6 uppercase tracking-tight">Our Mission</h3>
          <p className="text-slate-400 leading-relaxed text-lg font-medium">
            To make enterprise-grade technology, automation, and training accessible to businesses, professionals, and students, enabling continuous innovation and digital excellence.
          </p>
        </div>
        <div className="glass p-12 rounded-[40px] border-white/5 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl -mr-16 -mt-16 group-hover:bg-orange-600/10 transition-all"></div>
          <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8">
            <Lightbulb size={28} />
          </div>
          <h3 className="text-3xl font-heading font-bold text-white mb-6 uppercase tracking-tight">Our Vision</h3>
          <p className="text-slate-400 leading-relaxed text-lg font-medium">
            To become a trusted global partner in enterprise technology and training, setting standards for how people and intelligent systems work together in the modern digital workplace.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-32 max-w-4xl mx-auto px-6">
        <div className="glass p-16 rounded-[48px] border-orange-500/20 text-center relative overflow-hidden bg-gradient-to-br from-orange-600/5 to-transparent shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -mr-32 -mt-32"></div>
          <h2 className="text-4xl font-heading text-white mb-6 uppercase tracking-tighter">Ready to Partner?</h2>
          <p className="text-slate-400 text-lg mb-12 font-medium">
            Let's discuss how our global expertise can drive your digital transformation initiatives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => onNavigate(PageType.CONTACT)}
              className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-2xl shadow-orange-950/20 uppercase text-xs tracking-widest"
            >
              Contact Our Team <ArrowRight size={20} className="ml-2" />
            </button>
            <button 
              onClick={() => onNavigate(PageType.SERVICES)}
              className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold border-white/10 uppercase text-xs tracking-widest"
            >
              Our Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
