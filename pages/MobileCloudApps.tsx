
import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Cloud, 
  Code2, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Terminal,
  Database,
  Infinity as InfinityIcon,
  Search,
  PenTool,
  Rocket
} from 'lucide-react';
import { PageType } from '../types';

interface MobileCloudAppsProps {
  onNavigate: (page: PageType) => void;
}

const MobileCloudApps: React.FC<MobileCloudAppsProps> = ({ onNavigate }) => {
  const services = [
    {
      title: "Android & iOS Development",
      icon: <Smartphone />,
      desc: "High-performance native applications built with Swift and Kotlin for the most demanding user experiences.",
      features: ["Biometric Authentication", "Offline-First Logic", "Deep Device Integration"]
    },
    {
      title: "Cross-Platform Apps",
      icon: <Layers />,
      desc: "Unified codebases using Flutter and React Native to reach your audience across all platforms efficiently.",
      features: ["Single Codebase", "Near-Native Performance", "Faster Time-to-Market"]
    },
    {
      title: "Cloud-Native Web Apps",
      icon: <Globe />,
      desc: "Modern, responsive web applications engineered to scale automatically on serverless cloud architectures.",
      features: ["PWA Capabilities", "Edge Rendering", "Auto-Scaling Ready"]
    },
    {
      title: "API Development & Mesh",
      icon: <Code2 />,
      desc: "Robust, secure backend infrastructures that power your mobile and web frontends with high-speed data delivery.",
      features: ["REST/GraphQL Support", "Rate Limiting & Auth", "Microservices Design"]
    },
    {
      title: "Maintenance & Lifecycle",
      icon: <Settings />,
      desc: "Proactive monitoring, regular security patching, and feature evolution to keep your product competitive.",
      features: ["24/7 Performance Monitoring", "OS Update Compatibility", "Feature Iteration"]
    }
  ];

  const techStack = [
    {
      category: "Mobile",
      items: ["Swift / SwiftUI", "Kotlin / Jetpack Compose", "Flutter", "React Native"]
    },
    {
      category: "Frontend & Cloud Web",
      items: ["React / Next.js", "Vue.js", "WebAssembly", "TypeScript"]
    },
    {
      category: "Backend & Infrastructure",
      items: ["Node.js / Go", "AWS Lambda / Azure Functions", "Docker / Kubernetes", "GraphQL / REST"]
    }
  ];

  const processSteps = [
    { step: "01", name: "Concept Discovery", icon: <Search />, desc: "Technical feasibility study and user flow architecture." },
    { step: "02", name: "High-Fidelity Design", icon: <PenTool />, desc: "Pixel-perfect UI/UX design focused on conversion and retention." },
    { step: "03", name: "Agile Development", icon: <Code2 />, desc: "Feature-driven development with weekly sprint demonstrations." },
    { step: "04", name: "Rigorous QA & Launch", icon: <Rocket />, desc: "Automated testing and smooth deployment to App Store/Play Store." },
    { step: "05", name: "Growth & Support", icon: <InfinityIcon />, desc: "Continuous monitoring and data-driven feature enhancements." }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-slate-950 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/5 blur-[180px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-emerald-500/20 text-emerald-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                Cloud-Native Ecosystems
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.95] mb-8 tracking-tighter uppercase">
                Mobile & Cloud <br /> <span className="text-gradient-orange">Development</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-10 font-medium mx-auto lg:mx-0">
                Building scalable digital products for modern businesses in a cloud-first world.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-2xl shadow-orange-950/20 group"
                >
                  Start Your Project <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate(PageType.SERVICES)}
                  className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold border-white/10"
                >
                  View Solutions Stack
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="glass p-2 rounded-[40px] border-white/10 shadow-3xl bg-gradient-to-br from-emerald-500/5 to-transparent">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop" 
                  alt="Mobile Development Visualization" 
                  className="rounded-[32px] w-full h-auto grayscale-[20%] opacity-90"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-6 rounded-3xl border-emerald-500/20 shadow-2xl neon-glow-orange animate-pulse">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Mobile Priority</div>
                    <div className="text-lg font-black text-white">Cloud First</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Our Capabilities.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Enterprise-grade application development for a connected world.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="glass p-10 rounded-[40px] border-white/5 hover:border-emerald-500/30 transition-all duration-500 group flex flex-col">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-lg">
                {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
              <div className="space-y-3">
                {service.features.map((f, idx) => (
                  <div key={idx} className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <CheckCircle size={12} className="text-emerald-500 mr-2" /> {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Custom CTA Card */}
          <div className="glass p-10 rounded-[40px] border-dashed border-emerald-500/20 flex flex-col items-center justify-center text-center bg-gradient-to-br from-emerald-500/5 to-transparent">
            <h3 className="text-xl font-bold text-white mb-4">Enterprise Mobile Strategy?</h3>
            <p className="text-slate-400 text-sm mb-8">
              Let's architect a custom mobile solution that integrates with your legacy ERP/CRM systems.
            </p>
            <button 
              onClick={() => onNavigate(PageType.CONTACT)}
              className="btn-primary text-white px-8 py-4 rounded-2xl font-bold text-xs shadow-xl shadow-orange-950/20"
            >
              Consult an Architect
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-heading text-white mb-6 tracking-tight">Technical <span className="text-emerald-500">Excellence</span>.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-20">We use the most reliable and efficient technologies for global scale.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((category, i) => (
              <div key={i} className="glass p-8 rounded-[32px] border-white/5">
                <h4 className="text-emerald-500 font-black text-sm uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Our Engineering Lifecycle.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">From concept to production-grade deployment.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-white/5 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {processSteps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mb-8 border-white/10 group-hover:border-emerald-500 transition-all duration-500 relative bg-slate-950">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                    {s.step}
                  </div>
                  <div className="text-emerald-500 group-hover:scale-110 transition-transform">
                    {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{s.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[180px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass p-16 rounded-[48px] border-emerald-500/20 text-center relative overflow-hidden bg-gradient-to-br from-emerald-600/5 to-transparent shadow-3xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] -mr-40 -mt-40"></div>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Built for Performance.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Launch your next-generation mobile or cloud application with Cloud Point Solutions.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate(PageType.CONTACT)}
                className="btn-primary text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-950/20"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => onNavigate(PageType.PRICING)}
                className="glass text-white px-12 py-5 rounded-2xl font-bold text-lg border-white/10 hover:bg-white/5"
              >
                View Pricing Models
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileCloudApps;
