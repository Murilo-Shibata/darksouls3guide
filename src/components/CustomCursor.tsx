import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface CustomCursorProps {
  enabled?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ enabled = true }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const sparkContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const sparkCount = useRef(0);

  useEffect(() => {
    if (!enabled || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      const { clientX, clientY } = e;
      
      // Move cursor
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out"
      });

      // Calculate distance moved
      const dx = clientX - lastPosition.current.x;
      const dy = clientY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Create sparks based on movement
      if (distance > 5 && sparkContainerRef.current && sparkCount.current < 50) {
        createSpark(clientX, clientY);
        lastPosition.current = { x: clientX, y: clientY };
      }

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [enabled]);

  const createSpark = (x: number, y: number) => {
    if (!sparkContainerRef.current) return;

    sparkCount.current++;

    const spark = document.createElement('div');
    spark.className = 'spark-particle';
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    sparkContainerRef.current.appendChild(spark);

    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 30;
    const targetX = Math.cos(angle) * distance;
    const targetY = Math.sin(angle) * distance - 20; // Float up slightly

    gsap.to(spark, {
      x: targetX,
      y: targetY,
      opacity: 0,
      scale: 0,
      duration: 0.6 + Math.random() * 0.3,
      ease: "power2.out",
      onComplete: () => {
        spark.remove();
        sparkCount.current--;
      }
    });
  };

  if (!enabled || typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ left: 0, top: 0 }}
      >
        {/* Outer ring */}
        <div className="w-8 h-8 rounded-full border border-ember/50 flex items-center justify-center">
          {/* Inner dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-ember shadow-[0_0_8px_hsl(16,100%,50%)]" />
        </div>
      </div>

      {/* Spark container */}
      <div ref={sparkContainerRef} className="particle-container" />

      {/* Hide default cursor */}
      <style>{`
        body { cursor: none !important; }
        a, button, [role="button"] { cursor: none !important; }
      `}</style>
    </>
  );
};

export default CustomCursor;
