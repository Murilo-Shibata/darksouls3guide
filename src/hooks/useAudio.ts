import { useCallback, useEffect, useRef, useState } from 'react';
import { Howl, Howler } from 'howler';

// Sound effect URLs (using free sound effects)
const SOUND_URLS = {
  metalClick: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  fireAmbient: 'https://assets.mixkit.co/active_storage/sfx/1127/1127-preview.mp3',
  impact: 'https://assets.mixkit.co/active_storage/sfx/2751/2751-preview.mp3',
  whoosh: 'https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3',
};

type SoundType = keyof typeof SOUND_URLS;

export const useAudio = () => {
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lothric-muted') === 'true';
    }
    return false;
  });
  
  const soundsRef = useRef<Record<SoundType, Howl | null>>({
    metalClick: null,
    fireAmbient: null,
    impact: null,
    whoosh: null,
  });

  useEffect(() => {
    // Initialize sounds lazily
    Object.entries(SOUND_URLS).forEach(([key, url]) => {
      soundsRef.current[key as SoundType] = new Howl({
        src: [url],
        volume: key === 'fireAmbient' ? 0.1 : 0.3,
        loop: key === 'fireAmbient',
        preload: true,
      });
    });

    return () => {
      Object.values(soundsRef.current).forEach(sound => sound?.unload());
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('lothric-muted', String(isMuted));
    Howler.mute(isMuted);
  }, [isMuted]);

  const playSound = useCallback((type: SoundType) => {
    if (!isMuted && soundsRef.current[type]) {
      soundsRef.current[type]?.play();
    }
  }, [isMuted]);

  const stopSound = useCallback((type: SoundType) => {
    soundsRef.current[type]?.stop();
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  return {
    playSound,
    stopSound,
    toggleMute,
    isMuted,
  };
};

export default useAudio;
