
import React, { useState } from 'react';
import { Mail, MapPin, Send, Globe, Phone, Building2 } from 'lucide-react';
import { PageType } from '../types';
import { apiService } from '../services/apiService';

interface ContactProps {
  onNavigate: (page: PageType) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+',
    organization: '',
    requirement: 'SaaS Product Development',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'dispatching'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('dispatching');

    try {
      await apiService.submitContactForm(formData);
      onNavigate(PageType.CONTACT_SUCCESS);
    } catch (error) {
      alert("Relay error. Please check your internet connection.");
      setStatus('idle');
    }
  };

  return (
    <div className="animate-in fade-in duration-700 pt-32 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            Connect With Cloud Point
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
            Start the <span className="text-gradient-orange">Conversation.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Your inquiry is sent directly to our <b>Enterprise Delivery Desk</b> for immediate professional review.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="glass p-10 md:p-16 rounded-[48px] border-white/5 shadow-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">First Name</label>
                  <input required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Last Name</label>
                  <input required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Surname" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="email@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="+..." />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Company / Institution</label>
                <div className="relative">
                  <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input required value={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Organization Name" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Service Required</label>
                <select value={formData.requirement} onChange={(e) => setFormData({...formData, requirement: e.target.value})} className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option>SaaS Product Development</option>
                  <option>AI Automation</option>
                  <option>Cybersecurity</option>
                  <option>IT Outsourcing</option>
                  <option>Training Program</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">How can we help?</label>
                <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={3} className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Message details..."></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'dispatching'}
                className="btn-primary w-full text-white font-black py-6 rounded-3xl transition-all shadow-2xl flex items-center justify-center text-sm uppercase tracking-[0.2em] disabled:opacity-70"
              >
                {status === 'idle' ? 'Submit' : 'Submitting...'}
                <Send size={18} className="ml-3" />
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div className="glass p-10 rounded-[40px] border-white/5">
               <div className="flex items-start space-x-6">
                  <MapPin className="text-orange-500 shrink-0" />
                  <div>
                     <h4 className="text-white font-bold mb-2">Dubai, UAE</h4>
                     <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">Regional Headquarters – Middle East</p>
                  </div>
               </div>
            </div>
            
            <div className="glass p-10 rounded-[40px] border-white/5">
               <div className="flex items-start space-x-6">
                  <MapPin className="text-orange-500 shrink-0" />
                  <div>
                     <h4 className="text-white font-bold mb-2">Puducherry, India</h4>
                     <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">Regional Delivery & Innovation Center</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
