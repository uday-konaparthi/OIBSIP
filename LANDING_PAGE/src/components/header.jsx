import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 md:px-16 py-5 border-b border-slate-800 sticky top-0 bg-slate-950/90 backdrop-blur z-10">
      <div className="font-mono text-lg font-bold tracking-tight">
        Sync<span className="text-teal-400">Space</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
        <a href="#features" className="hover:text-slate-100 transition">Features</a>
        <a href="#how" className="hover:text-slate-100 transition">How it works</a>
        <a href="#" className="ml-4 border border-slate-700 text-slate-100 px-5 py-2 rounded-lg hover:border-teal-400 transition">
          Sign in
        </a>
      </nav>
    </header>
  )
}

export default Header