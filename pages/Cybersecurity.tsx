
import React from 'react';
import { 
  ShieldCheck, 
  Eye, 
  Lock, 
  AlertTriangle, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Activity, 
  ShieldAlert, 
  Search, 
  Zap, 
  Globe,
  Database,
  Terminal,
  Server,
  Cloud,
  FileSearch,
  Users
} from 'lucide-react';
import { PageType } from '../types';

interface CybersecurityProps {
  onNavigate: (page: PageType) => void;
}

const Cybersecurity: React.FC<CybersecurityProps> = ({ onNavigate }) => {
  const metrics = [
    { label: "Monitoring", value: "24/7", icon: <Eye size={20} />, desc: "Continuous surveillance of your digital infrastructure." },
    { label: "Response Time", value: "< 15min", icon: <Zap size={20} />, desc: "Average time to contain critical security threats." },
    { label: "Compliance", value: "100%", icon: <FileText size={20} />, desc: "Regulatory alignment across SOC2, GDPR, and ISO." },
    { label: "Asset Protection", value: "Global", icon: <Globe size={20} />, desc: "Protection spanning multi-cloud and on-premise." }
  ];

  const coreServices = [
    {
      title: "SOC (Security Operations Center)",
      icon: <ShieldAlert />,
      desc: "Our 24/7 SOC acts as your first line of defense, utilizing advanced SIEM and SOAR technologies to proactively hunt and mitigate threats.",
      features: [
        "Real-time Incident Response",
        "Threat Intelligence & Hunting",
        "SIEM & Log Management",
        "Vulnerability Patch Management",
        "Continuous Security Reporting"
      ]
    },
    {
      title: "VAPT Services",
      icon: <Search />,
      desc: "Comprehensive vulnerability assessment and penetration testing to identify and remediate weaknesses before they are exploited.",
      features: [
        "Network Penetration Testing",
        "Web/Mobile App Security Audits",
        "Cloud Security Configuration Review",
        "Prioritized Risk Remediation",
        "Post-remediation Validation"
      ]
    },
    {
      title: "Compliance & Governance",
      icon: <FileText />,
      desc: "Helping enterprises achieve and maintain global security certifications through rigorous internal audits and strategic roadmaps.",
      features: [
        "ISO 27001 Certification Readiness",
        "SOC 2 Type I & II Auditing",
        "GDPR & Data Privacy Compliance",
        "HIPAA Security Standards",
        "Business Continuity Planning"
      ]
    }
  ];

  const implementationFlow = [
    { step: "01", name: "Initial Assessment", icon: <FileSearch />, desc: "Baseline audit of current security posture and compliance gaps." },
    { step: "02", name: "Threat Modeling", icon: <Search />, desc: "Identifying critical assets and potential attack vectors for your specific industry." },
    { step: "03", name: "Security Engineering", icon: <Terminal />, desc: "Deployment of monitoring agents, firewalls, and encryption protocols." },
    { step: "04", name: "Red Team Testing", icon: <ShieldAlert />, desc: "Simulated attacks to validate the effectiveness of the security controls." },
    { step: "05", name: "Managed Operations", icon: <Activity />, desc: "Ongoing 24/7 surveillance, incident response, and compliance reporting." }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-slate-950 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-red-600/5 blur-[220px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-red-500/20 text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                Enterprise Resilience Hub
              </div>
              <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
                Cybersecurity <br /> <span className="text-gradient-orange">& Compliance</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-12 font-medium mx-auto lg:mx-0">
                Protecting your digital assets with enterprise-grade security and uncompromising resilience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-2xl shadow-red-950/20 group"
                >
                  Request Security Audit <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate(PageType.SERVICES)}
                  className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold border-white/10"
                >
                  View SOC Capabilities
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="glass p-12 rounded-[48px] border-white/10 shadow-3xl bg-gradient-to-br from-red-500/5 to-transparent flex items-center justify-center">
                 <div className="relative">
                    <ShieldCheck size={280} className="text-red-600/20 animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Lock size={80} className="text-white" />
                    </div>
                    {/* Floating Tech Elements */}
                    <div className="absolute top-0 right-0 glass p-4 rounded-2xl border-white/10 animate-bounce duration-[3000ms]">
                       <Server size={24} className="text-red-500" />
                    </div>
                    <div className="absolute bottom-10 -left-10 glass p-4 rounded-2xl border-white/10 animate-bounce duration-[4000ms] delay-500">
                       <Cloud size={24} className="text-red-500" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Impact Metrics */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="glass p-8 rounded-[32px] border-white/5 text-center group hover:border-red-500/30 transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-red-500 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <div className="text-4xl font-black text-white mb-2">{m.value}</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">{m.label}</div>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Depth */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Defense-in-Depth.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Our multi-layered security framework ensures that even if one control fails, your enterprise remains protected.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreServices.map((service, i) => (
              <div key={i} className="glass p-10 rounded-[40px] border-white/5 hover:border-red-500/30 transition-all duration-500 group flex flex-col">
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <div className="space-y-4">
                  {service.features.map((f, idx) => (
                    <div key={idx} className="flex items-start text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <CheckCircle size={12} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Roadmap */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 tracking-tight">Security <span className="text-red-500">Lifecycle</span>.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">A systematic approach to engineering long-term enterprise resilience.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-white/5 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {implementationFlow.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mb-8 border-white/10 group-hover:border-red-500 transition-all duration-500 relative bg-slate-950">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                    {s.step}
                  </div>
                  <div className="text-red-500 group-hover:scale-110 transition-transform">
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
          <div className="glass p-16 rounded-[48px] border-red-500/20 text-center relative overflow-hidden bg-gradient-to-br from-red-600/5 to-transparent shadow-3xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 blur-[120px] -mr-40 -mt-40"></div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              Confidentiality Guaranteed
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Secure Your Future.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Don't wait for a breach to happen. Partner with our security architects to build a zero-trust enterprise environment.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate(PageType.CONTACT)}
                className="btn-primary text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-red-950/20"
              >
                Schedule Security Audit
              </button>
              <button 
                onClick={() => onNavigate(PageType.PRICING)}
                className="glass text-white px-12 py-5 rounded-2xl font-bold text-lg border-white/10 hover:bg-white/5"
              >
                Compliance Packages
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
