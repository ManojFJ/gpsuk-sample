import { Mail, Phone, MessageCircle } from 'lucide-react';
import QuoteForm from './quote-form';

export default function ContactCta() {
  return (
    <section id="contact" className="py-14 bg-[#F6F6F6] border-t border-black/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-[40px] font-semibold text-[#1A1A1A] leading-tight mb-4">
              Reach Out
              <br />
              To Us
            </h2>
            <p className="text-base text-black/60 mb-6 max-w-md">
              Got questions about promotional products? From custom designs to bulk orders, we have got the answers you need. Let us guide you through!
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1A1A1A]">Call Us</div>
                  <div className="text-sm text-black/50">+44 20 7946 0958</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1A1A1A]">Email</div>
                  <div className="text-sm text-black/50">info@gpsuk.co.uk</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1A1A1A]">WhatsApp</div>
                  <div className="text-sm text-black/50">+44 7XXX XXXXXX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[20px] border border-black/10 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">Get In Touch</h3>
            <p className="text-xs text-black/50 mb-4">
              Fill in the details below and we will respond promptly.
            </p>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
