import Link from "next/link";
import { departments } from "@/data/departments";
import { HeartPulse, Bone, Brain, Baby, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Departments & Specialities | KPR Multispeciality Hospital",
  description: "Explore the Centers of Excellence at KPR Hospital, including Cardiology, Orthopedics, Neurology, and Gynecology.",
};

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-10 h-10" />,
  Bone: <Bone className="w-10 h-10" />,
  Brain: <Brain className="w-10 h-10" />,
  Baby: <Baby className="w-10 h-10" />,
};

export default function DepartmentsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Centers of Excellence</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">
          World-class medical care across multiple specialities, delivered by expert doctors using advanced technology.
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-accent rounded-3xl p-8 flex flex-col md:flex-row gap-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-white w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                {iconMap[dept.icon] || <HeartPulse className="w-10 h-10" />}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-3 font-display">
                  {dept.name}
                </h2>
                <p className="text-text-dark mb-6 leading-relaxed">
                  {dept.description}
                </p>
                <Link href={`/departments/${dept.id}`} className="inline-flex items-center text-secondary font-bold hover:text-primary transition-colors">
                  Explore Department <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
