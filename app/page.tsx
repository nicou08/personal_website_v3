"use client";

import { useRef, useState, useEffect } from "react";

import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    //console.log("Observing elements...");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            //console.log(`Observing element with id: ${entry.target.id}`);
          }
        });
      },
      { threshold: 0.7 }
    );

    if (aboutRef.current) {
      console.log("Observing aboutRef...", aboutRef.current);
      observer.observe(aboutRef.current);
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="flex flex-col xl:flex-row xl:justify-center">
      <Header
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        activeSection={activeSection}
      />
      <MainContent
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </main>
  );
}
