import React from 'react';

import reactStringReplace from 'react-string-replace';
import processString from 'react-process-string';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
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
