import React from 'react';
import { 
  Cpu, 
  Database, 
  Settings, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Building2,
  Users,
  Terminal,
  ShieldCheck,
  Workflow,
  ClipboardList,
  Award,
  Calendar,
  Medal,
  BarChart3,
  Code2,
  ClipboardCheck,
  Monitor,
  RefreshCcw,
  Globe
} from 'lucide-react';
import { PageType } from '../types';

interface TrainingProps {
  onNavigate: (page: PageType) => void;
}

const Training: React.FC<TrainingProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-950 animate-in fade-in duration-1000 pt-32 pb-24">
      {/* 1. Training Overview & Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-inner shadow-orange-500/10">
          Enterprise Competency Center
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter">
          Corporate <span className="text-gradient-orange">Training & Development</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
          Empowering industries, corporate teams, and colleges with future-ready skills through practical, industry-aligned training and upskilling solutions.
        </p>
      </section>

      {/* Category Selector Buttons */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => onNavigate(PageType.SAP_TRAINING)}
            className="group relative overflow-hidden bg-[#f5864c] hover:bg-[#f5864c]/90 p-8 rounded-[32px] transition-all duration-500 shadow-2xl shadow-[#f5864c]/20 flex flex-col items-center text-center border border-white/10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-all"></div>
            <Building2 size={40} className="text-white mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-black text-white uppercase tracking-tighter">SAP Training</span>
            <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest mt-2 opacity-80">Certified Learning Paths</span>
            <div className="mt-6 flex items-center text-white font-black text-[10px] uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full">
              Explore Paths <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button 
            onClick={() => onNavigate(PageType.CUSTOM_TRAINING)}
            className="group relative overflow-hidden glass hover:bg-white/5 p-8 rounded-[32px] transition-all duration-500 border border-white/10 flex flex-col items-center text-center bg-gradient-to-br from-orange-500/10 to-transparent shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-orange-500/20 transition-all"></div>
            <ClipboardList size={40} className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-black text-white uppercase tracking-tighter">Custom Program</span>
            <span className="text-[10px] text-orange-500/70 font-bold uppercase tracking-widest mt-2">Bespoke Enterprise Curriculum</span>
            <div className="mt-6 flex items-center text-orange-500 font-black text-[10px] uppercase tracking-widest border border-orange-500/20 px-4 py-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all">
              Request Proposal <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button 
            onClick={() => onNavigate(PageType.COLLEGE_TRAINING)}
            className="group relative overflow-hidden glass hover:bg-white/5 p-8 rounded-[32px] transition-all duration-500 border border-white/5 flex flex-col items-center text-center"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl -mr-16 -mt-16"></div>
            <GraduationCap size={40} className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-black text-white uppercase tracking-tighter">College Training</span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">For Academic Institutions</span>
            <div className="mt-6 flex items-center text-orange-500 font-black text-[10px] uppercase tracking-widest border border-orange-500/20 px-4 py-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all">
              Academic Hub <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-heading font-black text-white mb-6 uppercase tracking-tighter">Why Choose <span className="text-orange-500">Our Training</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">A results-driven training approach designed to bridge the gap between technical potential and organizational performance.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Expert Trainers", 
              desc: "Led by industry veterans with 10+ years of active field experience in SAP and AI.", 
              icon: <Award size={28} /> 
            },
            { 
              title: "Flexible Scheduling", 
              desc: "Adaptive learning tracks including weekday, weekend, and bespoke corporate schedules.", 
              icon: <Calendar size={28} /> 
            },
            { 
              title: "Global Certification", 
              desc: "Earn industry-recognized credentials upon successful completion of core training modules.", 
              icon: <Medal size={28} /> 
            },
            { 
              title: "Measurable ROI", 
              desc: "Track skill progression and performance lift through integrated competency analytics.", 
              icon: <BarChart3 size={28} /> 
            }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-[32px] border-white/5 group hover:border-orange-500/30 transition-all text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Training Methodology */}
      <section className="py-32 bg-slate-900/30 border-y border-white/5 mb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-heading font-black text-white mb-6 uppercase tracking-tighter">Our Training <span className="text-orange-500">Methodology</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">A hands-on, project-based learning model engineered for production-ready competency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-white/5 z-0"></div>
            
            {[
              { 
                step: "01", 
                name: "Theory", 
                desc: "Comprehensive dive into core fundamentals, from basic concepts to advanced architectural design.", 
                icon: <BookOpen size={24} /> 
              },
              { 
                step: "02", 
                name: "Practice", 
                desc: "High-intensity hands-on exercises within live sandbox environments and real-world project scenarios.", 
                icon: <Code2 size={24} /> 
              },
              { 
                step: "03", 
                name: "Collaboration", 
                desc: "Team-based work simulations that mirror actual enterprise project collaboration and delivery cycles.", 
                icon: <Users size={24} /> 
              },
              { 
                step: "04", 
                name: "Assessment", 
                desc: "Rigorous regular evaluations and detailed performance tracking to ensure skill mastery.", 
                icon: <ClipboardCheck size={24} /> 
              }
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center group relative z-10">
                <div className="w-20 h-20 glass rounded-[32px] flex items-center justify-center mb-8 border-white/10 group-hover:border-orange-500 transition-all duration-500 bg-slate-950">
                  <div className="text-orange-500 group-hover:scale-110 transition-transform">
                    {m.icon}
                  </div>
                </div>
                <div className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4">Stage {m.step}</div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{m.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold max-w-[220px]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Mode of Training Delivery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-heading font-black text-white mb-6 uppercase tracking-tighter">Mode of <span className="text-orange-500">Training Delivery</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Flexible engagement models designed to meet your organization's specific logistical and operational requirements.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-10 rounded-[40px] border-white/5 hover:border-orange-500/30 transition-all text-center">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-orange-500">
              <Monitor size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Online Training</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-semibold">
              Live, instructor-led virtual sessions with real-time interaction and full remote lab access for decentralized teams.
            </p>
          </div>

          <div className="glass p-10 rounded-[40px] border-white/5 hover:border-orange-500/30 transition-all text-center">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-orange-500">
              <Building2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Onsite Training</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-semibold">
              High-impact, in-person training delivered directly at your corporate locations or specialized classrooms for focused group learning.
            </p>
          </div>

          <div className="glass p-10 rounded-[40px] border-white/5 hover:border-orange-500/30 transition-all text-center">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-orange-500">
              <RefreshCcw size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Hybrid Training</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-semibold">
              A balanced combination of online and onsite sessions customized to optimize both flexibility and face-to-face mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Delivery Model & 4. Hands-on Labs */}
      <section className="py-32 mb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tight mb-12">Training Delivery Model</h2>
              <div className="space-y-8">
                {[
                  { title: "Instructor-Led Engagement", desc: "Interactive sessions led by certified SAP Senior Consultants with real-world implementation experience.", icon: <Users /> },
                  { title: "Project-Centric Scenarios", desc: "Training is structured around real enterprise project lifecycles rather than generic documentation.", icon: <Workflow /> },
                  { title: "Structured Timeline", desc: "Flexible tracks ranging from 4-week intensive bootcamps to 8-week phased learning schedules.", icon: <Settings /> }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-6">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">{item.title}</h4>
                      <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-12 rounded-[48px] border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-[100px] -mr-32 -mt-32"></div>
              <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tight mb-8">Hands-on Sandbox Labs</h2>
              <p className="text-slate-400 mb-10 font-medium">Participants spend 70% of their time within active enterprise-grade practice systems to ensure theoretical concepts are validated through execution.</p>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-3 text-white font-bold mb-3">
                    <Database size={18} className="text-orange-500" /> <span>SAP S/4HANA Environments</span>
                  </div>
                  <p className="text-xs text-slate-500">Fully configured sandbox instances with pre-loaded enterprise data for end-to-end process practice.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-3 text-white font-bold mb-3">
                    <Cpu size={18} className="text-orange-500" /> <span>SAP BTP Development Hubs</span>
                  </div>
                  <p className="text-xs text-slate-500">Dedicated BTP sub-accounts for practicing cloud foundry, Kyma runtime, and integration services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customization Options */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8 mb-40">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 uppercase tracking-tighter">Enterprise Customization</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">We adapt our training framework to your specific technology landscape and project phase.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Gap Analysis", desc: "Pre-training assessments to identify specific skill deficits within your team.", icon: <ShieldCheck /> },
            { title: "Role-Based", desc: "Curriculum tailored to the specific job functions (Devs vs Managers).", icon: <Users /> },
            { title: "Project Phase", desc: "Alignment with implementation stages: Blueprinting, Realization, or Go-Live.", icon: <ArrowRight /> },
            { title: "Industry Specific", desc: "Case studies and configurations relevant to your specific business sector.", icon: <Building2 /> }
          ].map((item, i) => (
            <div key={i} className="text-center p-8">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:bg-orange-600 transition-all">{item.icon}</div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">{item.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Outcomes & Skill Enablement */}
      <section className="py-32 bg-orange-600 mb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-heading font-black text-white mb-6 uppercase tracking-tighter">Operational Outcomes</h2>
              <p className="text-orange-100 text-lg mb-10 font-medium">After completing our corporate programs, your teams will transition from theoretical knowledge to production-ready competency.</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Configure end-to-end S/4HANA business processes.",
                  "Develop resilient cloud-native extensions on BTP.",
                  "Orchestrate complex system integrations.",
                  "Troubleshoot landscape-level technical errors.",
                  "Optimise system performance and governance.",
                  "Drive project milestones with technical confidence."
                ].map((outcome, i) => (
                  <div key={i} className="flex items-start space-x-3 text-white font-bold text-xs uppercase tracking-tight">
                    <CheckCircle2 size={16} className="text-orange-200 mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
               <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[48px] border border-white/20 text-center">
                  <div className="text-6xl font-black text-white mb-4">85%</div>
                  <div className="text-[10px] text-orange-200 font-black uppercase tracking-[0.3em] mb-10">Project Readiness Lift</div>
                  <button 
                    onClick={() => onNavigate(PageType.CONTACT)}
                    className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all"
                  >
                    Request Proposal
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="glass p-16 rounded-[48px] border-orange-500/20 text-center relative overflow-hidden bg-gradient-to-br from-orange-600/5 to-transparent shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-heading text-white mb-6 uppercase tracking-tighter">Enable Your SAP Workforce</h2>
          <p className="text-slate-400 text-lg mb-12">
            Speak with an SAP consultant to define your skill enablement roadmap and review enterprise pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => onNavigate(PageType.CONTACT)}
              className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-2xl shadow-orange-950/20 uppercase text-xs tracking-widest"
            >
              Consult an Architect <ArrowRight size={18} className="ml-2" />
            </button>
            <button 
              onClick={() => onNavigate(PageType.SERVICES)}
              className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold border-white/10 uppercase text-xs tracking-widest"
            >
              View Full Service Hub
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;