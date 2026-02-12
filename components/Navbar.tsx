
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const LogoIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="160 460 230 280" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <g fill="currentColor">
      <path d="M368.37,511.66c-20.89-28.25-54.45-46.61-92.21-46.61-19.32,0-37.54,4.8-53.52,13.28-35.7,18.94-60.26,56.2-61.05,99.17-.01.71-.03,1.44-.03,2.15,0,.57,0,1.15.01,1.73.29,19.26,5.39,37.39,14.15,53.26v-51.6h25.48c-.05-1.16-.08-2.32-.08-3.48s.03-2.33.08-3.51c.71-15.1,5.96-29.1,14.43-40.61,12.97-17.69,33.47-29.56,56.66-30.73,26.35-1.33,49.96,11.01,64.32,30.55,5.46,7.41,15.37,9.98,23.79,6.28,7.56-3.31,11.83-10.63,11.83-18.15,0-4.05-1.24-8.15-3.88-11.73Z" />
      <path d="M181.35,734.95h0c-10.93,0-19.78-8.86-19.78-19.78v-137.66h39.57v137.66c0,10.93-8.86,19.78-19.78,19.78Z" />
      <path d="M369.22,646.5c-2.53,3.52-5.26,6.88-8.18,10.09-20.85,23-50.94,37.51-84.32,37.67-20.77.11-40.35-5.42-57.27-15.14-2.57-1.48-4.15-4.23-4.15-7.2v-43c0-1.74,2.16-2.55,3.28-1.21,13.77,16.49,34.46,26.99,57.58,26.99,9.85,0,19.27-1.91,27.88-5.38,12.73-5.1,23.74-13.6,31.92-24.37.04-.05.08-.11.12-.16.25-.33.49-.66.73-.99,3.61-4.62,9.23-7.57,15.54-7.57,2.44,0,4.76.44,6.91,1.24.05.03.11.04.16.07.57.25,1.13.5,1.7.75.09.04.18.08.29.13,10.85,4.81,14.75,18.45,7.81,28.09Z" />
      <path d="M387.95,579.56c0,1.69-.21,3.31-.61,4.88-2.18,8.56-9.92,14.88-19.15,14.88-10.92,0-19.76-8.84-19.76-19.76,0-6.33,2.98-11.96,7.61-15.58,3.35-2.62,7.57-4.18,12.15-4.18,10.91,0,19.76,8.85,19.76,19.76Z" />
    </g>
  </svg>
);

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const isLightPage = currentPage === PageType.HOME || currentPage === PageType.CUSTOM_TRAINING;
  const isLightBg = isScrolled || isLightPage;

  const services = [
    { title: "AI Agent Engineering", type: PageType.AI_AUTOMATION },
    { title: "Cybersecurity & Compliance", type: PageType.CYBERSECURITY },
    { title: "SaaS Product Development", type: PageType.SAAS_DEV },
    { title: "SAP Technical Hub", type: PageType.SAP_TRAINING },
    { title: "Mobile & Hybrid Ecosystems", type: PageType.MOBILE_CLOUD_APPS },
    { title: "Strategic Talent Outsourcing", type: PageType.IT_OUTSOURCING },
  ];

  // Logic Flow: Home -> Solutions -> Training -> About
  const navLinks = [
    { name: 'Home', type: PageType.HOME },
    { name: 'Solutions', type: PageType.SERVICES, hasDropdown: true },
    { name: 'Training', type: PageType.CORP_TRAINING },
    { name: 'About', type: PageType.ABOUT },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md py-3 border-b border-slate-200/60 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Identity */}
          <div 
            className="flex items-center cursor-pointer group space-x-4" 
            onClick={() => onNavigate(PageType.HOME)}
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center p-2 transition-all duration-500 shadow-xl ${
              isLightBg 
                ? 'bg-[#F26522] text-white shadow-orange-500/10' 
                : 'bg-white text-[#F26522] shadow-white/5'
            }`}>
              <LogoIcon className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-black text-xl tracking-tighter block uppercase leading-none transition-colors duration-300 ${
                isLightBg ? 'text-slate-900' : 'text-white'
              }`}>
                CLOUDPOINT
              </span>
              <span className="text-[9px] font-bold tracking-[0.35em] uppercase block text-[#F26522] mt-1">
                Solutions
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.type} 
                className="relative"
                onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
              >
                <button
                  onClick={() => onNavigate(link.type)}
                  className={`text-[11px] font-black uppercase tracking-widest transition-all relative py-2 flex items-center group ${
                    isLightBg
                      ? (currentPage === link.type ? 'text-[#F26522]' : 'text-slate-600 hover:text-slate-900')
                      : (currentPage === link.type ? 'text-[#F26522]' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={12} className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                </button>

                {link.hasDropdown && (
                  <div className={`absolute top-full -left-10 mt-2 w-72 bg-white border border-slate-100 rounded-3xl shadow-2xl p-4 transition-all duration-300 origin-top ${
                    isDropdownOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                  }`}>
                    <div className="flex flex-col space-y-1">
                      {services.map((service, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            onNavigate(service.type);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-[#F26522] hover:bg-orange-50 rounded-xl transition-all"
                        >
                          {service.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button 
              onClick={() => onNavigate(PageType.CONTACT)}
              className={`px-7 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl ${
                isLightBg
                  ? 'bg-[#F26522] text-white hover:bg-orange-600 shadow-orange-500/20'
                  : 'bg-white text-slate-900 hover:bg-slate-100 shadow-white/5'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 transition-colors ${isLightBg ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 top-[72px] z-40 p-8 flex flex-col space-y-8 animate-in slide-in-from-top duration-300 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.type} className="flex flex-col">
              <button
                onClick={() => {
                  if (!link.hasDropdown) {
                    onNavigate(link.type);
                    setIsOpen(false);
                  } else {
                    setIsDropdownOpen(!isDropdownOpen);
                  }
                }}
                className={`text-lg font-black uppercase tracking-widest text-left flex items-center justify-between ${
                  currentPage === link.type ? 'text-[#F26522]' : 'text-slate-900'
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={20} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />}
              </button>
              
              {link.hasDropdown && isDropdownOpen && (
                <div className="mt-6 pl-4 border-l-2 border-orange-100 flex flex-col space-y-5 animate-in slide-in-from-left duration-300">
                  {services.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onNavigate(service.type);
                        setIsOpen(false);
                      }}
                      className="text-[11px] font-bold text-slate-500 text-left hover:text-[#F26522] uppercase tracking-widest"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button 
            onClick={() => { onNavigate(PageType.CONTACT); setIsOpen(false); }}
            className="w-full bg-[#F26522] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-orange-500/20"
          >
            Contact Sales
          </button>
        </div>
      )}
    </nav>
  );
}
