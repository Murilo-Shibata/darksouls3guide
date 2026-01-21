import React, { useState } from 'react';
import { Shield, Sparkles, Flame } from 'lucide-react';
import { builds } from '@/data/builds';
import { useAudioContext } from '@/contexts/AudioContext';
import { useDamage } from '@/hooks/useDamage';

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
                className={`flex items-center gap-2 px-6 py-3 font-cinzel rounded border transition-all ${activeId === b.id ? 'border-ember bg-ember/10 text-ember' : 'border-ash text-muted-foreground hover:border-ember/50'
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
              <AttributeItem key={attr.name} attr={attr} />
            ))}
          </div>

          <h4 className="font-cinzel text-lg text-gold mb-4">Armas Recomendadas</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeBuild.weapons.map(w => (
              <WeaponCard key={w.name} w={w} />
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

const AttributeItem = ({ attr }: { attr: typeof builds[0]['attributes'][0] }) => {
  const { isDamaged, triggerDamage } = useDamage();

  return (
    <div
      onClick={triggerDamage}
      className={`text-center p-3 bg-secondary/50 rounded cursor-crosshair select-none transition-all ${isDamaged ? 'damage-flash bg-red-900/50' : ''}`}
    >
      <p className={`text-2xl font-bold ${isDamaged ? 'text-white' : 'text-ember'}`}>{attr.value}</p>
      <p className="text-sm text-foreground">{attr.name}</p>
    </div>
  );
};

const WeaponCard = ({ w }: { w: typeof builds[0]['weapons'][0] }) => {
  const { isDamaged, triggerDamage } = useDamage();

  return (
    <div
      onClick={triggerDamage}
      className={`p-4 border border-ash rounded cursor-crosshair select-none transition-all ${isDamaged ? 'damage-flash border-red-500 bg-red-900/20' : ''}`}
    >
      <p className="text-foreground font-medium">{w.name}</p>
      <p className="text-xs text-muted-foreground">{w.type} • {w.scaling}</p>
    </div>
  );
};

export default BuildArchitect;
