
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Minimize2, User, Mail, Building2, ClipboardList, Phone, CheckCircle2, Shield } from 'lucide-react';
import { sendMessageToAI } from '../services/geminiService';
import { ChatMessage, LeadEntry, PageType } from '../types';
import { apiService } from '../services/apiService';

interface ChatBotProps {
  onNavigate?: (page: PageType) => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadForm, setIsLeadForm] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Cloud Point Solutions. I am your AI Assistant. How can I help you with our Enterprise AI or Training solutions today?', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lead Form State
  const [leadData, setLeadData] = useState<Partial<LeadEntry>>({
    name: '',
    email: '',
    phone: '+',
    organization: '',
    interest: 'SaaS Development',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDispatching, setIsDispatching] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isLeadForm, isOpen]);

  const handleSend = async () => {
    const text = input.trim().toLowerCase();
    if (!text || isLoading) return;

    // Direct Admin Command check
    if ((text === 'admin' || text === 'admin portal' || text === 'portal') && onNavigate) {
      setMessages(prev => [...prev, { role: 'user', text: input, timestamp: new Date() }]);
      setMessages(prev => [...prev, { role: 'model', text: 'Administrative request recognized. Redirecting you to the Secure Hub...', timestamp: new Date() }]);
      setInput('');
      setTimeout(() => {
        onNavigate(PageType.ADMIN_PORTAL);
        setIsOpen(false);
      }, 1000);
      return;
    }

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const aiResponse = await sendMessageToAI(input, history);

    setMessages(prev => [...prev, { role: 'model', text: aiResponse, timestamp: new Date() }]);
    setIsLoading(false);

    // Auto-trigger lead form if the AI asks for details or mentions enrollment/pricing
    const triggerWords = ['email', 'details', 'pricing', 'enroll', 'contact', 'demo', 'proposal'];
    if (triggerWords.some(word => aiResponse.toLowerCase().includes(word))) {
      setTimeout(() => setIsLeadForm(true), 1500);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDispatching(true);
    
    const finalLead = {
      firstName: leadData.name || 'Anonymous',
      lastName: '',
      email: leadData.email || 'No email',
      phone: leadData.phone || 'N/A',
      organization: leadData.organization || 'N/A',
      requirement: leadData.interest || 'General',
      message: leadData.message || 'Captured via ChatBot Concierge'
    };

    try {
      // Execute Secure Relay (This triggers the email to admin)
      await apiService.submitContactForm(finalLead);
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsLeadForm(false);
        setMessages(prev => [...prev, { role: 'model', text: 'Thank you! Your requirements have been synced with our Enterprise Delivery Desk. We will reach out shortly.', timestamp: new Date() }]);
        setIsDispatching(false);
      }, 2000);
    } catch (err) {
      alert("Relay error. Please check your connection.");
      setIsDispatching(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="w-80 md:w-[400px] h-[600px] glass rounded-[32px] flex flex-col shadow-3xl border border-white/10 overflow-hidden animate-in zoom-in duration-300 origin-bottom-right bg-slate-900/95 backdrop-blur-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#020617] to-orange-950/20 p-6 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                 <Bot size={18} className="text-white" />
              </div>
              <div>
                 <span className="font-bold text-white uppercase tracking-widest text-[10px] block">CPS AI Assistant</span>
                 <div className="flex items-center space-x-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Active Now</span>
                 </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors p-1">
               <Minimize2 size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {isLeadForm ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500">
                    <ClipboardList size={24} />
                  </div>
                  <h3 className="text-white font-bold uppercase tracking-tight">Sync Requirements</h3>
                  <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1">Direct Delivery Desk Relay</p>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                      <input 
                        required 
                        value={leadData.name} 
                        onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors" 
                        placeholder="Name" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-2">Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                      <input 
                        required 
                        type="email"
                        value={leadData.email} 
                        onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors" 
                        placeholder="email@company.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-2">Organization</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                      <input 
                        required 
                        value={leadData.organization} 
                        onChange={(e) => setLeadData({...leadData, organization: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors" 
                        placeholder="Company Name" 
                      />
                    </div>
                  </div>
                  
                  <button 
                    disabled={isDispatching}
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all shadow-xl shadow-orange-500/20 disabled:opacity-50 flex items-center justify-center"
                  >
                    {isDispatching ? 'Dispatching...' : 'Sync Requirements'}
                    <Send size={14} className="ml-2" />
                  </button>
                  
                  <button 
                    type="button"
                    onClick={() => setIsLeadForm(false)}
                    className="w-full text-slate-500 hover:text-white text-[9px] font-bold uppercase tracking-widest transition-colors py-2"
                  >
                    Return to Chat
                  </button>
                </form>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-orange-500 text-white rounded-tr-none' 
                      : 'bg-white/5 text-slate-300 border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl rounded-tl-none flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          {!isLeadForm && (
            <div className="p-6 border-t border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="How can we help you today?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors pr-14"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white hover:bg-orange-600 transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-orange-500/40 hover:scale-110 transition-transform hover:bg-orange-600 group"
        >
          <MessageSquare className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
