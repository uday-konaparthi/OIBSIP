import React from 'react'

const Features = () => {
  
  const features = [
    {
      icon: "⌁",
      title: "Live cursors & selections",
      desc: "Watch exactly where every collaborator is typing, selecting, or scrolling — down to the character.",
    },
    {
      icon: "◈",
      title: "Conflict-free merging",
      desc: "Every keystroke syncs instantly across the room, so two people never overwrite the same line.",
    },
    {
      icon: "▤",
      title: "Inline voice notes",
      desc: "Drop a comment on any line and it appears for the whole room in under a second.",
    },
  ];

  return (
    <section id="features" className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">Why teams switch</div>
          <h2 className="text-3xl font-bold tracking-tight mb-3">Everything a shared session needs</h2>
          <p className="text-slate-400">No plugins, no local setup — open a link and you're in the same file.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-teal-400 hover:-translate-y-1 transition">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-lg mb-4">{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Features