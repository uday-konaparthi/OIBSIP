import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-start pb-4 mb-5 border-b-2 border-amber-700">
          <h1 className="text-xl tracking-wide text-amber-800 font-semibold">Thermo</h1>
          <div className="text-right font-mono text-xs text-stone-500 leading-relaxed">
            <div>MODEL TC-101</div>
            <div>°C / °F / K</div>
          </div>
        </div>
  )
}

export default Header