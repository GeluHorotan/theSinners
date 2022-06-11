import React, { useState, useEffect } from 'react';

import reactStringReplace from 'react-string-replace';
import processString from 'react-process-string';

const ProcessDescription = () => {
  const [description, setDescription] = useState();
  const [tester, setTester] = useState('yayyy,WORKING');

  const setter = () => {
    setDescription(`we are testing d this function %tester%%`);
  };
  // word.replace('%', '`${').replace('%%', '}`')
  useEffect(() => {
    setter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <div>
        {text.split(' ').map((str) => {
          if (str.startsWith('{')) {
            return <b> {state[str.replace(/[{}]/g, '')] + ' '}</b>; //add space
          } else {
            return str + ' ';
          }
        })}
      </div> */}

      {reactStringReplace(description, /%(\w+)%%/g, (match, i) => (
        <span></span>
      ))}
      {/* {description} */}
    </div>
  );
};

export default ProcessDescription;
