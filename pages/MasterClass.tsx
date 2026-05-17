
import React, { useState } from 'react';
import { 
  ArrowRight, BookOpen, Clock, Code, Database, Globe, Layout, LineChart, 
  Megaphone, Palette, Rocket, Sparkles, X, Star, Shield, Zap, TrendingUp, 
  Settings, Cpu, BrainCircuit, BarChart3, Briefcase, GraduationCap, 
  Users, CheckCircle2, ChevronRight, Play, Download, MessageSquare
} from 'lucide-react';
import { PageType } from '../types';
import EnrollmentForm from '../components/EnrollmentForm';

export interface Course {
  id: string;
  title: string;
  description: string;
  tools: string[];
  projects: string[];
  duration: string;
  icon: React.ReactNode;
  testimonials: string;
  interactiveIdeaHeadline: string;
}

export const courses: Course[] = [
  {
    id: 'ui-ux-mastery',
    title: 'AI-Powered UI/UX Design Mastery',
    description: 'Architect high-end, user-centric interfaces. Master the synergy between human creativity and AI design systems to deliver world-class digital experiences.',
    tools: ['Figma AI', 'Uizard', 'Framer AI', 'Galileo AI', 'ChatGPT', 'Midjourney'],
    projects: ['SaaS Dashboard UI', 'Mobile App Prototype', 'AI Website Redesign'],
    duration: '30 Days',
    icon: <Palette size={28} />,
    testimonials: 'Helped me build portfolio-ready UI projects within weeks.',
    interactiveIdeaHeadline: 'Live UI Preview'
  },
  {
    id: 'graphic-design-ai',
    title: 'AI-Driven Graphic Design & Creative Tools',
    description: 'Redefine visual storytelling. Leverage advanced generative AI models to scale creative production while maintaining brand integrity.',
    tools: ['Canva AI', 'Adobe Firefly', 'Midjourney', 'Leonardo AI', 'Photoshop AI', 'Illustrator'],
    projects: ['Brand Identity Kit', 'AI Poster Campaign', 'Social Media Creative Pack'],
    duration: '30 Days',
    icon: <Sparkles size={28} />,
    testimonials: 'Created professional-quality creatives faster using AI workflows.',
    interactiveIdeaHeadline: 'Image generation showcase'
  },
  {
    id: 'sap-training',
    title: 'SAP Functional & Technical Training',
    description: 'Command the core of enterprise operations. Deep-dive into SAP modules to lead digital transformation in the global corporate landscape.',
    tools: ['SAP BASIS', 'SAP ABAP', 'SAP FICO', 'SAP MM', 'SAP SD', 'SAP HANA'],
    projects: ['SAP System Administration', 'ERP Workflow Implementation', 'SAP User Management'],
    duration: '30 Days',
    icon: <Settings size={28} />,
    testimonials: 'Practical SAP exposure helped me understand real enterprise environments.',
    interactiveIdeaHeadline: 'SAP workflow animation'
  },
  {
    id: 'data-science-ai',
    title: 'Advanced Data Science & Artificial Intelligence',
    description: 'Engineer the next wave of intelligence. Build sophisticated machine learning models that solve complex real-world data challenges.',
    tools: ['Python', 'TensorFlow', 'Scikit-Learn', 'Jupyter', 'OpenAI API', 'Hugging Face'],
    projects: ['AI Chatbot', 'Predictive Analytics Model', 'AI Recommendation System'],
    duration: '30 Days',
    icon: <BrainCircuit size={28} />,
    testimonials: 'Excellent hands-on exposure to real AI development.',
    interactiveIdeaHeadline: 'AI model visualization'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics with Power BI & Python',
    description: 'Transform raw data into strategic foresight. Master business intelligence and automated analytics to drive corporate decision-making.',
    tools: ['Power BI', 'Python', 'Pandas', 'NumPy', 'Excel', 'SQL'],
    projects: ['Sales Dashboard', 'KPI Analytics System', 'Automated Reporting Tool'],
    duration: '30 Days',
    icon: <BarChart3 size={28} />,
    testimonials: 'Helped me understand analytics through practical dashboards.',
    interactiveIdeaHeadline: 'Interactive charts'
  },
  {
    id: 'iot-robotics',
    title: 'IoT, Robotics & Automation',
    description: 'Bridge the physical and digital frontiers. Design autonomous systems and smart environments using integrated IoT architectures.',
    tools: ['Arduino', 'ESP8266', 'Raspberry Pi', 'Blynk', 'Tinkercad', 'MQTT'],
    projects: ['Smart Home System', 'Surveillance Robot', 'IoT Automation Project'],
    duration: '30 Days',
    icon: <Cpu size={28} />,
    testimonials: 'Hands-on robotics projects made learning highly practical.',
    interactiveIdeaHeadline: 'Robot movement animation'
  },
  {
    id: 'gen-ai-agents',
    title: 'Generative AI & AI Agents Development',
    description: 'Deploy autonomous intelligence. Architect next-gen AI agents and LLM workflows that automate complex enterprise operations.',
    tools: ['ChatGPT', 'LangChain', 'CrewAI', 'AutoGen', 'Make.com', 'n8n'],
    projects: ['AI Assistant', 'Autonomous AI Agent', 'AI Workflow Automation'],
    duration: '30 Days',
    icon: <Rocket size={28} />,
    testimonials: 'Learned how to build real AI agents and automate workflows.',
    interactiveIdeaHeadline: 'AI chat simulation'
  }
];

