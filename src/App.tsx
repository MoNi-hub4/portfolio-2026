import { useState } from "react";
import { MotionConfig } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import FooterSection from "./sections/FooterSection";
import PortfolioDialog, { type DialogContent } from "./components/PortfolioDialog";

export default function App() {
  const [dialog, setDialog] = useState<DialogContent>(null);
  const openContact = () => setDialog({ type: "contact" });

  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="skip-link">Skip to content</a>
      <main id="top" className="min-h-screen bg-ink text-silver" style={{ overflowX: "clip" }}>
        <HeroSection onContact={openContact} />
        <MarqueeSection />
        <AboutSection onContact={openContact} />
        <ServicesSection />
        <ProjectsSection onPreview={(project) => setDialog({ type: "project", project })} />
      </main>
      <FooterSection onContact={openContact} />
      <PortfolioDialog content={dialog} onClose={() => setDialog(null)} />
    </MotionConfig>
  );
}
