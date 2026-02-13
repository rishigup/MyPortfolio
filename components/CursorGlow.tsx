
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface CursorGlowProps {
  isDarkMode: boolean;
}

const CursorGlow: React.FC<CursorGlowProps> = ({ isDarkMode }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Smooth springs for a fluid, high-end feel
  const mainX = useSpring(-100, { damping: 30, stiffness: 300, mass: 0.5 });
  const mainY = useSpring(-100, { damping: 30, stiffness: 300, mass: 0.5 });
  
  const tailX = useSpring(-100, { damping: 25, stiffness: 150, mass: 0.8 });
  const tailY = useSpring(-100, { damping: 25, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mainX.set(e.clientX);
      mainY.set(e.clientY);
      tailX.set(e.clientX);
      tailY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.classList.contains('cursor-pointer') ||
        target.closest('a') !== null || 
        target.closest('button') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mainX, mainY, tailX, tailY]);

  return (
    <>
      {/* Outer Aesthetic Ring - Follows with more lag */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-primary/40 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: tailX,
          y: tailY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2 : isActive ? 0.8 : 1,
        }}
      />
      
      {/* Main Cursor Core */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        style={{
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 0.5 : 1,
        }}
      >
        <div className="absolute inset-0 bg-primary blur-[4px] rounded-full opacity-60" />
      </motion.div>

      {/* Floating Sparkle Trail - Only visible on movement */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-accent z-[9998] pointer-events-none hidden md:block"
        style={{
          x: tailX,
          y: tailY,
          translateX: '20px',
          translateY: '20px',
          opacity: 0.3
        }}
      />

      {/* Dynamic Ambient Background Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-1000"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${isDarkMode ? 'rgba(0, 255, 156, 0.04)' : 'rgba(123, 47, 247, 0.04)'}, transparent 80%)`
        }}
      />
    </>
  );
};

export default CursorGlow;