interface MasterClassProps {
  onNavigate: (page: PageType, courseId?: string) => void;
}

const MasterClass: React.FC<MasterClassProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'enroll' | 'demo'>('enroll');
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  const openModal = (type: 'enroll' | 'demo', courseTitle?: string) => {
    setModalType(type);
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#F8F9FC] min-h-screen pt-20 overflow-x-hidden">
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative z-10 w-full max-w-md">
            <EnrollmentForm 
              type={modalType} 
              courseTitle={selectedCourse} 
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

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 px-6 overflow-hidden bg-[#020617]">
        {/* Floating AI Elements Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF7A3D]/10 blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
          {/* Abstract Shapes */}
          <div className="absolute top-1/4 right-[10%] w-24 h-24 border border-white/5 rounded-full animate-bounce duration-[3000ms]"></div>
          <div className="absolute bottom-1/4 left-[15%] w-16 h-16 border border-[#FF7A3D]/20 rounded-lg rotate-12 animate-spin duration-[5000ms]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white mb-8 group hover:border-[#FF7A3D]/50 transition-all duration-300">
            <span className="flex h-2 w-2 rounded-full bg-[#FF7A3D] mr-3 animate-ping"></span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase">Executive AI Training & Certification</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase">
            MASTER <span className="text-[#FF7A3D]">INDUSTRIAL AI</span> <br /> & DIGITAL SKILLS
          </h1>
          
          <p className="text-lg md:text-xl text-[#667085] max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Industry-oriented intensive training programs designed for future-ready professionals, engineers, startups, and corporate teams.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
            <button 
              onClick={() => {
                const element = document.getElementById('programs');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-10 py-5 bg-[#FF7A3D] text-white rounded-2xl font-black uppercase text-[11px] tracking-widest overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_rgba(255,122,61,0.5)] active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Explore Programs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-[#FF7A3D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button 
              onClick={() => openModal('demo')}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase text-[11px] tracking-widest hover:bg-white/10 transition-all active:scale-95"
            >
              Book Free Demo
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5 bg-white/2 overflow-hidden rounded-[2.5rem]">
            {[
              { label: 'Learners', value: '5000+' },
              { label: 'Industry Projects', value: '100+' },
              { label: 'Intensive Training', value: '30 Days' },
              { label: 'AI-Powered Learning', value: '100%' }
            ].map((stat, idx) => (
              <div key={idx} className="px-6 border-r last:border-r-0 border-white/5">
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#667085]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-[#FF7A3D] font-black uppercase text-[10px] tracking-[0.3em] mb-4">Accelerated Career Growth</div>
            <h2 className="text-4xl md:text-6xl font-black text-[#020617] mb-8 tracking-tight uppercase">Industrial <span className="text-[#FF7A3D]">Elite Programs</span></h2>
            <div className="w-24 h-1.5 bg-[#FF7A3D] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="group relative bg-white rounded-[3rem] border border-[#EAECEF] p-8 hover:border-[#FF7A3D]/40 transition-all duration-500 hover:-translate-y-3 flex flex-col h-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
              >
                {/* Glassmorphism Effect Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A3D]/5 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 bg-[#F8F9FC] text-[#020617] rounded-[1.5rem] flex items-center justify-center group-hover:bg-[#FF7A3D] group-hover:text-white transition-all duration-500 shadow-sm border border-[#EAECEF]">
                      {course.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 font-black line-through mb-1 uppercase tracking-widest">₹54,999</div>
                      <div className="text-2xl font-black text-[#FF7A3D] tracking-tighter">₹15,999</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">Limited Offer</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-[#020617] mb-5 tracking-tight leading-tight min-h-[3.5rem] group-hover:text-[#FF7A3D] transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-[#667085] text-sm leading-relaxed mb-8 min-h-[4.5rem]">
                    {course.description}
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center text-[#020617] text-[10px] font-black uppercase tracking-[0.2em]">
                      <Clock size={16} className="mr-2 text-[#FF7A3D]" strokeWidth={3} />
                      30 Days Intensive High-End Training
                    </div>
                    
                    <div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">AI Tools Context</div>
                      <div className="flex flex-wrap gap-2">
                        {course.tools.slice(0, 4).map((tool, idx) => (
                          <span key={idx} className="bg-[#F8F9FC] text-[#020617] px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-wider border border-[#EAECEF] group-hover:border-[#FF7A3D]/20 transition-colors">
                            {tool}
                          </span>
                        ))}
                        {course.tools.length > 4 && <span className="text-[9px] font-black text-[#FF7A3D] flex items-center ml-1">+{course.tools.length - 4} More</span>}
                      </div>
                    </div>

                    <div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Mini Projects</div>
                      <div className="flex flex-wrap gap-2">
                        {course.projects.map((project, idx) => (
                          <span key={idx} className="bg-[#020617]/5 text-[#020617] px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-tight">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-auto pt-4">
                    <button 
                      onClick={() => onNavigate(PageType.MASTER_CLASS_DETAILS, course.id)}
                      className="py-4 rounded-2xl border border-[#EAECEF] text-[#020617] text-[10px] font-black uppercase tracking-widest hover:bg-[#F8F9FC] transition-all flex items-center justify-center group/btn"
                    >
                      Curriculum <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </button>
                    <button 
                      onClick={() => openModal('enroll', course.title)}
                      className="py-4 rounded-2xl bg-[#020617] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#FF7A3D] transition-all shadow-xl shadow-[#020617]/10 hover:shadow-[#FF7A3D]/30 border border-transparent hover:border-white/10"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-[#020617] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F8F9FC] to-transparent opacity-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">Why <span className="text-[#FF7A3D]">Industrial Training?</span></h2>
            <p className="text-[#667085] text-lg max-w-2xl mx-auto font-medium">Experience high-end training ecosystems designed for corporate excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Briefcase size={32} />, title: "Elite Industry Curriculum", desc: "Co-developed with Fortune 500 tech architects for maximum workplace relevance." },
              { icon: <Zap size={32} />, title: "High-Impact Case Studies", desc: "Solve mission-critical business challenges using real-world enterprise datasets." },
              { icon: <Cpu size={32} />, title: "AI-Augmented Training", desc: "Personalized learning architecture enhanced by specialized AI tutor agents." },
              { icon: <Shield size={32} />, title: "Expert Corporate Mentorship", desc: "Learn directly from practitioners with 10+ years of high-end clinical experience." },
              { icon: <GraduationCap size={32} />, title: "Professional Verification", desc: "Earn globally recognized credentials that signify elite technical proficiency." },
              { icon: <TrendingUp size={32} />, title: "Executive Placement", desc: "Strategic career positioning, portfolio audits, and mock interview circuits." },
              { icon: <Rocket size={32} />, title: "Architectural Readiness", desc: "Master the skills needed to design and deploy scalable enterprise systems." },
              { icon: <Users size={32} />, title: "Global Alumni Network", desc: "Gain lifetime access to our elite community of AI & technology leaders." }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#FF7A3D]/40 hover:bg-white/10 transition-all duration-500">
                <div className="text-[#FF7A3D] mb-6 transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h3 className="text-white text-lg font-black mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-[#667085] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <div className="text-[#FF7A3D] font-black uppercase text-[10px] tracking-[0.3em] mb-4">Visual Proof</div>
              <h2 className="text-4xl md:text-6xl font-black text-[#020617] tracking-tight uppercase">Mastery <span className="text-[#FF7A3D]">Showcase</span></h2>
            </div>
            <p className="text-[#667085] max-w-md font-medium">Explore the high-end projects built by our executive cohort members using cutting-edge technologies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "AI Projects", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop", title: "Neural Language Processing Agents" },
              { type: "Dashboards", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", title: "Predictive Sales Intelligence" },
              { type: "Robotics", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop", title: "Autonomous Logistics Agent" },
              { type: "UI Designs", img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop", title: "Neo-Brutalist SaaS Platform" },
              { type: "Automation Systems", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop", title: "Industrial IoT Monitoring" },
              { type: "SAP Workflow", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", title: "Enterprise Resource Hub" }
            ].map((p, idx) => (
              <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden aspect-video shadow-xl">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[#FF7A3D] text-[10px] font-black uppercase tracking-widest mb-2">{p.type}</div>
                  <h4 className="text-white text-xl font-black uppercase tracking-tight">{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section (Simplified Grid for stability) */}
      <section className="py-32 px-6 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#020617] mb-8 tracking-tight uppercase">Executive <span className="text-[#FF7A3D]">Insights</span></h2>
            <div className="flex justify-center items-center space-x-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-[#FF7A3D] fill-[#FF7A3D]" />)}
              <span className="ml-2 text-[11px] font-black text-[#020617] uppercase">Trust of 5000+ Professionals</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Siddharth Verma", role: "Startup Founder", comment: "The Generative AI course allowed us to build custom internal agents that saved 20+ hours weekly.", avatar: "SV" },
              { name: "Ananya Iyer", role: "Working Professional", comment: "Transitioning to Data Science felt seamless with their project-based approach. The mentorship is top-tier.", avatar: "AI" },
              { name: "Michael Chen", role: "Corporate Manager", comment: "We trained our entire design team on the AI UI/UX roadmap. The productivity jump was 100%.", avatar: "MC" }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] border border-[#EAECEF] hover:shadow-2xl transition-all duration-500 flex flex-col">
                <MessageSquare className="text-[#FF7A3D]/20 mb-8" size={40} />
                <p className="text-[#020617] font-bold text-lg leading-relaxed mb-10 italic">"{t.comment}"</p>
                <div className="mt-auto flex items-center">
                  <div className="w-12 h-12 bg-[#020617] text-white rounded-2xl flex items-center justify-center font-black">{t.avatar}</div>
                  <div className="ml-4">
                    <div className="text-xs font-black uppercase tracking-widest text-[#020617]">{t.name}</div>
                    <div className="text-[10px] text-[#667085] font-black uppercase tracking-widest mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-[#020617] rounded-full -translate-y-3/4"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tight uppercase max-w-4xl mx-auto leading-tight">
            Transform Your Career With <span className="text-[#FF7A3D]">Industry-Level</span> AI & Technology Skills
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <button 
              onClick={() => openModal('enroll')}
              className="px-12 py-6 bg-[#FF7A3D] text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:shadow-[0_0_50px_-5px_rgba(255,122,61,0.5)] transition-all active:scale-95"
            >
              Request Enrollment
            </button>
            <button 
              onClick={() => onNavigate(PageType.CONTACT)}
              className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all active:scale-95"
            >
              Talk to Expert
            </button>
          </div>
          
          <div className="mt-20 flex justify-center space-x-12 opacity-50">
            <div className="text-white font-black text-[9px] uppercase tracking-widest">Verified Program</div>
            <div className="text-white font-black text-[9px] uppercase tracking-widest">Safe Data Policy</div>
            <div className="text-white font-black text-[9px] uppercase tracking-widest">24/7 Support</div>
          </div>
        </div>
        {/* Animated Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#FF7A3D] blur-[150px] opacity-20 rounded-full animate-pulse"></div>
      </section>
    </div>
  );
};

export default MasterClass;
