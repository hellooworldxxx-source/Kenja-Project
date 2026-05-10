
'use client'

import React, { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-20">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-full animate-pulse shadow-[0_0_30px_rgba(99,102,241,0.5)]"></div>
            <p className="text-zinc-500 text-[10px] font-black tracking-[0.2em] uppercase mt-6">Connecting to Neural Link...</p>
          </div>
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-20 flex-col p-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none"></div>
          <div className="w-20 h-20 bg-indigo-600/10 rounded-full flex items-center justify-center mb-6 border border-indigo-500/20">
             <div className="w-10 h-10 bg-indigo-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)]"></div>
          </div>
          <h3 className="text-white font-black text-lg mb-2 tracking-tight uppercase">Visual Matrix Standby</h3>
          <p className="text-zinc-500 text-xs font-medium max-w-xs">Connecting to autonomous business logic...</p>
        </div>
      ) : (
        <div className="w-full h-full transition-opacity duration-1000" style={{ opacity: isLoaded ? 1 : 0 }}>
          <Spline
            scene={scene}
            onLoad={() => {
              console.log('Spline Loaded Successfully');
              setIsLoaded(true);
            }}
            onError={(e) => {
              console.error('Spline Runtime Error:', e);
              setHasError(true);
            }}
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  )
}
