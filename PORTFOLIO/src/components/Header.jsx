import React from 'react'

const Header = () => {
  return (
    <header className="pt-20 pb-12 border-b border-neutral-800">
      <span className="inline-block font-mono text-xs text-amber-400 border border-amber-400/30 bg-amber-400/10 px-3 py-1 rounded-full mb-6 tracking-wide">
        open to SWE roles & internships
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-50 tracking-tight mb-3">
        Hi, I'm Uday <span className="text-amber-400">—</span> Full-Stack Developer
      </h1>
      <p className="text-lg text-neutral-400 mb-6">
        MERN Stack · Real-Time Systems (WebRTC, Socket.IO) · Final-year EEE, SVEC
      </p>
      <div className="flex flex-wrap gap-6 text-sm">
        <a href="https://github.com/uday-konaparthi" className="border-b border-neutral-700 pb-0.5 hover:text-amber-400 hover:border-amber-400 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/uday-konaparthi-4824a2329/" className="border-b border-neutral-700 pb-0.5 hover:text-amber-400 hover:border-amber-400 transition">LinkedIn</a>
        <a href="https://drive.google.com/file/d/1SchlpCxj8hUkzRT9KfJPHeT7xB2bYeWP/view" className="border-b border-neutral-700 pb-0.5 hover:text-amber-400 hover:border-amber-400 transition">Resume (PDF)</a>
        <a href="mail:udayee005@gmail.com" className="border-b border-neutral-700 pb-0.5 hover:text-amber-400 hover:border-amber-400 transition">Email</a>
      </div>
    </header>

  )
}

export default Header