import React from 'react';
import { Flame } from 'lucide-react';
import { bosses } from '@/data/bosses';
import { useState } from 'react';

const FireStar = ({ filled }: { filled: boolean }) => (
  <Flame className={`w-4 h-4 ${filled ? 'fire-star' : 'fire-star-empty'}`} />
);

const BossCompendium: React.FC = () => {
  return (
    <section id="bosses" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl text-center text-ember-gradient mb-4">Boss Compendium</h2>
        <p className="text-center text-muted-foreground mb-16">Os desafios que aguardam</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bosses.map((boss) => (
            <div key={boss.id} className="glass-card rounded-lg overflow-hidden border border-ash hover:border-ember/50 transition-colors group">
              <div className="h-48 bg-gradient-to-br from-ember/20 to-gold/10 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={boss.image} 
                  alt={boss.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Flame className="w-20 h-20 text-ember/50 group-hover:text-ember transition-colors absolute hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-lg text-foreground mb-1">{boss.name}</h3>
                <p className="text-ember text-sm mb-3">{boss.subtitle}</p>
                <p className="text-muted-foreground text-xs mb-3">{boss.location}</p>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <FireStar key={i} filled={i <= boss.difficulty} />)}
                </div>
                <div className="flex flex-wrap gap-1">
                  {boss.weaknesses.map(w => (
                    <span key={w} className="text-xs px-2 py-1 bg-secondary rounded text-gold">{w}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BossCompendium;
