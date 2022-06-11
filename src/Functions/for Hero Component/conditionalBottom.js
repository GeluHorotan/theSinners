import React from 'react';

export const conditionalBottom = (spell, isUpgrade) => {
  switch (true) {
    case isUpgrade === true && spell.ability_has_shard !== false:
      return <></>;
    case isUpgrade === false && spell.ability_has_shard !== true:
      return <></>;
    case isUpgrade === false && spell.ability_is_granted_by_shard !== false:
      return <></>;
    case isUpgrade === true:
      return <></>;

    default:
      return null;
  }
};
