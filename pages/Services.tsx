
import React from 'react';
import { 
  Bot, 
  ShieldAlert, 
  Layers, 
  Smartphone, 
  Users, 
  TrendingUp, 
  GraduationCap, 
  ArrowRight,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { PageType } from '../types';

interface ServicesProps {
  onNavigate: (page: PageType) => void;
}

const serviceCategories = [
  {
    title: "AI Agent Services for Businesses",
    icon: <Bot />,
    description: "Intelligent autonomous agents designed to transform operational efficiency across sectors.",
    features: [
      "Customer Support AI Agents",
      "Sales & Lead Qualification AI",
      "Operations & Workflow Automation",
      "Decision Intelligence & Management",
      "Education & Training AI",
      "Healthcare & Compliance Agents",
      "Custom Enterprise AI Frameworks"
    ],
    accent: "border-orange-500/30",
    link: PageType.AI_AUTOMATION
  },
  {
    title: "Cybersecurity & Compliance",
    icon: <ShieldAlert />,
    description: "Hardening your digital perimeter with enterprise-grade threat detection and mitigation.",
    features: [
      "SOC (Security Operations Center)",
      "VAPT (Vulnerability Assessment)",
      "Penetration Testing",
      "Compliance Auditing & Readiness",
      "Incident Response Planning"
    ],
    accent: "border-red-500/30",
    link: PageType.CYBERSECURITY
  },
  {
    title: "SaaS Solutions",
    icon: <Layers />,
    description: "End-to-end cloud product engineering from ideation to multi-tenant deployment.",
    features: [
      "SaaS Product Development",
      "White-label SaaS Platforms",
      "Multi-tenant Cloud Architecture",
      "SaaS Security & Compliance",
      "Subscription & Licensing Models"
    ],
    accent: "border-blue-500/30",
    link: PageType.SAAS_DEV
  },
  {
    title: "SAP S/4HANA & BTP Training",
    icon: <Cpu />,
    description: "Enterprise SAP upskilling and university programs for the next generation of ERP consultants.",
    features: [
      "S/4HANA Module Certifications",
      "SAP BTP Extension Suite",
      "Instructor-led College Labs",
      "Corporate Migration Workshops",
      "Hands-on Sandbox Environments"
    ],
    accent: "border-yellow-500/30",
    link: PageType.SAP_TRAINING
  },
  {
    title: "Mobile & Cloud Apps",
    icon: <Smartphone />,
    description: "Next-gen application development focusing on performance, scalability, and UX.",
    features: [
      "Android & iOS App Development",
      "Cross-Platform (Flutter / React Native)",
      "Cloud-Native Web Applications",
      "API Development & Integration",
      "Maintenance & Support Lifecycle"
    ],
    accent: "border-emerald-500/30",
    link: PageType.MOBILE_CLOUD_APPS
  },
  {
    title: "IT Resource Outsourcing",
    icon: <Users />,
    description: "Bridging the talent gap with dedicated engineering teams and managed IT resources.",
    features: [
      "Contract-based Strategic Staffing",
      "Dedicated Engineering Teams",
      "Managed Technical Resources",
      "Offshore Development Centers",
      "Technical Leadership Outsourcing"
    ],
    accent: "border-purple-500/30",
    link: PageType.IT_OUTSOURCING
  },
  {
    title: "Digital Marketing Services",
    icon: <TrendingUp />,
    description: "Strategic digital presence management to drive growth and brand authority.",
    features: [
      "SEO, SMM & Content Marketing",
      "Email & Lead Gen Campaigns",
      "High-Impact LinkedIn Marketing",
      "Brand Identity & Positioning",
      "Digital Presence Orchestration"
    ],
    accent: "border-amber-500/30",
    link: PageType.DIGITAL_MARKETING
  },
  {
    title: "Corporate Training",
    icon: <GraduationCap />,
    description: "Empowering the next generation of tech leaders through industry-vetted programs.",
    features: [
      "University & College Tech Programs",
      "Corporate Upskilling (AI, Cloud, Cyber)",
      "Digital Transformation Training",
      "Customized L&D Solutions",
      "STEM, AI & Robotics Lab Management"
    ],
    accent: "border-cyan-500/30",
    link: PageType.CORP_TRAINING
  }
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-1000 bg-slate-950 pt-32 pb-24">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-inner shadow-orange-500/10">
          <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span> Our Solutions Stack
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter">
          Engineered for the <br /> <span className="text-gradient-orange">Intelligence Era.</span>
        </h1>
        <h2 className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Cloud Point Solutions provides a comprehensive ecosystem of services designed to accelerate digital transformation, ensure security, and empower global workforces.
        </h2>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((service, idx) => (
          <div 
            key={idx} 
            className={`glass p-10 rounded-[32px] border ${service.accent} hover:border-orange-500/50 transition-all duration-500 group flex flex-col`}
          >
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg">
              {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-orange-500 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {service.description}
            </p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start space-x-3 text-slate-300 text-xs font-semibold">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onNavigate(service.link)}
              className="mt-auto w-full py-4 rounded-2xl bg-white/5 hover:bg-orange-500 text-white font-bold text-xs flex items-center justify-center transition-all group-hover:shadow-lg group-hover:shadow-orange-900/20"
            >
              Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
        
        {/* Custom CTA Card */}
        <div className="glass p-10 rounded-[32px] border-dashed border-orange-500/20 flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-500/5 to-transparent">
          <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-500 border border-orange-500/20 animate-pulse">
            <Bot size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Have a unique challenge?</h3>
          <p className="text-slate-400 text-sm mb-8">
            Our strategic architects are ready to build a custom solution tailored to your specific enterprise architecture.
          </p>
          <button 
            onClick={() => onNavigate(PageType.CONTACT)}
            className="btn-primary text-white px-10 py-4 rounded-2xl font-bold text-sm shadow-2xl shadow-orange-950/20"
          >
            Request Custom Proposal
          </button>
        </div>
      </section>

      {/* Bottom Impact Summary */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mt-32 text-center">
        <div className="glass p-16 rounded-[48px] border-orange-500/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-heading text-white mb-6">Partnering with Global Enterprises</h2>
          <p className="text-slate-400 text-lg mb-12">
            Cloud Point Solutions operates across our Regional Headquarters in Dubai (UAE) and our Regional Delivery & Innovation Center in Puducherry (India), delivering high-performance IT ecosystems that bridge the gap between human potential and AI capability.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-black text-white mb-1">99.9%</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">SLA Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">24/7</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">SOC Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">50+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">AI Agents Shipped</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">10k+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Talents Trained</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
