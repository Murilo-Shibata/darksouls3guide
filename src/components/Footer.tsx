import React from 'react';
import { Github, Twitter, Volume2, VolumeX } from 'lucide-react';
import { useAudioContext } from '@/contexts/AudioContext';

const Footer: React.FC = () => {
  const { isMuted, toggleMute } = useAudioContext();

  return (
    <footer className="py-16 px-4 border-t border-ash relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-cinzel text-6xl you-died mb-8">YOU DIED</h2>
        
        <p className="text-muted-foreground mb-8">
          Lothric Codex • Um tributo ao mundo de Dark Souls 3
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-muted-foreground hover:text-ember transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-ember transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <button onClick={toggleMute} className="text-muted-foreground hover:text-ember transition-colors">
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>

        <p className="text-xs text-muted-foreground">
          Dark Souls é marca registrada da FromSoftware e Bandai Namco.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
