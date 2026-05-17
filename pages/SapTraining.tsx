
import React from 'react';
import { 
  Cpu, 
  Layers, 
  Database, 
  Terminal, 
  Settings, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Code2, 
  Zap,
  Cloud,
  Globe,
  ShieldCheck,
  Server,
  Box,
  PieChart,
  Lock,
  Search,
  Building2
} from 'lucide-react';
import { PageType } from '../types';

interface SapTrainingProps {
  onNavigate: (page: PageType) => void;
}

const SapTraining: React.FC<SapTrainingProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-950 animate-in fade-in duration-1000 pt-32 pb-24">
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-inner shadow-orange-500/10">
          Corporate Enablement Center
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
          SAP <span className="text-gradient-orange">Training Programs</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
          Elite technical enablement for modern enterprises. We provide specialized training paths focused on the two core pillars of the SAP ecosystem: S/4HANA for digital operations and BTP for digital innovation.
        </p>
      </section>

      {/* Category Selection Redirection (Back to Corporate) */}
      <section className="max-w-4xl mx-auto px-6 mb-32 flex justify-center">
        <button 
          onClick={() => onNavigate(PageType.CORP_TRAINING)}
          className="group glass hover:bg-white/5 px-8 py-4 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all flex items-center space-x-3 shadow-xl"
        >
          <Building2 size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Switch to Corporate L&D Hub</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* 2. Main Programs Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32 mb-40">
        
        {/* SECTION 1: SAP S/4HANA Training Program */}
        <section id="s4hana" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-950/40">
                  <Database size={32} />
                </div>
                <h2 className="text-4xl font-heading font-black text-white mb-6 uppercase tracking-tighter">SAP S/4HANA <br />Training Program</h2>
                <div className="h-1 w-20 bg-orange-600 mb-8"></div>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  The definitive path for mastering SAP's next-generation ERP. Focused on transforming legacy business processes into intelligent, real-time operational workflows.
                </p>
                <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="btn-primary text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-xl flex items-center"
                >
                  Enroll Your Team <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-12">
              <div className="glass p-10 rounded-[40px] border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Globe size={20} className="text-orange-500 mr-3" /> Training Overview
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our corporate-focused S/4HANA program covers everything from navigation and core architectural concepts to advanced configuration for enterprise implementations. We specialize in upskilling functional and technical consultants for Greenfield, Brownfield, and Selective Data Transition projects.
                </p>
              </div>

              {/* Curriculum Matrix - S/4HANA */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Functional Block */}
                <div className="glass p-8 rounded-3xl border-white/5 bg-white/[0.02]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500">
                      <Workflow size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">Functional Modules</h4>
                  </div>
                  <ul className="space-y-3">
                    {["Financial Accounting (FI/CO)", "Sales & Distribution (SD)", "Materials Management (MM)", "Production Planning (PP)", "Extended Warehouse Mgmt (EWM)", "Quality Management (QM)"].map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-400 font-medium">
                        <CheckCircle2 size={14} className="text-orange-500 mr-3 mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Block */}
                <div className="glass p-8 rounded-3xl border-white/5 bg-white/[0.02]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500">
                      <Terminal size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">Technical Modules</h4>
                  </div>
                  <ul className="space-y-3">
                    {["ABAP on HANA Development", "SAP Fiori / UI5 Design", "OData & CDS View Services", "HANA Database Administration", "S/4HANA Technical Conversion", "System Landscape Mgmt"].map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-400 font-medium">
                        <CheckCircle2 size={14} className="text-orange-500 mr-3 mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialized Block */}
                <div className="md:col-span-2 glass p-8 rounded-3xl border-white/5 bg-white/[0.02]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500">
                      <Box size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">Specialized & Cloud Solutions</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      {["SAP Central Finance", "SAP Group Reporting", "SAP BPC (Planning)"].map((item, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-400 font-medium">
                          <CheckCircle2 size={14} className="text-orange-500 mr-3 mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-3">
                      {["SAP Signavio (Process Mining)", "Sustainability Footprint Mgmt", "Public vs Private Cloud Ops"].map((item, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-400 font-medium">
                          <CheckCircle2 size={14} className="text-orange-500 mr-3 mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* SECTION 2: SAP BTP Training Program */}
        <section id="btp" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row-reverse gap-16">
            <div className="lg:w-1/3 text-right flex flex-col items-end">
              <div className="sticky top-32">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-950/40">
                  <Cloud size={32} />
                </div>
                <h2 className="text-4xl font-heading font-black text-white mb-6 uppercase tracking-tighter">SAP BTP <br />Training Program</h2>
                <div className="h-1 w-20 bg-orange-600 mb-8 ml-auto"></div>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Master the innovation platform for the intelligent enterprise. Learn to extend, integrate, and build cloud-native applications that transcend the ERP core.
                </p>
                <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="btn-primary text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-xl flex items-center"
                >
                  Consult an Architect <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-12">
              <div className="glass p-10 rounded-[40px] border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Cpu size={20} className="text-orange-500 mr-3" /> Training Overview
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  SAP Business Technology Platform (BTP) is the foundation of side-by-side extensibility. Our program empowers developers and architects to build modular, clean-core solutions using modern cloud-native principles.
                </p>
              </div>

              {/* Curriculum Matrix - BTP */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Application Development Block */}
                <div className="glass p-8 rounded-3xl border-white/5 bg-white/[0.02]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500">
                      <Code2 size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">App Development</h4>
                  </div>
                  <ul className="space-y-3">
                    {["CAP (Cloud App Programming)", "RAP (RESTful ABAP Programming)", "Kyma & Cloud Foundry", "Business Application Studio", "SAP UI5 & Fiori Elements", "BTP Mobile Services"].map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-400 font-medium">
                        <CheckCircle2 size={14} className="text-orange-500 mr-3 mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Integration & Automation Block */}
                <div className="glass p-8 rounded-3xl border-white/5 bg-white/[0.02]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500">
                      <Zap size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">Integration & Automation</h4>
                  </div>
                  <ul className="space-y-3">
                    {["BTP Integration Suite (Cloud PI)", "API Management & Open Connect", "SAP Build Process Automation", "Event Mesh Architecture", "Cloud Connector Security", "SAP Graph Integration"].map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-400 font-medium">
                        <CheckCircle2 size={14} className="text-orange-500 mr-3 mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Data & Analytics Block */}
                <div className="glass p-8 rounded-3xl border-white/5 bg-white/[0.02]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500">
                      <PieChart size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">Data & Analytics</h4>
                  </div>
                  <ul className="space-y-3">
                    {["SAP Datasphere (Data Warehouse)", "SAP Analytics Cloud (SAC)", "HANA Cloud Database Ops", "Predictive Analytics & AI Core", "Master Data Governance (MDG)"].map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-400 font-medium">
                        <CheckCircle2 size={14} className="text-orange-500 mr-3 mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Security & Platform Block */}
                <div className="glass p-8 rounded-3xl border-white/5 bg-white/[0.02]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500">
                      <Lock size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">Security & Platform</h4>
                  </div>
                  <ul className="space-y-3">
                    {["Identity Authentication (IAS)", "Identity Provisioning (IPS)", "BTP Global Account Admin", "Subaccount & Space Setup", "Destination & Trust Config"].map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-400 font-medium">
                        <CheckCircle2 size={14} className="text-orange-500 mr-3 mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 3. Hands-on Learning Section */}
      <section className="py-32 bg-slate-900/40 border-y border-white/5 mb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-600 mb-8 border border-orange-600/20">
                <Server size={28} />
              </div>
              <h2 className="text-4xl font-heading font-black text-white uppercase tracking-tight mb-8">Production-Grade <br />Sandbox Labs</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Theoretical knowledge is the first step, but execution is what drives value. Our SAP training programs include extensive time in active enterprise environments.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 glass rounded-3xl border-white/5">
                   <Zap size={20} className="text-orange-500 mb-4" />
                   <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Live S/4HANA Labs</h4>
                   <p className="text-[10px] text-slate-500 font-bold leading-relaxed">Full access to latest 2023 release with industry-specific mock data.</p>
                </div>
                <div className="p-6 glass rounded-3xl border-white/5">
                   <ShieldCheck size={20} className="text-orange-500 mb-4" />
                   <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">BTP Development Hub</h4>
                   <p className="text-[10px] text-slate-500 font-bold leading-relaxed">Dedicated sub-accounts to practice Kyma, CAP, and Integration Suite.</p>
                </div>
              </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-orange-600/5 blur-[120px] rounded-full"></div>
               <div className="relative glass p-4 rounded-[48px] border-white/10 shadow-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop" 
                    alt="Digital Infrastructure" 
                    className="rounded-[36px] grayscale-[20%] opacity-80 h-[400px] w-full object-cover"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-32">
        <div className="glass p-16 rounded-[48px] border-orange-500/20 text-center relative overflow-hidden bg-gradient-to-br from-orange-600/5 to-transparent shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-heading text-white mb-6 uppercase tracking-tighter">Enable Your Intelligent Enterprise</h2>
          <p className="text-slate-400 text-lg mb-12">
            Define your team's SAP roadmap with our senior consultants and technical architects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => onNavigate(PageType.CONTACT)}
              className="btn-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-xl shadow-orange-950/20 uppercase text-xs tracking-widest"
            >
              Consult an Architect <ArrowRight size={20} className="ml-2" />
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

export default SapTraining;
