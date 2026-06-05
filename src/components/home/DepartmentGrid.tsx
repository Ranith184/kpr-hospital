import Link from "next/link";
import { departments } from "@/data/departments";
import { HeartPulse, Bone, Brain, Baby, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-8 h-8" />,
  Bone: <Bone className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Baby: <Baby className="w-8 h-8" />,
};

export default function DepartmentGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Centers of Excellence
          </h2>
          <p className="text-lg text-text-dark max-w-2xl mx-auto">
            We provide specialized care across multiple disciplines, equipped with advanced technology and led by expert doctors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <Link href={`/departments/${dept.id}`} key={dept.id} className="group">
              <div className="bg-accent rounded-2xl p-6 h-full border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {iconMap[dept.icon] || <HeartPulse className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-display">
                  {dept.name}
                </h3>
                <p className="text-text-dark mb-6 line-clamp-3">
                  {dept.shortDescription}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:opacity-80 transition-opacity">
                  Know More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/departments" className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
            View All Specialities
          </Link>
        </div>
      </div>
    </section>
  );
}
