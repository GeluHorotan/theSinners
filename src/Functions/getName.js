import React from 'react';

export const getName = (element, elementId, type) => {
  let filtered = element.filter((item) => item.id === elementId);

  const replaced =
    type === 'item'
      ? filtered[0].name.replace('item_', '')
      : type === 'hero'
      ? filtered[0].name.replace('npc_dota_hero_', '')
      : '';

  return replaced;
};
