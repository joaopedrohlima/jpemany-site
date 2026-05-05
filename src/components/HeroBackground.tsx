'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Using pageX/pageY so it accounts for scroll if the user scrolls down the hero
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 60%, transparent 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Interactive Mouse Glow */}
      <motion.div 
        className="absolute w-[800px] h-[800px] bg-primary/15 rounded-full blur-[120px]"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 1
        }}
      />
      
      {/* Constant ambient glows */}
      <div 
        className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" 
        style={{ animationDuration: '5s' }} 
      />
      <div 
        className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse" 
        style={{ animationDuration: '7s', animationDelay: '1s' }} 
      />
      
      {/* Floating particles (simulated with CSS keyframes) */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/50 rounded-full blur-[1px] animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-cyan-400/50 rounded-full blur-[2px] animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-500/50 rounded-full blur-[1px] animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
    </div>
  );
}
