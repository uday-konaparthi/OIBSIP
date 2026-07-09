import React from 'react'

const Experience = () => {
  return (
    <section className="py-14 border-b border-neutral-800">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-4">Experience</div>
          <h2 className="text-2xl text-neutral-50 font-semibold tracking-tight mb-5">Where I've worked</h2>
          <ul className="space-y-2.5 text-neutral-400 text-sm">
            <li className="relative pl-5"><span className="absolute left-0 text-amber-400">▸</span>Web Development Intern — Oasis Infobyte</li>
            <li className="relative pl-5"><span className="absolute left-0 text-amber-400">▸</span>Open-source contributor — medic/cht-core (GitHub)</li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-4">Certifications</div>
          <h2 className="text-2xl text-neutral-50 font-semibold tracking-tight mb-5">Extra credentials</h2>
          <ul className="space-y-2.5 text-neutral-400 text-sm">
            <li className="relative pl-5"><span className="absolute left-0 text-amber-400">▸</span>React.js — GeeksforGeeks</li>
            <li className="relative pl-5"><span className="absolute left-0 text-amber-400">▸</span>Generative AI — Google Cloud</li>
            <li className="relative pl-5"><span className="absolute left-0 text-amber-400">▸</span>400+ problems solved — LeetCode</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience