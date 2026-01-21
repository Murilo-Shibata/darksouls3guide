import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingAsh: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const ashCount = 20;

    for (let i = 0; i < ashCount; i++) {
      createAshParticle(container, i * 400);
    }

    const interval = setInterval(() => {
      createAshParticle(container, 0);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const createAshParticle = (container: HTMLDivElement, delay: number) => {
    const ash = document.createElement('div');
    ash.className = 'ash-particle';
    
    const size = 2 + Math.random() * 4;
    ash.style.width = `${size}px`;
    ash.style.height = `${size}px`;
    ash.style.left = `${Math.random() * 100}%`;
    ash.style.bottom = '-10px';
    ash.style.opacity = '0';
    
    container.appendChild(ash);

    const duration = 8 + Math.random() * 6;
    const drift = (Math.random() - 0.5) * 200;

    gsap.to(ash, {
      y: -window.innerHeight - 50,
      x: drift,
      opacity: 0.6,
      duration: duration,
      delay: delay / 1000,
      ease: "none",
      onComplete: () => {
        ash.remove();
      }
    });

    // Add slight rotation and scale variation
    gsap.to(ash, {
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      duration: duration,
      delay: delay / 1000,
      ease: "none"
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default FloatingAsh;
