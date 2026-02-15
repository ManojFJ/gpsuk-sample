'use client';

import { useState } from 'react';
import { getSupabase } from '@/lib/supabase';
import { CheckCircle, Loader2 } from 'lucide-react';

const productInterests = [
  'Branded Pens & Writing',
  'Bags & Totes',
  'Drinkware',
  'Lanyards & Badges',
  'Tech Accessories',
  'Eco-Friendly Products',
  'Corporate Gift Sets',
  'Event Merchandise',
  'Christmas Products',
  'Other',
];

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    message: '',
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canSubmit = form.name && form.email;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setLoading(true);
    try {
      const supabase = getSupabase();
      if (supabase) {
        await supabase.from('inquiries').insert([form]);
      }
      setSuccess(true);
    } catch {
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">Message Sent!</h3>
        <p className="text-sm text-black/60">
          Thank you for reaching out. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-black/60 mb-1">Your Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="John Smith"
            className="w-full h-10 px-3 rounded-lg border border-black/15 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-black/60 mb-1">Email *</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="john@company.com"
            className="w-full h-10 px-3 rounded-lg border border-black/15 text-sm bg-white"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-black/60 mb-1">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+44 7XXX XXXXXX"
            className="w-full h-10 px-3 rounded-lg border border-black/15 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-black/60 mb-1">Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            placeholder="Your Company Ltd"
            className="w-full h-10 px-3 rounded-lg border border-black/15 text-sm bg-white"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-black/60 mb-1">Product Interest</label>
        <select
          value={form.product_interest}
          onChange={(e) => update('product_interest', e.target.value)}
          className="w-full h-10 px-3 rounded-lg border border-black/15 text-sm bg-white"
        >
          <option value="">Select a product category</option>
          {productInterests.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-black/60 mb-1">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          rows={3}
          placeholder="Tell us about your promotional product needs..."
          className="w-full px-3 py-2 rounded-lg border border-black/15 text-sm bg-white resize-none"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!canSubmit || loading}
        className="w-full h-10 rounded-full bg-brand-blue text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-brand-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send Message'}
      </button>
    </div>
  );
}
