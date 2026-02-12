import React from 'react';
import { 
  GraduationCap, 
  Rocket, 
  Search, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Briefcase,
  Users,
  Code2,
  FileSearch,
  Building2,
  MessageSquare,
  Settings,
  Monitor,
  Zap
} from 'lucide-react';
import { PageType } from '../types';

interface CollegeTrainingProps {
  onNavigate: (page: PageType) => void;
}

const CollegeTraining: React.FC<CollegeTrainingProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-950 animate-in fade-in duration-1000 pt-32 pb-24">
      {/* 1. Academic Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-cyan-500/20 text-cyan-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
          Next-Gen Academic Excellence
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter">
          Industry-Oriented <br /> <span className="text-gradient-orange">College Training</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
          Empowering students, faculty, and institutions with the technical expertise and corporate readiness required to dominate the modern workforce. We bridge the gap between academic theory and real-world employment.
        </p>
      </section>

      {/* Category Selection Redirection (Back to Corporate) */}
      <section className="max-w-4xl mx-auto px-6 mb-32 flex justify-center">
        <button 
          onClick={() => onNavigate(PageType.CORP_TRAINING)}
          className="group glass hover:bg-white/5 px-8 py-4 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all flex items-center space-x-3"
        >
          <Building2 size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Switch to Corporate L&D Hub</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* 5 Pillars of the College Program */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
        
        {/* 1. Skill Development */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 mb-8 border border-cyan-500/20">
              <Code2 size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mb-6">1. Skill Development</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We provide students with practical, industry-relevant technical skills through structured training paths. Our curriculum is not just theoretical; it's designed to mirror actual job roles in SAP, AI, and SaaS.
            </p>
            <ul className="space-y-4">
              {[
                "Hands-on Labs: Practice on real-world tools and environments.",
                "Guided Practice: Mentors walk students through complex scenarios.",
                "Industry Alignment: Skills mapped to current high-demand job roles.",
                "Certification Prep: Readying students for global tech credentials."
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 size={18} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-1 rounded-[48px] border-white/10 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop" 
              alt="Students in Lab" 
              className="rounded-[44px] w-full h-[400px] object-cover grayscale-[30%] opacity-90"
            />
          </div>
        </div>

        {/* 2. Placement Training */}
        <div className="grid lg:grid-cols-2 gap-20 items-center lg:flex-row-reverse">
          <div className="lg:order-2">
            <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8 border border-orange-500/20">
              <Users size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mb-6">2. Placement Training</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Facing the corporate world requires more than just code. We prepare students to be "Corporate Ready" from day one, giving them the confidence to ace any interview.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Aptitude & Logic", icon: <Target size={18} /> },
                { title: "Communication Skills", icon: <MessageSquare size={18} /> },
                { title: "Resume Building", icon: <FileSearch size={18} /> },
                { title: "Mock Interviews", icon: <Users size={18} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-orange-500">{item.icon}</div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-12 rounded-[48px] border-white/10 lg:order-1 bg-gradient-to-br from-orange-500/5 to-transparent flex items-center justify-center">
            <div className="text-center">
               <div className="text-6xl font-black text-white mb-2">90%</div>
               <div className="text-[10px] text-orange-500 font-bold uppercase tracking-[0.3em]">Corporate Readiness Score</div>
            </div>
          </div>
        </div>

        {/* 3. Job Assistance */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20">
              <Briefcase size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mb-6">3. Job Assistance</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We bridge the gap between academic learning and employment. Our team provides ongoing career guidance and connects students with the right opportunities.
            </p>
            <ul className="space-y-4">
              {[
                "Career Guidance: Personalized mentorship for every student.",
                "Job Awareness: Regular updates on campus & off-campus drives.",
                "Internship Support: Connect with companies for practical exposure.",
                "Alumni Mentorship: Learn from those who have already succeeded."
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>
            <div className="relative glass p-10 rounded-[48px] border-white/10 text-center">
              <Rocket size={64} className="mx-auto text-emerald-500 mb-6 animate-bounce duration-[4000ms]" />
              <h4 className="text-white font-black text-xl mb-4">Launch Your Career</h4>
              <p className="text-slate-500 text-sm">Access our global network of hiring partners across India and the UAE.</p>
            </div>
          </div>
        </div>

        {/* 4. Industrial Guidance for Projects */}
        <div className="bg-slate-900/40 p-12 md:p-20 rounded-[64px] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/5 blur-[120px] -mr-40 -mt-40"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
            <div className="max-w-xl">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20">
                <Settings size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mb-6">4. Industrial Project Guidance</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We guide students to build real-world projects that impress recruiters. We move beyond simple assignments to enterprise-grade developments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Problem Statements", "Design Approach", "SDLC Process", "Documentation"].map((tag, i) => (
                  <div key={i} className="px-4 py-2 glass rounded-full border-white/5 text-[10px] font-black text-white uppercase tracking-widest text-center">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="glass p-8 rounded-[32px] border-white/10 space-y-4">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Project Checklist</div>
                {["Industry Standard Tech Stack", "Agile Development Flow", "Comprehensive Case Study", "Interview Ready Pitch"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-white font-bold text-xs uppercase tracking-tight">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5. Internship Program */}
        <div className="grid lg:grid-cols-2 gap-20 items-center lg:flex-row-reverse">
          <div className="lg:order-2">
            <div className="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-600 mb-8 border border-orange-600/20">
              <Monitor size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mb-6">5. Internship Program</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
              Students gain hands-on industry experience by working on live projects under the guidance of senior professionals.
            </p>
            <div className="glass p-8 rounded-[32px] border-white/5 space-y-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                The internship focuses on practical skill application, real-world problem solving, and understanding industry workflows throughout the program duration.
              </p>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Zap size={20} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Learning Outcome</div>
                  <div className="text-xs font-bold text-white uppercase tracking-tight">Direct exposure to enterprise production standards</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:order-1 relative">
             <div className="absolute inset-0 bg-orange-600/5 blur-[100px] rounded-full"></div>
             <div className="relative glass p-1 rounded-[48px] border-white/10 overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop" 
                 alt="Collaboration in Corporate Office" 
                 className="rounded-[44px] w-full h-[400px] object-cover grayscale-[20%] opacity-90"
               />
             </div>
          </div>
        </div>

      </section>

      {/* Outcome Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">Program Impact</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { label: "Hands-on Hours", val: "200+" },
            { label: "Placement Rate", val: "88%" },
            { label: "Students Trained", val: "2000+" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 glass rounded-[32px] border-white/5">
              <div className="text-4xl font-black text-white mb-2">{stat.val}</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="glass p-16 rounded-[48px] border-cyan-500/20 text-center relative overflow-hidden bg-gradient-to-br from-cyan-600/5 to-transparent shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-heading text-white mb-6 uppercase tracking-tighter">Empower Your Students</h2>
          <p className="text-slate-400 text-lg mb-12">
            Let's discuss how we can integrate Cloud Point's industry programs into your college curriculum.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => onNavigate(PageType.CONTACT)}
              className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-xl shadow-cyan-950/20 uppercase text-xs tracking-widest"
            >
              Partner with Us <ArrowRight size={20} className="ml-2" />
            </button>
            <button 
              onClick={() => onNavigate(PageType.SERVICES)}
              className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold border-white/10 uppercase text-xs tracking-widest"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeTraining;