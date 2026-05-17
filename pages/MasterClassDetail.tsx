
import React, { useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, Clock, Download, Globe, GraduationCap, 
  HelpCircle, Layout, MessageSquare, Monitor, Rocket, Shield, 
  Star, Target, Terminal, Trophy, Users, Zap, X, Palette, Sparkles,
  Settings, BrainCircuit, BarChart3, Cpu
} from 'lucide-react';
import { PageType } from '../types';
import { courses } from './MasterClass';
import EnrollmentForm from '../components/EnrollmentForm';

interface CourseDetailProps {
  courseId: string;
  onNavigate: (page: PageType) => void;
}

interface SyllabusModule {
  title: string;
  topics: string[];
}

interface CourseFullDetail {
  overview: string;
  skillsCovered: string[];
  tools: string[];
  syllabus: SyllabusModule[];
  projects: string[];
  careerOpportunities: string[];
  certification: string;
  testimonials: { name: string; role: string; comment: string }[];
  faqs: { question: string; answer: string }[];
}

const courseDetailsData: Record<string, CourseFullDetail> = {
  'ui-ux-mastery': {
    overview: 'Elevate your design career by mastering elite UI/UX workflows enhanced by generative AI. This intensive program covers the complete product design lifecycle, from cognitive research to design system orchestration.',
    skillsCovered: ['Cognitive User Research', 'AI-Driven Wireframing', 'Design System Architecture', 'Predictive Layout Generation', 'Visual Continuity Systems', 'Accessibility Compliance'],
    tools: ['Figma AI', 'Uizard', 'Framer AI', 'Galileo AI', 'ChatGPT', 'Midjourney'],
    syllabus: [
      { title: 'Module 1: AI-Driven Cognitive Research', topics: ['Empathetic Persona Generation', 'Automated Competitive Landscapes', 'AI-Assisted User Journey Mapping'] },
      { title: 'Module 2: High-Performance Prototyping', topics: ['Prompt-to-Product Workflows', 'Interactive Logic with Framer AI', 'Design Token Governance'] },
      { title: 'Module 3: Enterprise Design Systems', topics: ['Architecting Scalable UI Kits', 'AI-Powered Asset Optimization', 'Cross-Platform Consistency'] },
      { title: 'Module 4: Professional Handover', topics: ['Developer Collaboration Workflows', 'Case Study Narrative Design', 'Executive Portfolio Strategy'] }
    ],
    projects: ['Enterprise SaaS Dashboard', 'AI-First Mobile Ecosystem', 'Global Platform Redesign'],
    careerOpportunities: ['Senior Product Designer', 'Experience Architect', 'UI Engineering Lead', 'Design Operations Director'],
    certification: 'Executive Certification in AI-Powered Product Design.',
    testimonials: [
      { name: 'Arjun K.', role: 'Senior Designer', comment: 'The AI workflows presented here are game-changing for design velocity.' }
    ],
    faqs: [
      { question: 'Is prior Figma knowledge required?', answer: 'We focus on high-end architectural patterns; therefore, intermediate Figma familiarity is highly recommended.' }
    ]
  },
  'graphic-design-ai': {
    overview: 'Redefine visual storytelling. This master class provides a deep dive into AI-enhanced branding and automated assets production, reaching towards 10x creative efficiency.',
    skillsCovered: ['Generative Branding Architecture', 'AI Image Synthesis', 'High-End Prompt Engineering', 'Creative Asset Scaling', 'Visual Narrative Orchestration'],
    tools: ['Canva AI', 'Adobe Firefly', 'Midjourney', 'Leonardo AI', 'Photoshop AI', 'Illustrator'],
    syllabus: [
      { title: 'Module 1: Generative Design Foundations', topics: ['Advanced Diffusion Model Mastery', 'Style Transfer for Enterprise Branding', 'Consistent Character Generation'] },
      { title: 'Module 2: Strategic Branding Systems', topics: ['AI-Assisted Brand Identity Design', 'Dynamic Color Theory Protocols', 'Automated Brand Guideline Engines'] },
      { title: 'Module 3: Industrial Creative Production', topics: ['Global Campaign Scaling', 'AI-Driven Retouching Workflows', 'High-Resolution Asset Synthesis'] }
    ],
    projects: ['Global Brand Identity Kit', 'AI-Integrated Ad Campaign', 'Enterprise Creative Asset Pack'],
    careerOpportunities: ['Creative Director', 'Brand Strategy Lead', 'AI Visual Identity Specialist', 'Marketing Production Lead'],
    certification: 'Advanced Professional Certification in AI-Driven Graphic Design.',
    testimonials: [
      { name: 'Meera S.', role: 'Creative Lead', comment: 'We significantly reduced turnaround times by implementing these elite AI creative workflows.' }
    ],
    faqs: [
      { question: 'Are these tools suitable for high-end print?', answer: 'Yes, we cover upscaling and vectorization techniques for professional print production.' }
    ]
  },
  'sap-training': {
    overview: 'Master the backbone of global enterprise operations. Our industry-aligned SAP training bridges technical proficiency with business strategy for ERP excellence.',
    skillsCovered: ['Enterprise ERP Implementation', 'Business Process Engineering', 'SAP System Governance', 'Strategic Database Management', 'Landscape Architecture'],
    tools: ['SAP BASIS', 'SAP ABAP', 'SAP FICO', 'SAP MM', 'SAP SD', 'SAP HANA'],
    syllabus: [
      { title: 'Module 1: Enterprise ERP Architecture', topics: ['Industrial SAP Ecosystems', 'System Landscape Orchestration', 'Cloud Migration Strategies'] },
      { title: 'Module 2: Technical Excellence', topics: ['Advanced BASIS Administration', 'ABAP Development Lifecycle', 'Database Performance Tuning'] },
      { title: 'Module 3: Functional Intelligence', topics: ['Strategic Financials (FICO)', 'Procurement Lifecycle (MM)', 'Global Sales Orchestration (SD)'] }
    ],
    projects: ['SAP System Architecture Design', 'End-to-End ERP Implementation', 'Enterprise Security Governance'],
    careerOpportunities: ['SAP Solution Architect', 'ERP Project Manager', 'Lead SAP Consultant', 'Business Integration Analyst'],
    certification: 'Certified Enterprise SAP Integration Professional.',
    testimonials: [
      { name: 'Vikram R.', role: 'SAP Lead', comment: 'The focus on SAP HANA architectural patterns was exceptionally valuable for my career.' }
    ],
    faqs: [
      { question: 'Do you provide SAP server access?', answer: 'Yes, we provide hands-on access to a professional laboratory environment for real-time practice.' }
    ]
  },
  'data-science-ai': {
    overview: 'Strategic data science for the AI-first era. This program covers advanced statistical modeling and the deployment of production-grade AI systems.',
    skillsCovered: ['Industrial Machine Learning', 'Deep Learning Architectures', 'Advanced Predictive Modeling', 'Neural Network Development', 'MLOps Lifecycle'],
    tools: ['Python', 'TensorFlow', 'Scikit-Learn', 'Jupyter', 'OpenAI API', 'Hugging Face'],
    syllabus: [
      { title: 'Module 1: Enterprise Data Engineering', topics: ['Automated ETL Pipelines', 'Advanced Statistical Inference', 'Data Governance Frameworks'] },
      { title: 'Module 2: Advanced Machine Learning', topics: ['Ensemble Learning Strategies', 'Hyper-parameter Optimization', 'Explainable AI (XAI)'] },
      { title: 'Module 3: Neural Architectures & AI', topics: ['Natural Language Understanding', 'Vision-Based Intelligence', 'LLM Fine-Tuning Protocols'] }
    ],
    projects: ['Enterprise AI Chatbot', 'High-Frequency Predictive Model', 'Deep Learning Recommendation Engine'],
    careerOpportunities: ['Lead Data Scientist', 'AI Solutions Architect', 'Machine Learning Lead', 'Senior AI Engineer'],
    certification: 'Executive Master Class Certification in Advanced AI & Data Science.',
    testimonials: [
      { name: 'James L.', role: 'AI Lead', comment: 'The focus on deploying production-ready models is what sets this course apart.' }
    ],
    faqs: [
      { question: 'Is prior coding experience mandatory?', answer: 'Yes, intermediate Python proficiency is required as we dive directly into advanced architectural concepts.' }
    ]
  },
  'data-analytics': {
    overview: 'Bridge the gap between data and strategy. Learn to build high-performance analytics pipelines and interactive intelligence dashboards for measurable ROI.',
    skillsCovered: ['Intelligence Dashboard Design', 'Enterprise SQL Orchestration', 'Business Data Modeling', 'Automated Reporting Engines', 'Python for Analytics'],
    tools: ['Power BI', 'Python', 'Pandas', 'NumPy', 'Excel', 'SQL'],
    syllabus: [
      { title: 'Module 1: SQL & Data Warehousing', topics: ['Complex Data Modeling', 'Optimized Query Architectures', 'Enterprise Data Integration'] },
      { title: 'Module 2: Advanced Analytics with Python', topics: ['Statistical Wrangling with Pandas', 'Financial Forecasting Engines', 'Automated Data Cleansing'] },
      { title: 'Module 3: Strategic Business Intelligence', topics: ['Executive Dashboard Design', 'DAX Advanced Patterns', 'Strategic Narrative Data Storytelling'] }
    ],
    projects: ['Global Sales Intelligence Hub', 'Financial KPI Analytics System', 'Supply Chain Automation Tracker'],
    careerOpportunities: ['BI Solutions Architect', 'Principal Data Analyst', 'Strategic Operations Manager', 'Head of Business Intelligence'],
    certification: 'Professional Certification in Advanced Business Intelligence & Data Analytics.',
    testimonials: [
      { name: 'Sarah T.', role: 'Analytics Lead', comment: 'The DAX patterns and Power BI architecture taught here are world-class.' }
    ],
    faqs: [
      { question: 'Can I integrate my own business data?', answer: 'Yes, we encourage students to bring anonymized business datasets for their final project.' }
    ]
  },
  'iot-robotics': {
    overview: 'The future of industrial automation. This program focuses on the design, deployment, and management of smart robotics and IoT ecosystems.',
    skillsCovered: ['Industrial Embedded Systems', 'Multi-Sensor Mesh Networking', 'Robotic Kinematics', 'Cloud-Edge IoT Architecture', 'Automation Orchestration'],
    tools: ['Arduino', 'ESP8266', 'Raspberry Pi', 'Blynk', 'Tinkercad', 'MQTT'],
    syllabus: [
      { title: 'Module 1: Industrial Hardware Design', topics: ['Enterprise Circuit Architecture', 'Firmware Engineering Protocols', 'Reliability-First Hardware Design'] },
      { title: 'Module 2: Distributed IoT Ecosystems', topics: ['Industrial Networking (MQTT/gRPC)', 'Secure Cloud Integration', 'Real-time Telemetry Systems'] },
      { title: 'Module 3: Advanced Robotics & Control', topics: ['Precision Motion Control', 'Autonomous Navigation Logic', 'Predictive Maintenance Sensors'] }
    ],
    projects: ['Smart Factory Ecosystem', 'Autonomous Security Robot', 'Industrial Asset Monitoring System'],
    careerOpportunities: ['Industrial IoT Architect', 'Robotics Engineering Lead', 'Automation Systems Director', 'Hardware Solutions Architect'],
    certification: 'Professional Industrial Certification in Robotics & IoT Engineering.',
    testimonials: [
      { name: 'David M.', role: 'Senior Hardware Engineer', comment: 'The deepest technical training on IoT architecture I have found in the market.' }
    ],
    faqs: [
      { question: 'Is this focused on DIY or Industrial?', answer: 'This is strictly an industrial-tier course using hardware used in professional environments.' }
    ]
  },
  'gen-ai-agents': {
    overview: 'Architect next-gen AI agents and LLM-driven workflows that automate complex enterprise operations and stay at the frontier of intelligence.',
    skillsCovered: ['Enterprise LLM Orchestration', 'Multi-Agent System Design', 'Cognitive RAG Architectures', 'AI Agents Governance', 'Agentic Workflow Design'],
    tools: ['ChatGPT', 'LangChain', 'CrewAI', 'AutoGen', 'Make.com', 'n8n'],
    syllabus: [
      { title: 'Module 1: Agentic Prompt Frameworks', topics: ['Advanced Cognitive Architectures', 'Refinement & Feedback Loops', 'System Instruction Security'] },
      { title: 'Module 2: Autonomous Agent Development', topics: ['Building Agents with LangGraph', 'Memory & State Management', 'Multi-Agent Swarm Orchestration'] },
      { title: 'Module 3: Enterprise Automation Integration', topics: ['Connecting AI to Core Business Systems', 'Scale-Ready AI Workflows', 'Autonomous Research & Ops Agents'] }
    ],
    projects: ['Autonomous Enterprise Recruiter', 'AI Customer Success Agent', 'Full-Scale Business Automation Engine'],
    careerOpportunities: ['AI Automation Lead', 'Chief AI Architect', 'Generative AI Developer', 'Head of AI Innovation'],
    certification: 'Professional Certification in Generative AI & Autonomous Agent Engineering.',
    testimonials: [
      { name: 'Elena Z.', role: 'AI Architect', comment: 'Finally a course that moves beyond ChatGPT basics into real agentic architecture.' }
    ],
    faqs: [
      { question: 'Do I need a strong programming background?', answer: 'A intermediate understanding of Python and API structures is required for the agent development module.' }
    ]
  }
};

const MasterClassDetail: React.FC<CourseDetailProps> = ({ courseId, onNavigate }) => {
  const course = courses.find(c => c.id === courseId);
  const details = courseDetailsData[courseId] || courseDetailsData['ui-ux-mastery']; // Fallback
  const [activeTab, setActiveTab] = useState<'syllabus' | 'projects' | 'faq'>('syllabus');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'enroll' | 'demo'>('enroll');

  const openModal = (type: 'enroll' | 'demo') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  if (!course) {
    return (
      <div className="pt-40 pb-20 text-center bg-[#F8F9FC] min-h-screen">
        <h2 className="text-3xl font-black text-[#020617] mb-4">MASTER CLASS SESSION NOT FOUND</h2>
        <button onClick={() => onNavigate(PageType.MASTER_CLASS)} className="text-[#FF7A3D] font-black uppercase tracking-widest text-sm">Back to Executive Programs</button>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FC] min-h-screen pt-32 pb-20 overflow-x-hidden">
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative z-10 w-full max-w-md">
            <EnrollmentForm 
              type={modalType} 
              courseTitle={`${course.title} Master Class`} 
              onClose={() => setIsModalOpen(false)} 
            />
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#FF7A3D] transition-colors"
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => onNavigate(PageType.MASTER_CLASS)}
          className="flex items-center text-[#667085] hover:text-[#020617] transition-colors mb-12 font-black uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Master Classes
        </button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#020617] text-white text-[10px] font-black tracking-[0.2em] uppercase border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FF7A3D] mr-2.5 animate-pulse"></span> 
              Executive Master Class Session
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#020617] mb-8 tracking-tighter uppercase leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-[#667085] mb-12 font-medium leading-relaxed border-l-4 border-[#FF7A3D] pl-6 italic">
              {details.overview}
            </p>
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center bg-white px-6 py-4 rounded-[1.5rem] border border-[#EAECEF] shadow-sm">
                <Clock className="text-[#FF7A3D] mr-3" size={24} strokeWidth={3} />
                <div>
                  <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Intensive Training</div>
                  <div className="text-lg font-black text-[#020617]">30 Days</div>
                </div>
              </div>
              <div className="flex items-center bg-white px-6 py-4 rounded-[1.5rem] border border-[#EAECEF] shadow-sm">
                 <div className="mr-3">
                   <div className="text-[10px] text-slate-400 font-black line-through uppercase">₹54,999</div>
                   <div className="text-xl font-black text-[#FF7A3D]">₹15,999</div>
                 </div>
                 <div className="border-l border-[#EAECEF] pl-4">
                   <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Elite Access</div>
                   <div className="text-lg font-black text-[#020617]">Full Content</div>
                 </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => openModal('enroll')}
                className="bg-[#FF7A3D] text-white px-10 py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/20 active:scale-95 border border-transparent hover:border-white/20"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => openModal('demo')}
                className="bg-[#020617] text-white px-10 py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest hover:bg-[#1a2b5e] transition-all active:scale-95"
              >
                Book Free Demo
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#FF7A3D]/10 blur-3xl rounded-full group-hover:bg-[#FF7A3D]/20 transition-all duration-700"></div>
            <div className="relative bg-white rounded-[3.5rem] border border-[#EAECEF] p-4 shadow-2xl">
              <img 
                src={`https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop`} 
                alt={course.title} 
                className="rounded-[3rem] w-full h-[550px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 shadow-inner"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#020617] text-white p-10 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-xs scale-90 md:scale-100">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="text-[#FF7A3D] fill-[#FF7A3D]" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF7A3D]">Executive Tier</span>
                </div>
                <p className="text-xs font-bold text-slate-300 leading-relaxed italic mb-0">
                  "This master class bridges the gap between academic theory and enterprise-level execution."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {/* Strategic Outcomes */}
            <div className="grid md:grid-cols-2 gap-10 mb-20">
              <div className="bg-white rounded-[2.5rem] p-10 border border-[#EAECEF] shadow-sm">
                <h3 className="text-xl font-black text-[#020617] mb-8 flex items-center uppercase tracking-tight">
                  <Target className="text-[#FF7A3D] mr-3" size={24} /> Strategic Takeaways
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {details.skillsCovered.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-[#020617] font-bold text-sm tracking-tight">
                      <CheckCircle2 className="text-[#FF7A3D] mr-3" size={20} strokeWidth={3} />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-[2.5rem] p-10 border border-[#EAECEF] shadow-sm">
                <h3 className="text-xl font-black text-[#020617] mb-8 flex items-center uppercase tracking-tight">
                  <Terminal className="text-[#FF7A3D] mr-3" size={24} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {details.tools.map((tool, idx) => (
                    <span key={idx} className="bg-[#F8F9FC] text-[#020617] px-5 py-3 rounded-xl text-[10px] font-black uppercase border border-[#EAECEF] tracking-wider hover:border-[#FF7A3D]/30 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Session Roadmap */}
            <div className="mb-20">
              <div className="flex space-x-12 border-b border-[#EAECEF] mb-12 overflow-x-auto scrollbar-hide">
                {(['syllabus', 'projects', 'faq'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                      activeTab === tab ? 'text-[#FF7A3D]' : 'text-[#667085] hover:text-[#020617]'
                    }`}
                  >
                    {tab === 'syllabus' ? 'Deep-Dive Modules' : tab === 'projects' ? 'Real-World Production' : 'Executive FAQ'}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF7A3D] rounded-full"></div>}
                  </button>
                ))}
              </div>

              {activeTab === 'syllabus' && (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                  {details.syllabus.map((module, idx) => (
                    <div key={idx} className="bg-white border border-[#EAECEF] rounded-[2rem] p-8 hover:shadow-xl transition-all group hover:border-[#FF7A3D]/20">
                      <h4 className="text-lg font-black text-[#020617] mb-8 flex items-center group-hover:text-[#FF7A3D] transition-colors">
                        <span className="w-10 h-10 bg-[#020617] text-white rounded-xl flex items-center justify-center text-[11px] mr-5 shadow-lg group-hover:bg-[#FF7A3D] transition-colors uppercase font-black">{idx + 1}</span>
                        {module.title}
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5 px-4 pb-4">
                        {module.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-center text-[#667085] text-sm font-bold tracking-tight">
                            <div className="w-2 h-2 bg-[#FF7A3D] rounded-full mr-4 shrink-0"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="grid md:grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-500">
                  {details.projects.map((project, idx) => (
                    <div key={idx} className="bg-[#020617] rounded-[2.5rem] p-10 text-white border border-white/5 hover:border-[#FF7A3D]/40 transition-all group">
                      <div className="w-14 h-14 bg-[#FF7A3D] rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                        <Rocket size={24} strokeWidth={3} />
                      </div>
                      <h4 className="text-xl font-black mb-4 tracking-tight uppercase group-hover:text-[#FF7A3D] transition-colors">{project}</h4>
                      <p className="text-[#667085] text-sm font-bold leading-relaxed tracking-tight italic">
                        "Full-cycle implementation focusing on high-end architectural standards and elite market deployment."
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                  {details.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-[2rem] p-8 border border-[#EAECEF] hover:border-[#FF7A3D]/40 transition-all">
                      <h4 className="text-lg font-black text-[#020617] mb-5 flex items-start">
                        <HelpCircle className="text-[#FF7A3D] mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                        {faq.question}
                      </h4>
                      <p className="text-[#667085] text-sm font-bold pl-8 leading-relaxed tracking-tight">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Career Opportunities */}
            <div className="bg-[#020617] rounded-[3rem] p-10 text-white border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A3D]/10 blur-3xl"></div>
              <h3 className="text-xl font-black mb-10 flex items-center uppercase tracking-tight">
                <Trophy className="text-[#FF7A3D] mr-3" size={24} /> Career Trajectory
              </h3>
              <div className="space-y-4">
                {details.careerOpportunities.map((role, idx) => (
                  <div key={idx} className="flex items-center bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-default">
                    <div className="w-2.5 h-2.5 bg-[#FF7A3D] rounded-full mr-4 shadow-lg shadow-orange-500/40"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-[3rem] p-10 border border-[#EAECEF] shadow-xl">
              <h3 className="text-xl font-black text-[#020617] mb-10 flex items-center uppercase tracking-tight">
                <Users className="text-[#FF7A3D] mr-3" size={24} /> Alumni Success
              </h3>
              <div className="space-y-12">
                {details.testimonials.map((t, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex text-[#FF7A3D] mb-5 space-x-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-[#020617] text-sm font-bold italic mb-6 leading-relaxed">"{t.comment}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#F8F9FC] border border-[#EAECEF] rounded-[1.2rem] flex items-center justify-center text-[#020617] font-black text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-[10px] font-black text-[#020617] uppercase tracking-widest">{t.name}</div>
                        <div className="text-[9px] text-[#667085] font-black uppercase tracking-widest mt-1 tracking-tighter">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClassDetail;
