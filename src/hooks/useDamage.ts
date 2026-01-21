import { useState, useCallback } from 'react';
import { useAudioContext } from '../contexts/AudioContext';

export const useDamage = (soundName: string = 'metalClick') => {
    const [isDamaged, setIsDamaged] = useState(false);
    const { playSound } = useAudioContext();

    const triggerDamage = useCallback(() => {
        setIsDamaged(true);
        playSound(soundName);

        // Reset after animation
        setTimeout(() => {
            setIsDamaged(false);
        }, 400); // Matches animation duration
    }, [playSound, soundName]);

    return { isDamaged, triggerDamage };
};
