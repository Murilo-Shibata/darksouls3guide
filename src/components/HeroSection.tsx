import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame } from 'lucide-react';
import { useAudioContext } from '@/contexts/AudioContext';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const { playSound } = useAudioContext();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split title into letters for stagger animation
      if (titleRef.current) {
        const title = titleRef.current;
        const text = title.textContent || '';
        title.innerHTML = text
          .split('')
          .map(char => char === ' ' ? ' ' : `<span class="inline-block opacity-0">${char}</span>`)
          .join('');

        gsap.to(title.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.05,
          delay: 0.5,
          ease: "power2.out",
          from: { y: 50 }
        });
      }

      // Subtitle fade in
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.5,
        ease: "power2.out"
      });

      // Button fade in
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 2,
        ease: "power2.out"
      });

      // Parallax effect on scroll
      if (sectionRef.current) {
        gsap.to(layer1Ref.current, {
          y: 100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });

        gsap.to(layer2Ref.current, {
          y: 200,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });

        gsap.to(layer3Ref.current, {
          y: 300,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleButtonHover = () => {
    playSound('metalClick');
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleButtonLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const scrollToContent = () => {
    playSound('whoosh');
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Parallax Background Layers */}
      <div 
        ref={layer3Ref}
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(16, 100%, 20%) 0%, transparent 60%)'
        }}
      />
      <div 
        ref={layer2Ref}
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(ellipse at 30% 70%, hsl(43, 100%, 30%) 0%, transparent 50%)'
        }}
      />
      <div 
        ref={layer1Ref}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, hsl(0, 0%, 8%) 0%, transparent 50%)'
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(0, 0%, 2%) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-ember-gradient mb-6 tracking-wide"
        >
          Lothric Codex
        </h1>
        
        <p 
          ref={subtitleRef}
          className="font-cinzel text-xl md:text-2xl text-bone/80 mb-12 tracking-[0.2em] uppercase"
        >
          Um Guia para o Inaceso
        </p>

        <button
          ref={buttonRef}
          onClick={scrollToContent}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          className="group relative inline-flex items-center gap-3 px-8 py-4 font-cinzel text-lg tracking-wider uppercase bg-transparent border-2 border-ember text-ember hover:bg-ember hover:text-background transition-colors duration-300 ember-glow"
        >
          <Flame className="w-5 h-5 group-hover:animate-flicker" />
          <span>Restaurar a Chama</span>
          <Flame className="w-5 h-5 group-hover:animate-flicker" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-ember/50 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-ember animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
