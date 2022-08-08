import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

import reactStringReplace from 'react-string-replace';

export const escapeNews = (description, spell) => {
  return (
    <div>
      {reactStringReplace(description, / [(\w+)]/g, (match, i) => (
        <>{match}</>
      ))}
    </div>
  );
};
