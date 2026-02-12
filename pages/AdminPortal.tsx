
import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowLeft, Users, Mail, TrendingUp, Download } from 'lucide-react';
import { PageType } from '../types';
import { apiService } from '../services/apiService';
import * as XLSX from 'xlsx';

interface AdminPortalProps {
  onNavigate: (page: PageType) => void;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ onNavigate }) => {
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    setRecords(apiService.getAdminRecords());
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(records);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "CPS_Inquiries");
    XLSX.writeFile(wb, `CPS_Leads_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div className="animate-in fade-in duration-700 pt-32 pb-24 bg-[#020617] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-black uppercase tracking-widest mb-4 border border-orange-500/20">
              Strategic Control Node
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase">
              Inquiry <span className="text-gradient-orange">Vault</span>
            </h1>
            <p className="text-slate-500 text-sm font-medium mt-2 uppercase tracking-widest text-[10px]">Security Status: <span className="text-emerald-500 font-bold">Local Access Encrypted</span></p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={exportToExcel}
              disabled={records.length === 0}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-all flex items-center text-xs font-black uppercase tracking-widest hover:bg-white/10 disabled:opacity-30"
            >
              <Download size={16} className="mr-2" /> Export Dataset
            </button>
          </div>
        </div>

        <div className="glass rounded-[40px] border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/5">
                  <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Captured At</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Client Identity</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Organization</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Requirement</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Dispatch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {records.length > 0 ? records.slice().reverse().map((record, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6 text-[10px] text-slate-400 font-bold uppercase">{record.timestamp}</td>
                    <td className="px-8 py-6">
                       <div className="text-white font-black text-xs uppercase tracking-tight">{record.firstName} {record.lastName}</div>
                       <div className="text-slate-500 text-[10px]">{record.email}</div>
                    </td>
                    <td className="px-8 py-6 text-slate-400 text-[10px] font-bold tracking-wider uppercase">{record.organization || 'N/A'}</td>
                    <td className="px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">{record.requirement}</td>
                    <td className="px-8 py-6 text-right">
                      <div className="inline-flex items-center text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full text-emerald-500 bg-emerald-500/10 border border-emerald-500/20">
                         <ShieldCheck size={10} className="mr-1" /> ARCHIVED
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={5} className="px-8 py-24 text-center text-slate-600 font-bold uppercase text-xs tracking-[0.3em] opacity-40">No strategic inquiries captured in this session</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <button onClick={() => onNavigate(PageType.HOME)} className="text-slate-600 hover:text-white flex items-center text-[10px] font-black uppercase tracking-widest transition-all">
            <ArrowLeft size={16} className="mr-2" /> Return to Public Node
          </button>
          
          <div className="flex items-center space-x-6 text-[9px] font-black text-slate-700 uppercase tracking-widest">
             <div className="flex items-center"><Users size={12} className="mr-2" /> {records.length} Strategic Assets</div>
             <div className="flex items-center"><TrendingUp size={12} className="mr-2" /> 100% Secure Dispatch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;