import React from 'react'

const Editor_Mockup = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/60 border-b border-slate-800">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-3 text-slate-400 text-xs font-mono">server.js — 2 people editing</span>
      </div>
      <div className="p-6 font-mono text-sm text-slate-300 relative min-h-[220px] leading-7">
        <div><span className="text-slate-600 inline-block w-6">1</span><span className="text-violet-400">const</span> io = <span className="text-teal-400">require</span>(<span className="text-orange-400">'socket.io'</span>)(server);</div>
        <div><span className="text-slate-600 inline-block w-6">2</span></div>
        <div><span className="text-slate-600 inline-block w-6">3</span>io.<span className="text-teal-400">on</span>(<span className="text-orange-400">'connection'</span>, socket =&gt; {"{"}</div>
        <div><span className="text-slate-600 inline-block w-6">4</span>&nbsp;&nbsp;socket.<span className="text-teal-400">on</span>(<span className="text-orange-400">'edit'</span>, broadcast);</div>
        <div><span className="text-slate-600 inline-block w-6">5</span>&nbsp;&nbsp;socket.<span className="text-teal-400">on</span>(<span className="text-orange-400">'cursor'</span>, sync);</div>
        <div><span className="text-slate-600 inline-block w-6">6</span>{"}"});</div>

        <span className="absolute w-0.5 h-4 bg-teal-400 animate-pulse" style={{ top: "82px", left: "168px" }}>
          <span className="absolute -top-5 left-0 text-[10px] font-sans px-1.5 py-0.5 rounded bg-teal-400 text-slate-950 whitespace-nowrap">uday</span>
        </span>
        <span className="absolute w-0.5 h-4 bg-violet-400 animate-pulse" style={{ top: "124px", left: "96px" }}>
          <span className="absolute -top-5 left-0 text-[10px] font-sans px-1.5 py-0.5 rounded bg-violet-400 text-white whitespace-nowrap">reviewer</span>
        </span>
      </div>
    </div>
  )
}

export default Editor_Mockup