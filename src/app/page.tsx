import HeroSection from "@/components/home/HeroSection";

import DepartmentGrid from "@/components/home/DepartmentGrid";
import DoctorCards from "@/components/home/DoctorCards";
import SplashScreen from "@/components/home/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <HeroSection />

      <DepartmentGrid />
      <DoctorCards />
    </>
  );
}
