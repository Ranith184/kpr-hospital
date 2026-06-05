import { notFound } from "next/navigation";
import Link from "next/link";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { CheckCircle, Phone } from "lucide-react";

export async function generateStaticParams() {
  return departments.map((dept) => ({
    id: dept.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const dept = departments.find(d => d.id === resolvedParams.id);
  if (!dept) return { title: "Department Not Found" };
  return {
    title: `${dept.name} in Karimnagar | KPR Hospital`,
    description: dept.shortDescription,
  };
}

export default async function DepartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const dept = departments.find(d => d.id === resolvedParams.id);
  
  if (!dept) {
    notFound();
  }

  const deptDoctors = doctors.filter(d => d.departmentId === dept.id);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-primary text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 rounded-l-full -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{dept.name}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {dept.shortDescription}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">About the Department</h2>
            <p className="text-text-dark leading-relaxed text-lg">{dept.description}</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-accent p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6 font-display">Conditions We Treat</h3>
              <ul className="space-y-4">
                {dept.conditionsTreated.map((condition, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-dark">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-accent p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6 font-display">Procedures & Treatments</h3>
              <ul className="space-y-4">
                {dept.procedures.map((proc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-dark">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{proc}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl shadow-gray-200/50">
            <h3 className="text-2xl font-bold text-primary mb-6 font-display">Our Specialists</h3>
            {deptDoctors.length > 0 ? (
              <div className="space-y-6">
                {deptDoctors.map(doc => (
                  <div key={doc.id} className="flex items-center gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="w-16 h-16 bg-gray-200 rounded-full shrink-0 flex items-center justify-center overflow-hidden">
                      <span className="text-xs text-gray-500">Photo</span>
                    </div>
                    <div>
                      <Link href={`/doctors/${doc.id}`} className="font-bold text-lg text-primary hover:text-secondary transition-colors">
                        {doc.name}
                      </Link>
                      <p className="text-sm text-text-dark">{doc.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-text-dark text-sm">Specialists will be updated soon.</p>
            )}
          </div>

          <div className="bg-secondary text-white rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Need an Appointment?</h3>
            <p className="mb-6 opacity-90 text-sm">Book a consultation with our {dept.name} experts today.</p>
            <Link href="/appointments" className="block w-full bg-white text-secondary font-bold py-3 rounded-full hover:bg-gray-50 transition-colors mb-4">
              Book Online
            </Link>
            <a href="tel:+919999999999" className="flex items-center justify-center gap-2 font-bold hover:text-gray-100 transition-colors">
              <Phone className="w-5 h-5" /> +91-9999999999
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}
