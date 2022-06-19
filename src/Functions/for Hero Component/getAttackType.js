import React from 'react';

export const getAttackType = (capability, icon) => {
  if (capability === 1) {
    return (
      <>
        {icon ? (
          <img
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg'
            alt=''
            className='attack_type_img'
          />
        ) : (
          ''
        )}
        MELEE
      </>
    );
  } else {
    return (
      <>
        {icon ? (
          <img
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg'
            alt=''
            className='attack_type_img'
          />
        ) : (
          ''
        )}{' '}
        RANGED
      </>
    );
  }
};
