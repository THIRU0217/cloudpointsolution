
import React from 'react';
import { 
  Users, 
  Briefcase, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  UserCheck, 
  Terminal, 
  Building2, 
  Award, 
  Clock, 
  TrendingUp,
  Search,
  Settings,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import { PageType } from '../types';

interface ITOutsourcingProps {
  onNavigate: (page: PageType) => void;
}

const ITOutsourcing: React.FC<ITOutsourcingProps> = ({ onNavigate }) => {
  const metrics = [
    { label: "Talent Pool", value: "10k+", icon: <Users size={20} />, desc: "Access to elite, pre-vetted engineering professionals." },
    { label: "Time-to-Hire", value: "7 Days", icon: <Clock size={20} />, desc: "Drastic reduction in recruitment and onboarding cycles." },
    { label: "Cost Efficiency", value: "45%", icon: <TrendingUp size={20} />, desc: "Average savings on operational and overhead costs." },
    { label: "Retention Rate", value: "92%", icon: <UserCheck size={20} />, desc: "Consistent project continuity and long-term stability." }
  ];

  const coreOfferings = [
    {
      title: "Contract-based Strategic Staffing",
      icon: <Briefcase />,
      desc: "Flexible, on-demand technical resources to handle seasonal spikes or specific short-term project requirements.",
      benefits: ["Scale up/down instantly", "Zero long-term liability", "Expert niche skills"]
    },
    {
      title: "Dedicated Engineering Teams",
      icon: <Terminal />,
      desc: "A full-stack squad that operates as a seamless extension of your in-house engineering culture.",
      benefits: ["Deep cultural alignment", "End-to-end project ownership", "Continuous productivity"]
    },
    {
      title: "Managed Technical Resources",
      icon: <Settings />,
      desc: "We take full responsibility for the performance and output of specific technical functions within your stack.",
      benefits: ["Output-based SLAs", "Proactive oversight", "Reduced management overhead"]
    },
    {
      title: "Offshore Development Centers (ODC)",
      icon: <Globe />,
      desc: "Turnkey, strategically located R&D centers in India and UAE to drive global development 24/7.",
      benefits: ["Follow-the-sun cycles", "Infrastructure-as-a-Service", "Local compliance handled"]
    },
    {
      title: "Technical Leadership Outsourcing",
      icon: <Award />,
      desc: "Fractional CTOs and Solution Architects to provide high-level strategic guidance for your product roadmap.",
      benefits: ["Elite architectural insight", "Interim leadership", "Budget-optimized seniority"]
    }
  ];

  const engagementModels = [
    { name: "Staff Augmentation", desc: "Augment your existing team with specialized talent on a time-and-material basis." },
    { name: "Project-Based", desc: "Clearly defined scope and deliverables managed by our internal project managers." },
    { name: "Managed Services", desc: "Long-term partnership where we manage entire departments or technology silos." }
  ];

  const implementationRoadmap = [
    { step: "01", name: "Needs Discovery", icon: <Search />, desc: "Mapping the required tech stack and cultural profile." },
    { step: "02", name: "Strategic Sourcing", icon: <Users />, desc: "Curating a shortlist of top 1% talent from our global network." },
    { step: "03", name: "Rigorous Vetting", icon: <ShieldCheck />, desc: "Multi-stage technical and psychometric evaluation." },
    { step: "04", name: "Rapid Onboarding", icon: <Rocket />, desc: "Integration into your tools, culture, and security protocols." },
    { step: "05", name: "Performance Mgmt", icon: <TrendingUp />, desc: "Continuous feedback loops and resource optimization." }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-slate-950 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/5 blur-[220px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-purple-500/20 text-purple-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                Global Talent Orchestration
              </div>
              <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
                IT & Manpower <br /> <span className="text-gradient-orange">Outsourcing</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-12 font-medium mx-auto lg:mx-0">
                Bridging the global talent gap with elite engineering teams and managed IT resources. Build your dream team in days, not months.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-2xl shadow-purple-950/20 group"
                >
                  Request Resource Plan <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate(PageType.CAREERS)}
                  className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold border-white/10"
                >
                  Join Our Elite Squad
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="glass p-12 rounded-[48px] border-white/10 shadow-3xl bg-gradient-to-br from-purple-500/5 to-transparent">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                       <div className="h-48 glass rounded-3xl border-white/10 flex items-center justify-center animate-pulse">
                          <Users size={64} className="text-purple-600/30" />
                       </div>
                       <div className="h-32 glass rounded-3xl border-white/10 p-6">
                          <div className="w-12 h-2 bg-purple-500 rounded-full mb-4"></div>
                          <div className="w-full h-2 bg-white/5 rounded-full mb-2"></div>
                          <div className="w-3/4 h-2 bg-white/5 rounded-full"></div>
                       </div>
                    </div>
                    <div className="pt-12 space-y-6">
                       <div className="h-32 glass rounded-3xl border-white/10 p-6">
                          <div className="w-16 h-2 bg-purple-500 rounded-full mb-4"></div>
                          <div className="w-full h-2 bg-white/5 rounded-full mb-2"></div>
                          <div className="w-1/2 h-2 bg-white/5 rounded-full"></div>
                       </div>
                       <div className="h-48 glass rounded-3xl border-white/10 flex items-center justify-center animate-pulse delay-700">
                          <Globe size={64} className="text-purple-600/30" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Efficiency */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="glass p-8 rounded-[32px] border-white/5 text-center group hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <div className="text-4xl font-black text-white mb-2">{m.value}</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">{m.label}</div>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Offerings */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Talent Solutions Catalog.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Enterprise-grade IT outsourcing tailored for rapid innovation and operational efficiency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreOfferings.map((offering, i) => (
              <div key={i} className="glass p-10 rounded-[40px] border-white/5 hover:border-purple-500/30 transition-all duration-500 group flex flex-col">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(offering.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{offering.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{offering.desc}</p>
                <div className="space-y-3 mt-auto border-t border-white/5 pt-6">
                  {offering.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <CheckCircle size={12} className="text-purple-500 mr-2 flex-shrink-0" /> {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* CTA Card */}
            <div className="glass p-10 rounded-[40px] border-dashed border-purple-500/20 flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-500/5 to-transparent group">
              <Building2 size={48} className="text-purple-600/30 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Custom Scale?</h3>
              <p className="text-slate-500 text-sm mb-8">Let's design a hybrid delivery model that perfectly fits your unique business architecture.</p>
              <button onClick={() => onNavigate(PageType.CONTACT)} className="text-purple-500 font-bold flex items-center hover:text-white transition-colors">
                Book Talent Consultation <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 tracking-tight">Flexible <span className="text-purple-500">Engagement</span>.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Engagement frameworks designed for startups, scale-ups, and global conglomerates.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {engagementModels.map((model, i) => (
            <div key={i} className="glass p-10 rounded-[32px] border-white/5 text-center hover:bg-white/5 transition-all">
               <h4 className="text-xl font-bold text-white mb-4">{model.name}</h4>
               <p className="text-slate-500 text-sm leading-relaxed">{model.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Strategic Onboarding.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Our systematic approach to talent deployment ensures immediate value and zero technical friction.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-white/5 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
              {implementationRoadmap.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mb-8 border-white/10 group-hover:border-purple-500 transition-all duration-500 relative bg-slate-950">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                      {s.step}
                    </div>
                    <div className="text-purple-500 group-hover:scale-110 transition-transform">
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
          <div className="glass p-16 rounded-[48px] border-purple-500/20 text-center relative overflow-hidden bg-gradient-to-br from-purple-600/5 to-transparent shadow-3xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[120px] -mr-40 -mt-40"></div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              Bridge the Talent Gap Today
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Scale Your Ambition.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Stop letting open roles dictate your innovation cycles. Partner with Cloud Point to access the world's most capable technical professionals.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate(PageType.CONTACT)}
                className="btn-primary text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-950/20"
              >
                Get Custom Talent Plan
              </button>
              <button 
                onClick={() => onNavigate(PageType.SERVICES)}
                className="glass text-white px-12 py-5 rounded-2xl font-bold text-lg border-white/10 hover:bg-white/5"
              >
                View Full Services Hub
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITOutsourcing;
