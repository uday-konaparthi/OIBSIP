import React from 'react'

const About = () => {
  const stack = ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "WebRTC", "Redux", "JWT", "TypeScript", "Tailwind CSS", "Git"];

  return (
    <section className="py-14 border-b border-neutral-800">
      <div className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-4">About</div>
      <h2 className="text-2xl text-neutral-50 font-semibold tracking-tight mb-5">Building real-time products, self-taught</h2>
      <p className="text-neutral-400 max-w-2xl leading-relaxed">
        I'm a final-year Electrical & Electronics Engineering student at Sri Venkateswara Engineering College,
        graduating August 2026, who taught himself full-stack development on the side. My focus is the MERN stack
        with a particular interest in real-time systems — WebSockets, WebRTC, and the kind of live, low-latency
        features most fresher developers haven't touched yet. I've solved 400+ problems on LeetCode and I'm
        currently looking for entry-level Software Engineer roles and internships, remote preferred.
      </p>
      <div className="flex flex-wrap gap-2.5 mt-6">
        {stack.map((s) => (
          <span key={s} className="font-mono text-sm bg-neutral-800 border border-neutral-700 px-3.5 py-1.5 rounded-md">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About