
import React from 'react';
import { 
  TrendingUp, 
  Search, 
  Share2, 
  Mail, 
  Linkedin, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Palette, 
  MousePointer2, 
  Target, 
  PieChart,
  MessageSquare,
  FileText,
  Rocket,
  Users
} from 'lucide-react';
import { PageType } from '../types';

interface DigitalMarketingProps {
  onNavigate: (page: PageType) => void;
}

const DigitalMarketing: React.FC<DigitalMarketingProps> = ({ onNavigate }) => {
  const metrics = [
    { label: "Lead Quality", value: "3.5x", icon: <Target size={20} />, desc: "Improvement in MQL to SQL conversion ratios via precision targeting." },
    { label: "ROI Growth", value: "150%", icon: <Zap size={20} />, desc: "Average increase in marketing attribution ROI for enterprise clients." },
    { label: "Brand Authority", value: "Elite", icon: <Globe size={20} />, desc: "Establishing global thought leadership in complex tech sectors." },
    { label: "Organic Reach", value: "+240%", icon: <TrendingUp size={20} />, desc: "Drastic increase in non-paid traffic through semantic SEO." }
  ];

  const serviceDeepDive = [
    {
      title: "Search Engine Optimization (SEO)",
      icon: <Search />,
      impact: "Dominating Search Real Estate",
      desc: "Our technical SEO framework ensures your platform is discoverable, authoritative, and perfectly indexed. We focus on semantic search and user intent.",
      points: [
        "Core Web Vitals & Technical Audits",
        "Semantic Keyword Architecture",
        "High-Authority Backlink Acquisition",
        "Local & Global SEO Orchestration"
      ],
      outcome: "Sustainable, non-paid traffic pipelines."
    },
    {
      title: "Social Media Marketing (SMM)",
      icon: <Share2 />,
      impact: "Building Community & Advocacy",
      desc: "Beyond posting, we build ecosystems of engagement. We create high-fidelity content that turns followers into brand advocates.",
      points: [
        "Strategic Content Calendars",
        "Visual Storytelling & Design",
        "Community & Reputation Management",
        "Influencer & Partner Collaboration"
      ],
      outcome: "Consistent brand recall and user loyalty."
    },
    {
      title: "LinkedIn Marketing (B2B Lead Gen)",
      icon: <Linkedin />,
      impact: "High-Value Pipeline Generation",
      desc: "The premier channel for B2B. We execute Account-Based Marketing (ABM) and executive positioning to win large-scale enterprise contracts.",
      points: [
        "Executive Brand Positioning",
        "Precision ABM Campaigns",
        "Lead Generation Funnels",
        "Sponsored Thought Leadership"
      ],
      outcome: "Direct access to enterprise decision-makers."
    },
    {
      title: "Content Marketing",
      icon: <FileText />,
      impact: "Establishing Thought Leadership",
      desc: "We produce high-value intellectual property that educates your market and builds trust before the first sales call.",
      points: [
        "Whitepapers & Technical Case Studies",
        "SEO-driven Blog Ecosystems",
        "Video Strategy & Production",
        "Webinar & Podcast Orchestration"
      ],
      outcome: "Positioning your firm as an industry benchmark."
    },
    {
      title: "Email Marketing & Automation",
      icon: <Mail />,
      impact: "Automated Lead Nurturing",
      desc: "Intelligent, behavior-triggered communication sequences that keep your brand top-of-mind and nurture leads toward conversion.",
      points: [
        "Behavioral Drip Campaigns",
        "CRM Integration & Segmenting",
        "Advanced Personalization AI",
        "A/B Testing & Revenue Attribution"
      ],
      outcome: "Maximizing lifetime value and lead conversion."
    },
    {
      title: "Branding & Digital Presence",
      icon: <Palette />,
      impact: "Unified Visual Identity",
      desc: "We align your digital aesthetics with your enterprise capabilities. Every pixel and word is engineered to communicate trustworthiness.",
      points: [
        "Brand Style Architecture",
        "Messaging & Tone of Voice",
        "Conversion-Optimized Landing Pages",
        "Multi-region Brand Consistency"
      ],
      outcome: "Instant credibility in competitive global markets."
    }
  ];

  const businessCases = [
    { type: "Startups", focus: "Rapid Growth & Visibility", desc: "Aggressive performance marketing and foundational SEO to secure early market share." },
    { type: "SMBs", focus: "Operational Efficiency", desc: "Automated lead nurturing and cost-effective social engagement for steady scaling." },
    { type: "Enterprises", focus: "Market Leadership", desc: "Comprehensive ABM, executive branding, and global thought leadership orchestration." }
  ];

  const implementationRoadmap = [
    { step: "01", name: "Strategic Audit", icon: <PieChart />, desc: "Holistic analysis of your current assets, competitors, and growth gaps." },
    { step: "02", name: "Growth Framework", icon: <Target />, desc: "Defining high-impact KPIs and cross-channel tactical roadmaps." },
    { step: "03", name: "Execution Sync", icon: <Zap />, desc: "Simultaneous rollout of content, campaigns, and technical optimizations." },
    { step: "04", name: "Data Optimization", icon: <BarChart3 />, desc: "Weekly tuning cycles based on real-time conversion and traffic data." },
    { step: "05", name: "Market Domination", icon: <Rocket />, desc: "Scaling high-performing channels to secure industry leadership." }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-slate-950 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-600/5 blur-[220px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                Growth Orchestration Hub
              </div>
              <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
                Digital Marketing <br /> <span className="text-gradient-orange">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-12 font-medium mx-auto lg:mx-0">
                Building a strong brand presence and driving measurable growth through enterprise-grade digital strategy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-2xl shadow-amber-950/20 group"
                >
                  Request Digital Audit <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate(PageType.CASE_STUDIES)}
                  className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold border-white/10"
                >
                  Explore Results
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="glass p-12 rounded-[48px] border-white/10 shadow-3xl bg-gradient-to-br from-amber-500/5 to-transparent">
                <div className="relative">
                  <div className="h-[420px] w-full bg-slate-900 rounded-[32px] overflow-hidden border border-white/5 relative p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div className="h-2 w-32 bg-amber-500/20 rounded-full"></div>
                      <Users size={20} className="text-amber-500" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-32 bg-gradient-to-r from-amber-500/10 to-transparent rounded-2xl border border-white/5 p-4 flex flex-col justify-end">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Conversion Velocity</div>
                        <div className="text-2xl font-black text-white">+84%</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 glass rounded-2xl border-white/10 p-4">
                          <BarChart3 size={16} className="text-amber-500 mb-2" />
                          <div className="h-1.5 w-full bg-white/5 rounded-full mb-1"></div>
                          <div className="h-1.5 w-3/4 bg-white/5 rounded-full"></div>
                        </div>
                        <div className="h-24 glass rounded-2xl border-white/10 p-4">
                          <Target size={16} className="text-amber-500 mb-2" />
                          <div className="h-1.5 w-full bg-white/5 rounded-full mb-1"></div>
                          <div className="h-1.5 w-1/2 bg-white/5 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating Tech Elements */}
                  <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-white/10 animate-bounce duration-[3000ms]">
                    <Zap size={24} className="text-amber-500" />
                  </div>
                  <div className="absolute bottom-10 -left-10 glass p-4 rounded-2xl border-white/10 animate-bounce duration-[4000ms] delay-500">
                    <MessageSquare size={24} className="text-amber-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="glass p-8 rounded-[32px] border-white/5 text-center group hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <div className="text-4xl font-black text-white mb-2">{m.value}</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">{m.label}</div>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Services */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 tracking-tight">Enterprise Growth <span className="text-amber-500">Channels</span>.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">We combine creative excellence with analytical rigor to dominate digital ecosystems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDeepDive.map((service, i) => (
              <div key={i} className="glass p-10 rounded-[40px] border-white/5 hover:border-amber-500/30 transition-all duration-500 group flex flex-col">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">{service.impact}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <div className="space-y-3 mb-8">
                  {service.points.map((p, idx) => (
                    <div key={idx} className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <CheckCircle size={12} className="text-amber-500 mr-2 flex-shrink-0" /> {p}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/5 text-[11px] font-bold text-white italic">
                   {service.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
           <h2 className="text-3xl font-heading text-white mb-6">Strategic Solutions for Every Scale.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           {businessCases.map((bc, i) => (
             <div key={i} className="glass p-10 rounded-[32px] border-white/5 text-center">
                <h4 className="text-2xl font-bold text-white mb-4">{bc.type}</h4>
                <div className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-4">{bc.focus}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{bc.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 tracking-tight">Our Delivery <span className="text-amber-500">Methodology</span>.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">A repeatable, data-backed process to ensure marketing becomes a predictable revenue engine.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-white/5 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
              {implementationRoadmap.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mb-8 border-white/10 group-hover:border-amber-500 transition-all duration-500 relative bg-slate-950">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                      {s.step}
                    </div>
                    <div className="text-amber-500 group-hover:scale-110 transition-transform">
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
          <div className="glass p-16 rounded-[48px] border-amber-500/20 text-center relative overflow-hidden bg-gradient-to-br from-amber-600/5 to-transparent shadow-3xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[120px] -mr-40 -mt-40"></div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              Confidentiality & Growth First
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Drive Your Digital ROI.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Stop guessing with your digital budget. Partner with Cloud Point Solutions to build a conversion-optimized brand ecosystem.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate(PageType.CONTACT)}
                className="btn-primary text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-950/20"
              >
                Schedule Free Growth Audit
              </button>
              <button 
                onClick={() => onNavigate(PageType.SERVICES)}
                className="glass text-white px-12 py-5 rounded-2xl font-bold text-lg border-white/10 hover:bg-white/5"
              >
                Explore Full Solutions Stack
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
