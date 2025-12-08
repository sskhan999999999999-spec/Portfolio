import HeroSection from "./Components/HomePages/HeroSection";
import Projects from "./Components/HomePages/Projects";
import SkillsSection from "./Components/HomePages/SkillsSection";
import Work from "./Components/HomePages/Work";

export const metadata = {
  title: "Shah Sawar | Frontend Developer",
  description:
    "I build fast, modern, and responsive web applications using Next.js, React, and Tailwind CSS.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <Projects/>
      <Work/>
    </div>
  );
}



