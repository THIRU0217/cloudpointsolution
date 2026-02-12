
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import ChatBot from './ChatBot';
import { PageType } from '../types';
import { Mail, MapPin, Linkedin, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const LogoIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="160 460 230 280" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <g fill="currentColor">
      <path d="M368.37,511.66c-20.89-28.25-54.45-46.61-92.21-46.61-19.32,0-37.54,4.8-53.52,13.28-35.7,18.94-60.26,56.2-61.05,99.17-.01.71-.03,1.44-.03,2.15,0,.57,0,1.15.01,1.73.29,19.26,5.39,37.39,14.15,53.26v-51.6h25.48c-.05-1.16-.08-2.32-.08-3.48s.03-2.33.08-3.51c.71-15.1,5.96-29.1,14.43-40.61,12.97-17.69,33.47-29.56,56.66-30.73,26.35-1.33,49.96,11.01,64.32,30.55,5.46,7.41,15.37,9.98,23.79,6.28,7.56-3.31,11.83-10.63,11.83-18.15,0-4.05-1.24-8.15-3.88-11.73Z" />
      <path d="M181.35,734.95h0c-10.93,0-19.78-8.86-19.78-19.78v-137.66h39.57v137.66c0,10.93-8.86,19.78-19.78,19.78Z" />
      <path d="M369.22,646.5c-2.53,3.52-5.26,6.88-8.18,10.09-20.85,23-50.94,37.51-84.32,37.67-20.77.11-40.35-5.42-57.27-15.14-2.57-1.48-4.15-4.23-4.15-7.2v-43c0-1.74,2.16-2.55,3.28-1.21,13.77,16.49,34.46,26.99,57.58,26.99,9.85,0,19.27-1.91,27.88-5.38,12.73-5.1,23.74-13.6,31.92-24.37.04-.05.08-.11.12-.16.25-.33.49-.66.73-.99,3.61-4.62,9.23-7.57,15.54-7.57,2.44,0,4.76.44,6.91,1.24.05.03.11.04.16.07.57.25,1.13.5,1.7.75.09.04.18.08.29.13,10.85,4.81,14.75,18.45,7.81,28.09Z" />
      <path d="M387.95,579.56c0,1.69-.21,3.31-.61,4.88-2.18,8.56-9.92,14.88-19.15,14.88-10.92,0-19.76-8.84-19.76-19.76,0-6.33,2.98-11.96,7.61-15.58,3.35-2.62,7.57-4.18,12.15-4.18,10.91,0,19.76,8.85,19.76,19.76Z" />
    </g>
  </svg>
);

const Footer = ({ onNavigate }: { onNavigate: (page: PageType) => void }) => (
  <footer className="bg-[#020617] border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
    {/* Background Decorative Glow */}
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none"></div>
    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
        
        {/* Brand Presence Column */}
        <div className="lg:col-span-1">
          <div className="flex items-center mb-8 space-x-4">
            <div className="w-10 h-10 bg-[#F26522] text-white rounded-xl flex items-center justify-center p-2 shadow-lg shadow-orange-500/20">
              <LogoIcon className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-tighter text-white block uppercase leading-none">CLOUDPOINT</span>
              <span className="text-[9px] text-[#F26522] font-bold tracking-[0.35em] uppercase block mt-0.5">Solutions</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium max-w-xs">
            Architecting high-performance SaaS platforms and autonomous AI workflows for the modern enterprise era.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/cloud-point-soluitons/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/30 transition-all">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Strategic Section - Reordered: Home -> Solutions -> Training -> About */}
        <div>
          <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.3em] flex items-center">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span> Strategic
          </h4>
          <ul className="space-y-4">
            {[
              { label: 'Home', page: PageType.HOME },
              { label: 'Solutions', page: PageType.SERVICES },
              { label: 'Corporate Training', page: PageType.CORP_TRAINING },
              { label: 'About Us', page: PageType.ABOUT },
            ].map((link, idx) => (
              <li key={idx}>
                <button 
                  onClick={() => onNavigate(link.page)} 
                  className="text-sm font-semibold text-slate-500 hover:text-white flex items-center group transition-colors text-left"
                >
                  <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0 text-orange-500" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.3em] flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> Support
          </h4>
          <ul className="space-y-4">
            {[
              { label: 'Contact Us', page: PageType.CONTACT },
              { label: 'Custom Training Program', page: PageType.CUSTOM_TRAINING },
              { label: 'FAQs', page: PageType.SUPPORT },
              { label: 'Privacy Policy', page: PageType.SUPPORT },
              { label: 'Terms & Conditions', page: PageType.SUPPORT }
            ].map((link, idx) => (
              <li key={idx}>
                <button 
                  onClick={() => onNavigate(link.page)} 
                  className="text-sm font-semibold text-slate-500 hover:text-white flex items-center group transition-colors text-left"
                >
                  <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0 text-blue-500" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach Out / Direct Contact */}
        <div>
          <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.3em] flex items-center">
            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-3"></span> Global Reach
          </h4>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold uppercase tracking-tight">Dubai, UAE</span>
                <span className="text-slate-500 text-[11px] font-medium leading-relaxed">Regional Headquarters – Middle East</span>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold uppercase tracking-tight">Puducherry, India</span>
                <span className="text-slate-500 text-[11px] font-medium leading-relaxed">Regional Delivery & Innovation Center</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center space-x-4">
              <Mail size={16} className="text-orange-500" />
              <span className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">info@cloudpointsolution.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">
        <p>© 2025 CLOUDPOINT Solutions Global. Intelligent Infrastructure Orchestration.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <span className="hover:text-slate-400 cursor-default transition-colors">Enterprise Grade</span>
          <span className="hover:text-slate-400 cursor-default transition-colors">Secured Assets</span>
        </div>
      </div>
    </div>
  </footer>
);

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-500 selection:text-white bg-white">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
      <ChatBot onNavigate={onNavigate} />
    </div>
  );
};

export default Layout;
