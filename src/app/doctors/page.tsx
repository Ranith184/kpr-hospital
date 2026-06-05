import Link from "next/link";
import { doctors } from "@/data/doctors";

export const metadata = {
  title: "Our Doctors | KPR Multispeciality Hospital",
  description: "Meet the expert specialists and doctors at KPR Multispeciality Hospital, Karimnagar.",
};

export default function DoctorsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Expert Specialists</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">
          A team of highly qualified and experienced doctors dedicated to your health and well-being.
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div key={doc.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              {/* Image Placeholder */}
              <div className="bg-gray-200 h-72 w-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Doctor Photo Placeholder</span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2 font-display">
                  {doc.name}
                </h3>
                <p className="text-primary font-bold mb-6">
                  {doc.designation}
                </p>
                <div className="space-y-3 text-sm text-text-dark mb-8">
                  <p className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-500">Experience</span> 
                    <span className="font-bold text-primary">{doc.experience}</span>
                  </p>
                  <p className="flex justify-between pb-2">
                    <span className="font-semibold text-gray-500">Qualifications</span> 
                    <span className="font-bold text-primary text-right pl-4">{doc.qualifications}</span>
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <Link 
                    href={`/doctors/${doc.id}`}
                    className="flex-1 text-center py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold transition-colors"
                  >
                    View Profile
                  </Link>
                  <Link 
                    href="/appointments"
                    className="flex-1 text-center py-3 rounded-full bg-primary text-white hover:opacity-90 font-bold transition-colors shadow-md hover:shadow-lg"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
