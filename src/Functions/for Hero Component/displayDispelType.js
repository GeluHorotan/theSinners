import React from 'react';

export const displayDispelType = (placeholder) => {
  switch (placeholder) {
    case 0:
      return null;
    case 1:
      return (
        <div className='ability_value justify__value_right'>
          <p className='ability_heading_title'>DISPELLABLE: </p>
          Only Strong Dispels
        </div>
      );
    case 2:
      return (
        <div className='ability_value justify__value_right'>
          <p className='ability_heading_title'>DISPELLABLE:</p>
          Yes
        </div>
      );
    case 3:
      return (
        <div className='ability_value justify__value_right'>
          <p className='ability_heading_title'>DISPELLABLE:</p>
          No
        </div>
      );
    default:
      return null;
  }
};
