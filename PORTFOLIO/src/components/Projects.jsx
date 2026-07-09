import React from 'react'

const Projects = () => {
  const projects = [
    {
      name: "Collaborative Code Editor",
      tags: "React · Node.js · Socket.IO",
      desc: "A live, multi-user code editor where every keystroke, cursor, and selection syncs instantly across the room — built to explore real-time conflict handling over WebSockets.",
    },
    {
      name: "Real-Time Chat App",
      tags: "MERN · Socket.IO · JWT",
      desc: "A full-stack chat application with authenticated rooms, live message delivery, and presence indicators.",
    },
    {
      name: "Music Streaming Platform",
      tags: "MERN · REST API",
      desc: "A streaming web app with user libraries, playlists, and a REST API backend for track and user management.",
    },
  ];
  
  return (
    <section className="py-14 border-b border-neutral-800">
      <div className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-4">Projects</div>
      <h2 className="text-2xl text-neutral-50 font-semibold tracking-tight mb-6">Things I've shipped</h2>
      <div className="flex flex-col gap-5">
        {projects.map((p) => (
          <div key={p.name} className="bg-neutral-800/60 border border-neutral-700 rounded-xl px-7 py-6 hover:border-amber-400 transition">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <h3 className="text-neutral-50 font-semibold">{p.name}</h3>
              <span className="font-mono text-xs text-amber-400">{p.tags}</span>
            </div>
            <p className="text-neutral-400 text-sm mt-2.5">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects