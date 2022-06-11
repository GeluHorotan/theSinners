import React from 'react';

export const displayPierce = (immunity) => {
  switch (true) {
    case immunity === 1:
      return (
        <div className='ability_value justify__value_right'>
          <p className='ability_heading_title'>PIERCES SPELL IMMUNITY:</p>
          Yes
        </div>
      );
    case immunity === 3:
      return (
        <div className='ability_value justify__value_right'>
          <p className='ability_heading_title'>PIERCES SPELL IMMUNITY:</p>
          Yes
        </div>
      );
    case immunity === 4:
      return (
        <div className='ability_value justify__value_right'>
          <p className='ability_heading_title'>PIERCES SPELL IMMUNITY:</p>
          No
        </div>
      );
    default:
      return null;
  }
};
