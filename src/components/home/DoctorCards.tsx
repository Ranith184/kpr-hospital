import Link from "next/link";
import { doctors } from "@/data/doctors";

export default function DoctorCards() {
  // Take only top 3 doctors for home page
  const featuredDoctors = doctors.slice(0, 3);

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Expert Specialists
          </h2>
          <p className="text-lg text-text-dark max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced doctors dedicated to your health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDoctors.map((doc) => (
            <div key={doc.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              {/* Image Placeholder */}
              <div className="bg-gray-200 h-64 w-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Doctor Photo Placeholder</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1 font-display">
                  {doc.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {doc.designation}
                </p>
                <div className="space-y-2 text-sm text-text-dark mb-6">
                  <p><strong>Experience:</strong> {doc.experience}</p>
                  <p><strong>Qualifications:</strong> {doc.qualifications}</p>
                </div>
                
                <div className="flex gap-4">
                  <Link 
                    href={`/doctors/${doc.id}`}
                    className="flex-1 text-center py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-colors"
                  >
                    View Profile
                  </Link>
                  <Link 
                    href="/appointments"
                    className="flex-1 text-center py-2.5 rounded-lg bg-primary text-white hover:opacity-90 font-semibold transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/doctors" className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
}
