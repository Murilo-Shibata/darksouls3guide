import React, { useState } from 'react';
import { Shield, Sparkles, Flame } from 'lucide-react';
import { builds } from '@/data/builds';
import { useAudioContext } from '@/contexts/AudioContext';

const iconMap = { Shield, Sparkles, Flame };

const BuildArchitect: React.FC = () => {
  const [activeId, setActiveId] = useState('knight');
  const { playSound } = useAudioContext();
  const activeBuild = builds.find(b => b.id === activeId)!;
  const Icon = iconMap[activeBuild.icon as keyof typeof iconMap];

  return (
    <section id="builds" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl text-center text-ember-gradient mb-16">Build Architect</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {builds.map(b => {
            const BIcon = iconMap[b.icon as keyof typeof iconMap];
            return (
              <button
                key={b.id}
                onClick={() => { setActiveId(b.id); playSound('metalClick'); }}
                className={`flex items-center gap-2 px-6 py-3 font-cinzel rounded border transition-all ${
                  activeId === b.id ? 'border-ember bg-ember/10 text-ember' : 'border-ash text-muted-foreground hover:border-ember/50'
                }`}
              >
                <BIcon className="w-5 h-5" />
                {b.name}
              </button>
            );
          })}
        </div>

        <div className="glass-card rounded-lg p-8 border border-ash">
          <div className="flex items-center gap-4 mb-6">
            <Icon className="w-10 h-10 text-ember" />
            <div>
              <h3 className="font-cinzel text-2xl text-foreground">{activeBuild.name}</h3>
              <p className="text-muted-foreground">{activeBuild.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {activeBuild.attributes.map(attr => (
              <div key={attr.name} className="text-center p-3 bg-secondary/50 rounded">
                <p className="text-2xl font-bold text-ember">{attr.value}</p>
                <p className="text-sm text-foreground">{attr.name}</p>
              </div>
            ))}
          </div>

          <h4 className="font-cinzel text-lg text-gold mb-4">Armas Recomendadas</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeBuild.weapons.map(w => (
              <div key={w.name} className="p-4 border border-ash rounded">
                <p className="text-foreground font-medium">{w.name}</p>
                <p className="text-xs text-muted-foreground">{w.type} • {w.scaling}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildArchitect;
