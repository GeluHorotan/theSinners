import React from 'react';

export const getAttackType = (capability) => {
  if (capability === 1) {
    return 'MELEE';
  } else {
    return 'RANGED';
  }
};
