import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { Skull, Swords, Map, BookOpen } from 'lucide-react';
import { useAudioContext } from '@/contexts/AudioContext';

const categories = [
  { id: 'bosses', name: 'Chefes de Cinder', icon: Skull, description: 'Enfrente os Lords of Cinder' },
  { id: 'builds', name: 'Builds de Atributos', icon: Swords, description: 'Construa seu campeão' },
  { id: 'maps', name: 'Mapas de Lothric', icon: Map, description: 'Explore cada canto' },
  { id: 'lore', name: 'Lore Profunda', icon: BookOpen, description: 'Desvende os mistérios' },
];

const CategoriesSection: React.FC = () => {
  const { playSound } = useAudioContext();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    playSound('metalClick');
    gsap.to(cardRefs.current[index], {
      scale: 1.05,
      borderColor: 'hsl(16, 100%, 50%)',
      boxShadow: '0 0 40px hsl(16, 100%, 50%, 0.3), inset 0 0 20px hsl(16, 100%, 50%, 0.1)',
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(cardRefs.current[index], {
      scale: 1,
      borderColor: 'hsl(0, 0%, 18%)',
      boxShadow: 'none',
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section id="categories" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl text-center text-ember-gradient mb-4">O Caminho</h2>
        <p className="text-center text-muted-foreground mb-16">Escolha sua jornada através de Lothric</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              ref={el => cardRefs.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="glass-card rounded-lg p-8 border border-ash cursor-pointer transition-colors"
            >
              <cat.icon className="w-12 h-12 text-ember mb-4" />
              <h3 className="font-cinzel text-xl text-foreground mb-2">{cat.name}</h3>
              <p className="text-muted-foreground text-sm">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
