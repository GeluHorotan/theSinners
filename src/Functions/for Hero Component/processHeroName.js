import React from 'react';

export const processHeroName = (name) => {
  const heroName = name.replace('npc_dota_hero_', '');
  return heroName;
};
