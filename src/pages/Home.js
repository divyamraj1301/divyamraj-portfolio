import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import MoreAboutSection from '../components/MoreAboutSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <MoreAboutSection />
      <ContactBanner />
    </div>
  );
}
