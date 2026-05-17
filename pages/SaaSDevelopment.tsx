
import React from 'react';
import { 
  Layers, 
  Database, 
  ShieldCheck, 
  Palette, 
  Smartphone, 
  Cloud, 
  ArrowRight, 
  Zap, 
  Lock, 
  Globe, 
  Cpu, 
  Code2, 
  Terminal, 
  Box, 
  Infinity as InfinityIcon,
  Search,
  PenTool,
  Rocket,
  LineChart
} from 'lucide-react';
import { PageType } from '../types';

interface SaaSDevelopmentProps {
  onNavigate: (page: PageType) => void;
}

const SaaSDevelopment: React.FC<SaaSDevelopmentProps> = ({ onNavigate }) => {
  const techStack = [
    {
      category: "Frontend",
      items: [
        { name: "Next.js 15", icon: <Layers size={14} /> },
        { name: "React Query", icon: <InfinityIcon size={14} /> },
        { name: "Tailwind CSS", icon: <Palette size={14} /> },
        { name: "TypeScript", icon: <Code2 size={14} /> }
      ]
    },
    {
      category: "Backend & API",
      items: [
        { name: "Node.js (NestJS)", icon: <Terminal size={14} /> },
        { name: "Golang", icon: <Cpu size={14} /> },
        { name: "Python (FastAPI)", icon: <Box size={14} /> },
        { name: "GraphQL / gRPC", icon: <Database size={14} /> }
      ]
    },
    {
      category: "Infrastructure",
      items: [
        { name: "AWS / Azure", icon: <Cloud size={14} /> },
        { name: "Kubernetes", icon: <Box size={14} /> },
        { name: "Terraform", icon: <Terminal size={14} /> },
        { name: "Cloudflare Edge", icon: <Globe size={14} /> }
      ]
    }
  ];

  const features = [
    {
      title: "Multi-Tenant Architecture",
      icon: <Layers />,
      desc: "Secure data isolation with shared compute logic for maximum resource efficiency and infinite scalability."
    },
    {
      title: "Enterprise Security",
      icon: <Lock />,
      desc: "SOC2-ready protocols, end-to-end encryption, and robust identity management (OIDC/SAML)."
    },
    {
      title: "Subscription Engine",
      icon: <LineChart />,
      desc: "Integrated billing with support for tiered pricing, usage-based models, and global multi-currency payments."
    },
    {
      title: "Headless API Mesh",
      icon: <Code2 />,
      desc: "API-first design allowing your core SaaS logic to power web, mobile, and third-party integrations seamlessly."
    },
    {
      title: "Automated Compliance",
      icon: <ShieldCheck />,
      desc: "Built-in GDPR, HIPAA, and regional data residency compliance mechanisms for global operations."
    },
    {
      title: "Real-time Analytics",
      icon: <Zap />,
      desc: "Advanced tenant-level metrics, usage patterns, and predictive churn analysis dashboards."
    }
  ];

  const processSteps = [
    { step: "01", name: "Strategic Discovery", icon: <Search />, desc: "Market fit analysis, user persona mapping, and feature prioritization for your MVP." },
    { step: "02", name: "Architecture & UX", icon: <PenTool />, desc: "Designing scalable schemas and intuitive multi-tenant workflows for high engagement." },
    { step: "03", name: "Agile Engineering", icon: <Code2 />, desc: "Rapid iterative development with automated testing and continuous integration cycles." },
    { step: "04", name: "Deployment & Launch", icon: <Rocket />, desc: "Zero-downtime blue-green deployments on optimized global cloud infrastructure." },
    { step: "05", name: "Scaling & Support", icon: <InfinityIcon />, desc: "Continuous performance monitoring, infrastructure auto-scaling, and feature evolution." }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-slate-950 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[180px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                Enterprise Product Engineering
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.95] mb-8 tracking-tighter uppercase">
                SaaS <br /> <span className="text-gradient-orange">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-10 font-medium">
                Scalable, secure, and revenue-driven software platforms built for global enterprise excellence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-2xl shadow-orange-950/20 group uppercase text-xs tracking-widest"
                >
                  Schedule Consultation <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate(PageType.PRICING)}
                  className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold border-white/10 uppercase text-xs tracking-widest"
                >
                  View Pricing
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="glass p-2 rounded-[40px] border-white/10 shadow-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3032&auto=format&fit=crop" 
                  alt="SaaS Cloud Architecture Visual" 
                  className="rounded-[32px] w-full h-[500px] object-cover grayscale-[20%] opacity-90 transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl border-orange-500/20 shadow-2xl neon-glow-orange animate-pulse">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Uptime SLA</div>
                    <div className="text-lg font-black text-white">99.99% Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Features */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 uppercase tracking-tighter">Core Infrastructure.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">Every Cloud Point SaaS product is built on a foundation of reliability, security, and performance.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="glass p-10 rounded-[32px] border-white/5 hover:border-orange-500/30 transition-all duration-500 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-8 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Visualization */}
      <section className="py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading text-white mb-6 tracking-tight uppercase tracking-tighter">Our Modern <span className="text-orange-500">SaaS Stack</span>.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-20 font-medium">We utilize cutting-edge technologies to ensure your platform is future-proof.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((category, i) => (
              <div key={i} className="glass p-8 rounded-[32px] border-white/5">
                <h4 className="text-orange-500 font-black text-sm uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white font-semibold text-sm">{item.name}</span>
                      <div className="text-slate-500">{item.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Lifecycle */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 uppercase tracking-tighter">Strategic Roadmap.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">A systematic approach to bringing complex enterprise products to market.</p>
        </div>
        
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {processSteps.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 glass rounded-[24px] flex items-center justify-center mb-8 border-white/10 group-hover:border-orange-500/50 transition-all duration-500 relative bg-slate-950">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                    {item.step}
                  </div>
                  <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{item.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[180px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass p-16 rounded-[48px] border-orange-500/20 text-center relative overflow-hidden bg-gradient-to-br from-orange-600/5 to-transparent shadow-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -mr-32 -mt-32"></div>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 uppercase tracking-tighter">Ready to scale?</h2>
            <p className="text-slate-400 text-lg mb-12 font-medium">Let's discuss how we can build your next market-leading SaaS platform.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate(PageType.CONTACT)}
                className="btn-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-950/20 uppercase text-xs tracking-widest"
              >
                Inquire Proposal
              </button>
              <button 
                onClick={() => onNavigate(PageType.SERVICES)}
                className="glass text-white px-10 py-5 rounded-2xl font-bold text-lg border-white/10 hover:bg-white/5 uppercase text-xs tracking-widest"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSDevelopment;
