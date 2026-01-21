export interface Boss {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  difficulty: number; // 1-5
  weaknesses: string[];
  description: string;
  lore: string;
  image: string;
}

import iudexGundyrImg from '@/assets/bosses/iudex-gundyr.jpg';
import vordtImg from '@/assets/bosses/vordt.jpg';
import abyssWatchersImg from '@/assets/bosses/abyss-watchers.jpg';
import pontiffSulyvahnImg from '@/assets/bosses/pontiff-sulyvahn.jpg';
import aldrichImg from '@/assets/bosses/aldrich.jpg';
import dancerImg from '@/assets/bosses/dancer.jpg';
import namelessKingImg from '@/assets/bosses/nameless-king.jpg';
import soulOfCinderImg from '@/assets/bosses/soul-of-cinder.jpg';

export const bosses: Boss[] = [
  {
    id: 'iudex-gundyr',
    name: 'Iudex Gundyr',
    subtitle: 'O Juiz',
    location: 'Cemitério das Cinzas',
    difficulty: 2,
    weaknesses: ['Fogo', 'Sangramento'],
    description: 'O primeiro desafio do Ashen One. Um cavaleiro corrompido que guarda o caminho para Firelink Shrine.',
    lore: 'Gundyr foi um campeão que chegou tarde demais para ligar a Primeira Chama, sendo então consumido pela corrupção do Abyss.',
    image: iudexGundyrImg
  },
  {
    id: 'vordt',
    name: 'Vordt do Vale Boreal',
    subtitle: 'O Cão de Guarda',
    location: 'High Wall of Lothric',
    difficulty: 2,
    weaknesses: ['Fogo', 'Magia Negra'],
    description: 'Um cavaleiro outrora nobre, agora transformado em uma besta feroz pelo frio do Vale Boreal.',
    lore: 'Vordt foi um dos Cavaleiros Outrider enviados por Pontiff Sulyvahn, condenado a perder sua humanidade.',
    image: vordtImg
  },
  {
    id: 'abyss-watchers',
    name: 'Abyss Watchers',
    subtitle: 'Legião do Lobo',
    location: 'Farron Keep',
    difficulty: 4,
    weaknesses: ['Raio', 'Escuridão'],
    description: 'Uma legião de guerreiros que juraram combater o Abyss, agora lutando eternamente entre si.',
    lore: 'Seguidores do Lobo de Sangue Artorias, os Watchers compartilham uma única alma, vinculados pelo sangue do lobo.',
    image: abyssWatchersImg
  },
  {
    id: 'pontiff-sulyvahn',
    name: 'Pontiff Sulyvahn',
    subtitle: 'O Tirano de Irithyll',
    location: 'Irithyll do Vale Boreal',
    difficulty: 5,
    weaknesses: ['Fogo', 'Thrust'],
    description: 'O tirano que governa Irithyll com punho de ferro, empunhando duas espadas profanas.',
    lore: 'Originário da Painted World, Sulyvahn conquistou Irithyll e corrompeu os deuses antigos.',
    image: pontiffSulyvahnImg
  },
  {
    id: 'aldrich',
    name: 'Aldrich, Devorador de Deuses',
    subtitle: 'O Abismo Faminto',
    location: 'Anor Londo',
    difficulty: 4,
    weaknesses: ['Fogo', 'Raio'],
    description: 'Uma massa amorfa de escuridão que devora deuses e assume suas formas.',
    lore: 'Aldrich foi um clérigo que desenvolveu gosto por carne humana e eventualmente se tornou um Lord of Cinder após devorar incontáveis vítimas.',
    image: aldrichImg
  },
  {
    id: 'dancer',
    name: 'Dançarina do Vale Boreal',
    subtitle: 'A Bailarina Sombria',
    location: 'High Wall of Lothric',
    difficulty: 4,
    weaknesses: ['Magia Negra', 'Sangramento'],
    description: 'Uma figura elegante e mortal que dança com lâminas gêmeas de fogo e magia.',
    lore: 'Outrora uma donzela da realeza, foi transformada em um Cavaleiro Outrider e esqueceu tudo além de sua dança mortal.',
    image: dancerImg
  },
  {
    id: 'nameless-king',
    name: 'Rei Sem Nome',
    subtitle: 'O Domador de Dragões',
    location: 'Archdragon Peak',
    difficulty: 5,
    weaknesses: ['Fogo (2ª fase)', 'Escuridão'],
    description: 'Um deus guerreiro esquecido que cavalga um dragão tempestade. O desafio supremo.',
    lore: 'O primogênito de Gwyn, expurgado da história por aliar-se aos dragões. Seu nome foi apagado de todos os registros.',
    image: namelessKingImg
  },
  {
    id: 'soul-of-cinder',
    name: 'Soul of Cinder',
    subtitle: 'A Chama Encarnada',
    location: 'Kiln of the First Flame',
    difficulty: 5,
    weaknesses: ['Raio', 'Frostbite'],
    description: 'A manifestação de todos que ligaram a Primeira Chama. O guardião final.',
    lore: 'Soul of Cinder é a amálgama de todos os Lords of Cinder, incluindo ecos de Gwyn, o próprio Senhor da Luz.',
    image: soulOfCinderImg
  }
];
