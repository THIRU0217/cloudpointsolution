
import React from 'react';
import { Check, Zap, Rocket, Building2 } from 'lucide-react';
import { PageType } from '../types';

const Pricing: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => {
  const plans = [
    {
      name: "MVP Launch",
      price: "$2,499",
      period: "per MVP",
      icon: <Zap className="text-orange-400" />,
      features: ["SaaS Architecture Setup", "Auth & RBAC Integration", "Cloud Infrastructure Design", "2 Weeks Hyper-care Support", "Basic CI/CD Pipeline"],
      cta: "Launch My Startup"
    },
    {
      name: "Enterprise Core",
      price: "$12,000",
      period: "from",
      icon: <Rocket className="text-white" />,
      features: ["Custom AI Agent Deployment", "Full Multi-tenant Dashboard", "SOC2/GDPR Compliance Suite", "Advanced Usage Analytics", "6 Months Dedicated Support", "API Integration Mesh"],
      popular: true,
      cta: "Scale Your Enterprise"
    },
    {
      name: "Automation Engine",
      price: "Custom",
      period: "consulting base",
      icon: <Building2 className="text-orange-400" />,
      features: ["Unlimited Internal AI Agents", "Deep Workflow Optimization", "Custom Model Fine-tuning", "Document Processing Suite", "Architecture Review Board", "24/7 Priority SLA Support"],
      cta: "Talk to Strategy"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-[#020617] pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 tracking-tighter">Strategic <span className="text-orange-500">Value</span>.</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium mb-20">Predictable investment models for high-impact engineering.</p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`relative flex flex-col p-10 rounded-[40px] transition-all duration-500 border group ${plan.popular ? 'bg-orange-600 border-orange-500 scale-105 z-10 shadow-3xl shadow-orange-900/40' : 'glass border-white/5 hover:border-orange-500/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-orange-600 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                    Most Impact
                  </div>
                )}
                
                <div className="mb-10 text-left">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg ${plan.popular ? 'bg-white/20' : 'bg-orange-500/10'}`}>
                    {/* Fix: Explicitly cast icon to React.ReactElement<any> to resolve type error for 'size' property */}
                    {React.cloneElement(plan.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>{plan.name}</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className={`text-4xl font-heading ${plan.popular ? 'text-white' : 'text-white'}`}>{plan.price}</span>
                    <span className={`text-sm font-medium ${plan.popular ? 'text-orange-200' : 'text-slate-500'}`}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-12 flex-grow text-left">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start text-sm font-medium">
                      <Check size={18} className={`mr-4 flex-shrink-0 ${plan.popular ? 'text-orange-200' : 'text-orange-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-slate-400'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 ${plan.popular ? 'bg-white text-orange-600 hover:bg-orange-50 shadow-xl' : 'bg-white/5 text-white border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5'}`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
