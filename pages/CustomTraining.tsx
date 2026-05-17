
import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Users,
  Mail,
  Phone,
  Settings,
  ClipboardList,
  Cpu,
  Bot,
  BarChart3,
  Wifi,
  Palette,
  TrendingUp,
  ChevronLeft,
  Cloud
} from 'lucide-react';
import { PageType } from '../types';

interface Domain {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
}

// Fix: Defined CustomTrainingProps interface to resolve the "Cannot find name 'CustomTrainingProps'" error
interface CustomTrainingProps {
  onNavigate: (page: PageType) => void;
}

const domains: Domain[] = [
  { 
    id: 'sap', 
    title: 'SAP Ecosystem', 
    description: 'Master the world\'s leading ERP system and gain industry-ready skills for global corporate roles.',
    icon: <Cpu />, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50' 
  },
  { 
    id: 'ai', 
    title: 'Artificial Intelligence', 
    description: 'Learn to build intelligent systems and autonomous agents using cutting-edge machine learning models.',
    icon: <Bot />, 
    color: 'text-orange-600', 
    bg: 'bg-orange-50' 
  },
  { 
    id: 'cloud', 
    title: 'Cloud Computing', 
    description: 'Master modern cloud infrastructures and deployment strategies for scalable enterprise solutions.',
    icon: <Cloud />, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50' 
  },
  { 
    id: 'data', 
    title: 'Data Analytics', 
    description: 'Transform raw data into actionable business intelligence through advanced visualization and analysis.',
    icon: <BarChart3 />, 
    color: 'text-emerald-600', 
    bg: 'bg-emerald-50' 
  },
  { 
    id: 'iot', 
    title: 'Internet of Things', 
    description: 'Connect the physical and digital worlds by building smart, sensor-driven systems and networks.',
    icon: <Wifi />, 
    color: 'text-cyan-600', 
    bg: 'bg-cyan-50' 
  },
  { 
    id: 'robotics', 
    title: 'Robotics Engineering', 
    description: 'Design and program autonomous robotic systems for industrial automation and future tech applications.',
    icon: <Settings />, 
    color: 'text-red-600', 
    bg: 'bg-red-50' 
  },
  { 
    id: 'uiux', 
    title: 'UI/UX Design', 
    description: 'Master the art of creating intuitive, beautiful digital experiences that users love to interact with.',
    icon: <Palette />, 
    color: 'text-purple-600', 
    bg: 'bg-purple-50' 
  },
  { 
    id: 'marketing', 
    title: 'Digital Marketing', 
    description: 'Master modern growth strategies, from SEO to social media, to build powerful online brand authority.',
    icon: <TrendingUp />, 
    color: 'text-amber-600', 
    bg: 'bg-amber-50' 
  },
];

const CustomTraining: React.FC<CustomTrainingProps> = ({ onNavigate }) => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDomainSelect = (domainId: string) => {
    setSelectedDomain(domainId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center pt-24 px-6">
        <div className="max-w-2xl w-full bg-white p-16 rounded-[48px] text-center border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-[100px] -mr-32 -mt-32"></div>
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8 text-orange-500 border border-orange-100">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-4xl font-heading font-black text-slate-900 mb-6 uppercase tracking-tighter">Syllabus Requested</h2>
          <p className="text-slate-500 text-lg mb-12 font-medium">
            Your customized roadmap for <span className="text-slate-900 font-bold">{domains.find(d => d.id === selectedDomain)?.title}</span> has been prioritized. Our architects will contact you with the draft syllabus.
          </p>
          <button 
            onClick={() => onNavigate(PageType.HOME)}
            className="btn-primary text-white px-10 py-5 rounded-3xl font-black uppercase text-xs tracking-widest shadow-xl shadow-orange-950/20"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`animate-in fade-in duration-1000 pt-32 pb-24 min-h-screen transition-colors duration-500 ${!selectedDomain ? 'bg-white' : 'bg-slate-950'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!selectedDomain ? (
          /* STAGE 1: Domain Selection - Light UI */
          <div className="animate-in slide-in-from-bottom duration-700">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-orange-100">
                Custom Syllabus Builder
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter uppercase">
                Explore Our <br /> <span className="text-gradient-orange">Expertise Domains</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                Select a domain below to build your specialized roadmap. Each program is engineered for immediate internship readiness and corporate success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domains.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => handleDomainSelect(domain.id)}
                  className="group relative flex flex-col items-start text-left p-10 bg-white rounded-[40px] border border-slate-100 hover:border-orange-200 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-900/5 hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`w-16 h-16 ${domain.bg} ${domain.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    {React.cloneElement(domain.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{domain.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                    {domain.description}
                  </p>
                  <div className="mt-auto flex items-center text-orange-500 font-black text-[10px] uppercase tracking-widest group-hover:gap-2 transition-all">
                    Build Syllabus <ArrowRight size={14} className="ml-1" />
                  </div>
                </button>
              ))}
              
              {/* Additional custom info card */}
              <div className="lg:col-span-1 p-10 rounded-[40px] border border-dashed border-slate-200 flex flex-col items-start justify-center text-left bg-slate-50/50">
                <ClipboardList className="text-slate-400 mb-6" size={32} />
                <h3 className="text-lg font-bold text-slate-400 mb-3 uppercase tracking-tight">Custom Technology</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  Need training on a specific stack not listed above? Select any domain and mention it in the custom request field.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* STAGE 2: Requirement Form - Dark UI (Matching existing site theme) */
          <div className="animate-in slide-in-from-right duration-500">
            <button 
              onClick={() => setSelectedDomain(null)}
              className="flex items-center space-x-2 text-slate-500 hover:text-white transition-colors mb-12 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-black uppercase tracking-widest">Back to Domain Selection</span>
            </button>

            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="sticky top-40">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                  Step 2: Specific Requirements
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
                  Custom Syllabus for <br /> <span className="text-gradient-orange">{domains.find(d => d.id === selectedDomain)?.title}</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-medium mb-10">
                  Provide your project context or team skill gaps below. Our technical leads will draft a syllabus that addresses your specific production goals.
                </p>
                <div className="space-y-4">
                  {[
                    "Industry-specific case studies included.",
                    "Production-grade sandbox environment labs.",
                    "SME-led project guidance for students/staff.",
                    "Outcome-based evaluation roadmap."
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3 text-slate-300 text-sm font-semibold">
                      <CheckCircle2 size={18} className="text-orange-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-10 md:p-16 rounded-[48px] border-white/10 shadow-3xl bg-slate-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-[100px] -mr-32 -mt-32"></div>
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Contact Person</label>
                      <div className="relative">
                        <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Organization</label>
                      <div className="relative">
                        <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input required type="text" placeholder="Institution/Firm" className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Work Email</label>
                      <div className="relative">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input required type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input required type="tel" placeholder="+..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Syllabus Requirements</label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder={`Mention specific topics or versions for ${domains.find(d => d.id === selectedDomain)?.title} training...`}
                      className="w-full bg-white/5 border border-white/10 rounded-[32px] px-8 py-6 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="btn-primary w-full text-white font-black py-6 rounded-3xl transition-all shadow-2xl shadow-orange-950/20 flex items-center justify-center text-sm uppercase tracking-[0.25em]"
                  >
                    Request Bespoke Syllabus <ArrowRight size={18} className="ml-3" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomTraining;
