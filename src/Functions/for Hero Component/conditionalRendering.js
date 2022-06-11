import React from 'react';

export const conditionalRendering = (spell, isUpgrade) => {
  switch (true) {
    case isUpgrade === false && spell.ability_has_shard !== true:
      return <></>;
    case isUpgrade === false && spell.ability_has_scepter !== true:
      return <></>;
    case isUpgrade !== false && spell.ability_is_granted_by_shard !== false:
      return <></>;
    case isUpgrade === false:
      return <></>;
    default:
      return null;
  }
};
