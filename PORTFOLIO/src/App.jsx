import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-300 font-sans">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <Header />
        {/* About */}
        <About />

        {/* Projects */}
        <Projects />

        {/* Experience & Certs */}
        <Experience />

        <footer className="py-10 flex flex-wrap justify-between gap-3 text-neutral-500 text-sm">
          <span>Built for the OIB-SIP Web Development & Design Internship — Level 1, Task 2.</span>
          <span className="font-mono">Hyderabad, Telangana</span>
        </footer>

      </div>
    </div>
  );
}