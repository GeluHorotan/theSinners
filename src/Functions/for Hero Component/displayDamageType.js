import React from 'react';

export const displayDamageType = (placeholder) => {
  switch (placeholder) {
    case 0:
      return null;
    case 1:
      return (
        <div className='ability_value'>
          <p className='ability_heading_title'>DAMAGE TYPE: </p>
          <span style={{ color: 'rgb(255,0,0)' }}>Physical</span>
        </div>
      );
    case 2:
      return (
        <div className='ability_value'>
          <p className='ability_heading_title'>DAMAGE TYPE:</p>
          <span style={{ color: 'rgb(163, 220, 238)' }}>Magical</span>
        </div>
      );
    case 4:
      return (
        <div className='ability_value'>
          <p className='ability_heading_title'>DAMAGE TYPE:</p>
          <span style={{ color: 'orange' }}>Pure</span>
        </div>
      );
    default:
      return null;
  }
};
