
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageType } from '../types';

interface ContactSuccessProps {
  onNavigate: (page: PageType) => void;
}

const ContactSuccess: React.FC<ContactSuccessProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in zoom-in duration-700 pt-40 pb-24 bg-slate-950 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full px-6 lg:px-8">
        <div className="glass p-12 md:p-16 rounded-[48px] border-orange-500/20 text-center relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-orange-500/30">
              <CheckCircle2 size={40} className="text-orange-500" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white leading-none mb-6 tracking-tighter uppercase">
              Inquiry form submitted
            </h1>
            
            <p className="text-lg text-slate-400 max-w-md mx-auto leading-relaxed mb-12 font-medium">
              A representative will contact you within 24 business hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate(PageType.HOME)}
                className="btn-primary text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl shadow-orange-950/20 flex items-center justify-center group"
              >
                Return Home <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => onNavigate(PageType.SERVICES)}
                className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-black text-[11px] border-white/10 uppercase tracking-widest"
              >
                Explore More Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSuccess;
