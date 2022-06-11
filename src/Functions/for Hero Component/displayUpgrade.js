import React from 'react';

export const displayUpgrade = (spell, isUpgrade) => {
  switch (true) {
    case isUpgrade !== false && spell.scepter_loc.length !== 0:
      return <div className='top_ability_upgrade'>SCEPTER ABILITY UPGRADE</div>;

    case isUpgrade !== false && spell.shard_loc.length !== 0:
      return <div className='top_ability_upgrade'>SHARD ABILITY UPGRADE</div>;
    case isUpgrade !== false && spell.ability_is_granted_by_scepter:
      return (
        <div className='top_ability_upgrade'>SCEPTER GRANTS NEW ABILITY</div>
      );
    case isUpgrade !== false && spell.ability_is_granted_by_shard:
      return (
        <div className='top_ability_upgrade'>SHARD GRANTS NEW ABILITY</div>
      );
    default:
      return null;
  }
};
