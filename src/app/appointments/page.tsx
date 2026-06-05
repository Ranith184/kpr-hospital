"use client";

import { useState } from "react";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";

export default function AppointmentsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    doctor: "",
    date: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const filteredDoctors = formData.department 
    ? doctors.filter(d => d.departmentId === formData.department)
    : doctors;

  return (
    <div className="py-20 bg-accent min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-primary text-white p-8 md:p-12 text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Book an Appointment
            </h1>
            <p className="opacity-90 max-w-lg mx-auto">
              Fill out the form below and our team will get back to you within 30 minutes to confirm your appointment.
            </p>
          </div>

          <div className="p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
                <h2 className="text-2xl font-bold text-primary mb-2">Request Received!</h2>
                <p className="text-text-dark">We have received your appointment request. Our support team will call you shortly to confirm the timings.</p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", email: "", department: "", doctor: "", date: "", description: "" }); }}
                  className="mt-8 bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">Patient Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">Phone Number *</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">Department</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value, doctor: ""})}>
                      <option value="">Select Speciality</option>
                      {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">Preferred Doctor</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none bg-white" value={formData.doctor} onChange={e => setFormData({...formData, doctor: e.target.value})}>
                      <option value="">Any Available Doctor</option>
                      {filteredDoctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">Preferred Date *</label>
                    <input required type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">Email (Optional)</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-dark mb-2">Brief Description of Issue</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="How can we help you?"></textarea>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-gray-500 font-medium">🔒 100% Confidential</p>
                  <button type="submit" className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl">
                    Confirm Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
