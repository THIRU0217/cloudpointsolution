import React, { useState } from 'react';
import { Mail, Phone, Building2, Send } from 'lucide-react';
import { apiService } from '../services/apiService';

interface EnrollmentFormProps {
  type: 'enroll' | 'demo';
  courseTitle?: string;
  onClose: () => void;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ type, courseTitle, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+',
    organization: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const requirement = courseTitle
    ? `${type === 'demo' ? 'Demo Request' : 'Enrollment Request'} – ${courseTitle}`
    : type === 'demo'
      ? 'Demo Request'
      : 'Enrollment Request';

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

    await apiService.submitContactForm({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      requirement,
      message: formData.message
    });

    setStatus('submitted');
    setTimeout(() => {
      onClose();
      setStatus('idle');
    }, 1400);
  };

  return (
    <div className="bg-[#020617] border border-white/10 rounded-[2rem] p-8 shadow-2xl shadow-black/20 text-white">
      <div className="mb-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF7A3D]/10 text-[#FF7A3D] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          {type === 'demo' ? 'Free Demo Request' : 'Enrollment Inquiry'}
        </div>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">
          {courseTitle || 'Master Class'}
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Complete the form and our team will contact you with next steps and scheduling.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            placeholder="First Name"
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A3D] transition-colors"
          />
          <input
            required
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            placeholder="Last Name"
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A3D] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A3D] transition-colors"
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="Phone"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A3D] transition-colors"
            />
          </div>
        </div>

        <div className="relative">
          <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            required
            value={formData.organization}
            onChange={(e) => handleChange('organization', e.target.value)}
            placeholder="Organization"
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A3D] transition-colors"
          />
        </div>

        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Brief message or preferred time for a call"
          className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-5 py-5 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A3D] transition-colors resize-none"
        />

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center gap-3 bg-[#FF7A3D] py-4 rounded-3xl text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-orange-500 disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending...' : status === 'submitted' ? 'Request Received' : 'Submit Request'}
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
