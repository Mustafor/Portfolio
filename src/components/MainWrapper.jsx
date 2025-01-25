import React from "react";
import {
  HeroSection,
  // AchievementsSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "./index";

export default function MainWrapper() {
  return (
    <main className="pt-24 px-4 md:px-16 flex-grow overflow-hidden">
      <HeroSection />
      {/* <AchievementsSection /> */}
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
