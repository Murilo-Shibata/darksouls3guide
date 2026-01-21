import React, { useState } from 'react';
import { AudioProvider } from '@/contexts/AudioContext';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import FloatingAsh from '@/components/FloatingAsh';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import BossCompendium from '@/components/BossCompendium';
import BuildArchitect from '@/components/BuildArchitect';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AudioProvider>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <FloatingAsh />
        
        <main>
          <HeroSection />
          <CategoriesSection />
          <BossCompendium />
          <BuildArchitect />
        </main>
        
        <Footer />
      </div>
    </AudioProvider>
  );
};

export default Index;
