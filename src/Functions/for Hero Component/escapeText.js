import React from 'react';

import reactStringReplace from 'react-string-replace';

export const escapeText = (description, spell) => {
  return (
    <div>
      {reactStringReplace(description, / %(\w+)%/g, (match, i) => (
        <>
          {spell.special_values.map((value, index) => {
            if (value.name === match) {
              return <> {value.values_float}</>;
            }
          })}
        </>
      ))}
    </div>
  );
};
