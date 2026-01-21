export interface Attribute {
  name: string;
  value: number;
  description: string;
}

export interface Weapon {
  name: string;
  type: string;
  scaling: string;
}

export interface Build {
  id: string;
  name: string;
  icon: string;
  description: string;
  attributes: Attribute[];
  weapons: Weapon[];
  playstyle: string;
}

export const builds: Build[] = [
  {
    id: 'knight',
    name: 'Knight',
    icon: 'Shield',
    description: 'O guerreiro equilibrado. Alta resistência física e versatilidade em combate corpo a corpo.',
    attributes: [
      { name: 'Vigor', value: 40, description: 'HP máximo' },
      { name: 'Attunement', value: 10, description: 'Slots de magia e FP' },
      { name: 'Endurance', value: 35, description: 'Stamina' },
      { name: 'Vitality', value: 25, description: 'Capacidade de carga' },
      { name: 'Strength', value: 40, description: 'Dano físico (armas pesadas)' },
      { name: 'Dexterity', value: 18, description: 'Dano físico (armas leves)' },
      { name: 'Intelligence', value: 9, description: 'Poder mágico' },
      { name: 'Faith', value: 9, description: 'Milagres e buff' },
      { name: 'Luck', value: 7, description: 'Descoberta de itens' },
    ],
    weapons: [
      { name: 'Claymore', type: 'Greatsword', scaling: 'Strength/Dex' },
      { name: 'Black Knight Sword', type: 'Greatsword', scaling: 'Strength' },
      { name: 'Lothric Knight Shield', type: 'Shield', scaling: '100% Physical' },
    ],
    playstyle: 'Tanky e agressivo. Use sua stamina para sequências de ataques pesados e bloqueie quando necessário.'
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    icon: 'Sparkles',
    description: 'Mestre das artes arcanas. Devasta inimigos à distância com feitiços devastadores.',
    attributes: [
      { name: 'Vigor', value: 25, description: 'HP máximo' },
      { name: 'Attunement', value: 35, description: 'Slots de magia e FP' },
      { name: 'Endurance', value: 15, description: 'Stamina' },
      { name: 'Vitality', value: 10, description: 'Capacidade de carga' },
      { name: 'Strength', value: 12, description: 'Dano físico (armas pesadas)' },
      { name: 'Dexterity', value: 18, description: 'Velocidade de cast' },
      { name: 'Intelligence', value: 60, description: 'Poder mágico' },
      { name: 'Faith', value: 7, description: 'Milagres e buff' },
      { name: 'Luck', value: 7, description: 'Descoberta de itens' },
    ],
    weapons: [
      { name: 'Court Sorcerer\'s Staff', type: 'Staff', scaling: 'Intelligence' },
      { name: 'Crystal Sage\'s Rapier', type: 'Rapier', scaling: 'Intelligence' },
      { name: 'Moonlight Greatsword', type: 'Greatsword', scaling: 'Intelligence' },
    ],
    playstyle: 'Mantenha distância. Use Soul Spear para DPS alto e Homing Soulmass para pressão constante.'
  },
  {
    id: 'pyromancer',
    name: 'Pyromancer',
    icon: 'Flame',
    description: 'O híbrido flamejante. Combina feitiços de fogo devastadores com combate versátil.',
    attributes: [
      { name: 'Vigor', value: 30, description: 'HP máximo' },
      { name: 'Attunement', value: 30, description: 'Slots de magia e FP' },
      { name: 'Endurance', value: 25, description: 'Stamina' },
      { name: 'Vitality', value: 15, description: 'Capacidade de carga' },
      { name: 'Strength', value: 15, description: 'Dano físico (armas pesadas)' },
      { name: 'Dexterity', value: 15, description: 'Velocidade de cast' },
      { name: 'Intelligence', value: 40, description: 'Poder de piromancia' },
      { name: 'Faith', value: 40, description: 'Poder de piromancia' },
      { name: 'Luck', value: 7, description: 'Descoberta de itens' },
    ],
    weapons: [
      { name: 'Pyromancy Flame', type: 'Flame', scaling: 'Int/Faith' },
      { name: 'Onyx Blade', type: 'Greatsword', scaling: 'Int/Faith' },
      { name: 'Witch\'s Locks', type: 'Whip', scaling: 'Int/Faith' },
    ],
    playstyle: 'Versátil. Alterne entre Chaos Bed Vestiges à distância e combate corpo a corpo com buff de fogo.'
  }
];
