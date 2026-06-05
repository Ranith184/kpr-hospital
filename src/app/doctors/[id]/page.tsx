import { notFound } from "next/navigation";
import Link from "next/link";
import { doctors } from "@/data/doctors";
import { CheckCircle, Clock, Phone, MapPin } from "lucide-react";

export async function generateStaticParams() {
  return doctors.map((doc) => ({
    id: doc.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const doc = doctors.find(d => d.id === resolvedParams.id);
  if (!doc) return { title: "Doctor Not Found" };
  return {
    title: `${doc.name} | ${doc.designation} | KPR Hospital`,
    description: `Book an appointment with ${doc.name}, ${doc.designation} in Karimnagar. Specializing in ${doc.specialization}.`,
  };
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const doc = doctors.find(d => d.id === resolvedParams.id);
  
  if (!doc) {
    notFound();
  }

  return (
    <div className="bg-accent min-h-screen pb-20">
      <div className="bg-primary text-white pt-24 pb-48 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 rounded-l-[100px] -z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 -mt-36 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            
            {/* Doctor Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-200 border-8 border-white shadow-lg flex-shrink-0 flex items-center justify-center -mt-24 md:mt-0 text-gray-500">
              Photo
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{doc.name}</h1>
              <p className="text-2xl text-secondary font-bold mb-6">{doc.designation}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-left">
                <div className="space-y-4">
                  <p className="flex items-center gap-3 text-text-dark">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <strong>Qualifications:</strong> {doc.qualifications}
                  </p>
                  <p className="flex items-center gap-3 text-text-dark">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <strong>Experience:</strong> {doc.experience}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 text-text-dark">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <strong>Specialization:</strong> {doc.specialization}
                  </p>
                  <p className="flex items-center gap-3 text-text-dark">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <strong>Languages:</strong> {doc.languages.join(", ")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="/appointments"
                  className="inline-flex items-center justify-center bg-secondary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-colors shadow-lg"
                >
                  Book Appointment
                </Link>
                <a href="tel:+919999999999" className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mr-2" /> Call Hospital
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-primary mb-6 font-display">Areas of Expertise</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doc.expertise.map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-dark">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-primary mb-6 font-display">Availability</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Consultation Timings</h4>
                    <p className="text-gray-500">{doc.availableDays}</p>
                    <p className="text-gray-500">{doc.timings}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Location</h4>
                    <p className="text-gray-500">KPR Multispeciality Hospital, Karimnagar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
