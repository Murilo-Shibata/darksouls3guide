import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const emberRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial ember pulse animation
    tl.to(emberRef.current, {
      scale: 1.2,
      duration: 0.8,
      repeat: 2,
      yoyo: true,
      ease: "power2.inOut",
    });

    // After 2 seconds, explode
    tl.add(() => {
      setIsExploding(true);
      createParticles();
    }, "+=0.3");

    // Fade out container
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
      onComplete: () => {
        onComplete();
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const createParticles = () => {
    if (!particlesRef.current) return;

    const particleCount = 30;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      const size = Math.random() * 8 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `hsl(${16 + Math.random() * 30}, 100%, ${50 + Math.random() * 20}%)`;
      particle.style.boxShadow = `0 0 ${size * 2}px hsl(16, 100%, 50%)`;
      particle.style.left = '50%';
      particle.style.top = '50%';
      particlesRef.current.appendChild(particle);
      particles.push(particle);

      const angle = (i / particleCount) * Math.PI * 2;
      const distance = 100 + Math.random() * 200;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      gsap.to(particle, {
        x,
        y,
        opacity: 0,
        scale: 0,
        duration: 0.8 + Math.random() * 0.4,
        ease: "power2.out",
        onComplete: () => {
          particle.remove();
        }
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-abyss"
    >
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {!isExploding && (
        <div 
          ref={emberRef}
          className="relative w-20 h-20"
        >
          {/* Core ember */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ember to-gold animate-ember-pulse" />
          
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300 to-ember opacity-80" />
          
          {/* Center bright spot */}
          <div className="absolute inset-4 rounded-full bg-white/50 blur-sm" />
          
          {/* Outer glow */}
          <div 
            className="absolute -inset-8 rounded-full opacity-30 blur-xl"
            style={{
              background: 'radial-gradient(circle, hsl(16, 100%, 60%) 0%, transparent 70%)'
            }}
          />
        </div>
      )}

      {/* Loading text */}
      <p className="absolute bottom-20 font-cinzel text-muted-foreground text-sm tracking-[0.3em] uppercase animate-pulse">
        Kindling the flame...
      </p>
    </div>
  );
};

export default Preloader;
