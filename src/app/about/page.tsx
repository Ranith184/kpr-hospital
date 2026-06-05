import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | KPR Multispeciality Hospital",
  description: "Learn about the mission, vision, and values of KPR Multispeciality Hospital in Karimnagar.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About KPR Hospital</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">
          Committed to delivering world-class healthcare with compassion, excellence, and transparency since our inception.
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Our Story</h2>
            <p className="text-text-dark leading-relaxed mb-4">
              KPR Multispeciality Hospital was founded with a singular vision: to bring advanced, accessible, and affordable healthcare to the people of Karimnagar and surrounding districts.
            </p>
            <p className="text-text-dark leading-relaxed mb-6">
              Over the years, we have grown from a small clinic into a comprehensive healthcare facility equipped with state-of-the-art infrastructure, advanced ICUs, and a team of highly experienced specialists. We pride ourselves on our patient-first approach.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-secondary font-semibold">
                <CheckCircle className="w-5 h-5" /> NABH Accredited Facility
              </li>
              <li className="flex items-center gap-3 text-secondary font-semibold">
                <CheckCircle className="w-5 h-5" /> 24/7 Emergency & Trauma Care
              </li>
              <li className="flex items-center gap-3 text-secondary font-semibold">
                <CheckCircle className="w-5 h-5" /> Cashless Insurance Facility
              </li>
            </ul>
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logoo.png`}
              alt="KPR Multispeciality Hospital Building"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-accent p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-text-dark leading-relaxed">
              To provide compassionate, comprehensive, and advanced healthcare services that improve the quality of life for our patients, while maintaining the highest standards of medical ethics and excellence.
            </p>
          </div>
          <div className="bg-accent p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-text-dark leading-relaxed">
              To be the most trusted and preferred healthcare destination in Telangana, known for clinical excellence, patient safety, and continuous innovation in medical care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
