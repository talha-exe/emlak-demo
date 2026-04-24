'use client';
import { useState, useEffect } from 'react';

const REASONS = [
  { value: 'buying',              label: 'Buying a Property' },
  { value: 'selling',             label: 'Selling a Property' },
  { value: 'commercial',          label: 'Commercial Services' },
  { value: 'rental',              label: 'Rental Services' },
  { value: 'property-management', label: 'Property Management' },
  { value: 'investment',          label: 'Investment Opportunities' },
  { value: 'tenant-screening',    label: 'Tenant Screening' },
  { value: 'general',             label: 'General Inquiry' },
];

const EMPTY  = { firstName: '', lastName: '', phone: '', email: '', inquiry: '' };
const ERRORS = { firstName: '', lastName: '', phone: '', email: '', inquiry: '' };

function validate(form) {
  const e = { ...ERRORS };
  if (!form.firstName.trim())                          e.firstName = 'First name is required';
  if (!form.lastName.trim())                           e.lastName  = 'Last name is required';
  if (!form.phone.trim())                              e.phone     = 'Contact number is required';
  else if (!/^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(form.phone.trim())) e.phone = 'Enter a valid US number: +1 (555) 000-0000';
  if (!form.email.trim())                              e.email     = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address';
  if (!form.inquiry)                                   e.inquiry   = 'Please select a reason';
  return e;
}

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm]       = useState(EMPTY);
  const [errors, setErrors]   = useState(ERRORS);
  const [touched, setTouched] = useState(ERRORS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [visible, setVisible]     = useState(false);

  /* drive enter / exit animation */
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const t = setTimeout(() => {
        setVisible(false);
        setSubmitted(false);
        setForm(EMPTY);
        setErrors(ERRORS);
        setTouched(ERRORS);
      }, 320);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  /* escape key */
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [isOpen, onClose]);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!visible && !isOpen) return null;

  const active = isOpen;

  const formatPhone = (raw) => {
    const digits = raw.replace(/\D/g, '').slice(0, 10); // max 10 digits after country code
    if (digits.length === 0) return '';
    if (digits.length <= 3)  return `+1 (${digits}`;
    if (digits.length <= 6)  return `+1 (${digits.slice(0,3)}) ${digits.slice(3)}`;
    return `+1 (${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === 'phone') {
      value = formatPhone(value);
    }
    const updated = { ...form, [e.target.name]: value };
    setForm(updated);
    if (touched[e.target.name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e) => {
    const t = { ...touched, [e.target.name]: true };
    setTouched(t);
    setErrors(validate(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(ERRORS).reduce((a, k) => ({ ...a, [k]: true }), {});
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;

    setLoading(true);
    try {
      await fetch('https://automation.emlakrealty.us/webhook/5cf47cc5-c228-41fc-8322-43da7e25136d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic Y29udGFjdC1mb3JtLW44bjoxUW42Z3FTaTQyTXJKaA==',
        },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.error('Form submission error:', err);
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div
      className={`fixed inset-0 z-[600] flex items-center justify-center px-4 transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm" onClick={onClose} />

      {/* panel */}
      <div
        className={`relative z-[601] w-full max-w-[580px] bg-dark border border-gold/[.18] shadow-[0_40px_100px_rgba(0,0,0,.7)] transition-all duration-300 ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        {/* gold top bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* header */}
        <div className="flex items-start justify-between px-10 pt-9 pb-6 max-[640px]:px-6 max-[640px]:pt-7">
          <div>
            <h2 className="font-serif text-[clamp(20px,2.6vw,28px)] font-light text-white leading-[1.2]">
              Reach Out to Our <em className="italic text-gold">Experts</em>
            </h2>
            <p className="text-[12px] text-white/35 font-light mt-1.5 tracking-[.04em]">
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-white/30 hover:text-gold transition-colors mt-1 ml-4 shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* divider */}
        <div className="mx-10 h-px bg-white/[.06] max-[640px]:mx-6" />

        {!submitted ? (
          <form onSubmit={handleSubmit} noValidate className="px-10 pt-7 pb-10 max-[640px]:px-6 max-[640px]:pb-8">
            {/* name row */}
            <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1 mb-4">
              <Field label="First Name" name="firstName" type="text"  value={form.firstName} onChange={handleChange} onBlur={handleBlur} placeholder="John"              error={touched.firstName && errors.firstName} />
              <Field label="Last Name"  name="lastName"  type="text"  value={form.lastName}  onChange={handleChange} onBlur={handleBlur} placeholder="Doe"               error={touched.lastName  && errors.lastName}  />
            </div>

            <div className="space-y-4">
              <Field label="Contact No" name="phone" type="tel"   value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+1 (555) 000-0000" error={touched.phone && errors.phone} />
              <Field label="Email"      name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="john@example.com"  error={touched.email && errors.email} />

              {/* reason */}
              <div className="space-y-2">
                <label className="block text-[10px] tracking-[.22em] uppercase text-white/40 font-medium">
                  Reason for Inquiry
                </label>
                <div className="relative">
                  <select
                    name="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full appearance-none border text-white text-[14px] font-light px-4 py-3.5 focus:outline-none transition-colors duration-200 cursor-pointer pr-10 ${touched.inquiry && errors.inquiry ? 'border-red-500/70' : 'border-white/[.1] focus:border-gold/50'}`}
                    style={{ colorScheme: 'dark', backgroundColor: '#1c1a17' }}
                  >
                    <option value="" disabled style={{ backgroundColor: '#1c1a17', color: 'rgba(255,255,255,0.4)' }}>Select a reason…</option>
                    {REASONS.map(r => (
                      <option key={r.value} value={r.value} style={{ backgroundColor: '#1c1a17', color: '#ffffff' }}>{r.label}</option>
                    ))}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold/60" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {touched.inquiry && errors.inquiry && (
                  <p className="text-[11px] text-red-400/80 mt-1">{errors.inquiry}</p>
                )}
              </div>
            </div>

            {/* submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full bg-gold text-dark text-[11px] tracking-[.22em] uppercase font-bold py-[17px] border border-gold transition-all duration-300 hover:bg-transparent hover:text-gold flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending…' : 'Send Message'}
              {!loading && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </form>
        ) : (
          /* success state */
          <div className="px-10 py-14 flex flex-col items-center text-center max-[640px]:px-6">
            <div className="w-[60px] h-[60px] rounded-full border border-gold/30 flex items-center justify-center mb-6 bg-gold/5">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M4 13L10 19L22 7" stroke="#C09A5E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif text-[clamp(20px,2.2vw,26px)] font-light text-white mb-3">
              Message <em className="italic text-gold">Received</em>
            </h3>
            <p className="text-[14px] text-white/40 font-light leading-[1.8] max-w-[360px] mb-8">
              Our experts will review your inquiry and reach out within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="text-[10px] tracking-[.22em] uppercase font-semibold text-gold border border-gold/30 px-10 py-3.5 hover:bg-gold hover:text-dark transition-all duration-300"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── reusable input field ── */
function Field({ label, name, type, value, onChange, onBlur, placeholder, error }) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] tracking-[.22em] uppercase text-white/40 font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full bg-white/[.04] border text-white text-[14px] font-light px-4 py-3.5 focus:outline-none transition-colors duration-200 placeholder:text-white/20 ${error ? 'border-red-500/70' : 'border-white/[.1] focus:border-gold/50'}`}
      />
      {error && <p className="text-[11px] text-red-400/80">{error}</p>}
    </div>
  );
}
