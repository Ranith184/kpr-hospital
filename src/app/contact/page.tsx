export const metadata = {
  title: "Contact Us | KPR Multispeciality Hospital",
  description: "Get in touch with KPR Multispeciality Hospital, Karimnagar. Find our address, phone numbers, and location.",
};

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">


      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Get In Touch</h2>

            <div className="bg-accent p-8 rounded-3xl border border-gray-100 flex items-start gap-6">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-secondary shrink-0 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Hospital Address</h3>
                <p className="text-text-dark leading-relaxed">
                  KPR Multispeciality Hospital<br />
                  Main Road, Karimnagar<br />
                  Telangana, India - 505001
                </p>
              </div>
            </div>

            <div className="bg-accent p-8 rounded-3xl border border-gray-100 flex items-start gap-6">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-secondary shrink-0 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Contact Numbers</h3>
                <p className="text-text-dark mb-1"><strong>Emergency (24/7):</strong> <a href="tel:+919999999999" className="text-secondary hover:underline">+91-9999999999</a></p>
                <p className="text-text-dark mb-1"><strong>Appointments:</strong> <a href="tel:+918888888888" className="text-secondary hover:underline">+91-8888888888</a></p>
                <p className="text-text-dark"><strong>Reception:</strong> <a href="tel:+917777777777" className="text-secondary hover:underline">+91-7777777777</a></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-accent p-8 rounded-3xl border border-gray-100 flex items-start gap-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Email Us</h3>
                  <a href="mailto:info@kprhospital.com" className="text-sm text-text-dark hover:text-secondary transition-colors">info@kprhospital.com</a>
                </div>
              </div>

              <div className="bg-accent p-8 rounded-3xl border border-gray-100 flex items-start gap-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Working Hours</h3>
                  <p className="text-sm text-text-dark">Open 24/7 (365 Days)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden h-[600px] relative shadow-md border border-gray-200/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.536780962386!2d79.13083167584102!3d18.435773172080352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd91ff68994bb%3A0x28580dd11c6c2394!2sKPR%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1780634921230!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KPR Multispeciality Hospital Location Map"
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
