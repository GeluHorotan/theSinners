import React from 'react';

export const getPips = (win) => {
  const numbers = ['1', '2', '3'];
  return numbers.map((number, index) => {
    return (
      <div
        key={{ index }}
        className={`pips ${win > index ? 'pip_active' : ''}`}
      ></div>
    );
  });
};
