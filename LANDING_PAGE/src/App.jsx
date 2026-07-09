import React from "react";
import Header from "./components/header";
import Editor_Mockup from "./components/editor_mockup";
import Features from "./components/features";
import Footer from "./components/footer";

export default function LandingPage() {
  const steps = [
    { title: "Create a room", desc: "One click generates a private link — no account required to join." },
    { title: "Share the link", desc: "Send it to anyone. They land straight in your file, cursor and all." },
    { title: "Build together", desc: "Every change streams live. Close the tab and your session is saved automatically." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 md:px-16 pt-20 pb-16 items-center">
        <div>
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-widest mb-5">
            <span className="w-2 h-2 rounded-full bg-teal-400 ring-4 ring-teal-400/20"></span>
            Live now · 3 editors online
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5">
            Code together,<br />in <span className="text-teal-400">real time</span>.
          </h1>
          <p className="text-slate-400 text-lg max-w-md mb-8">
            See every teammate's cursor, edit, and comment the instant it happens —
            no refresh, no merge conflicts, no waiting for a pull request to talk.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="#" className="bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/25 transition">
              Start a session — free
            </a>
            <a href="#how" className="border border-slate-700 px-6 py-3 rounded-lg hover:border-teal-400 transition">
              See how it works
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            Built on <span className="font-mono text-slate-200">WebSockets</span> · used in{" "}
            <span className="font-mono text-slate-200">40+</span> classroom & hackathon sessions
          </p>
        </div>

        {/* Editor mockup */}
        <Editor_Mockup />

      </section>

      {/* Features */}
      <Features />

      {/* How it works */}
      <section id="how" className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">Getting started</div>
          <h2 className="text-3xl font-bold tracking-tight">Three steps to a shared room</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-teal-400 hover:-translate-y-1 transition">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}