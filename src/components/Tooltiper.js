import React from 'react';
import Tippy from '@tippyjs/react/headless';

import styled from 'styled-components';

const Tooltiper = ({
  children,
  element,
  interactive,
  reference,
  TooltipStyles,
}) => {
  return (
    <Tippy
      reference={reference}
      interactive={interactive}
      render={(attrs) => (
        <TooltipStyles className='box' tabIndex='-1' {...attrs}>
          <div className='tooltip_container'>{children}</div>
        </TooltipStyles>
      )}
    ></Tippy>
  );
};

const DefaultStyles = styled.div`
  background-color: #1b1b1b;
  box-shadow: 0px 0px 4px black;
  padding: 1rem;
  border-radius: 0.5rem;
  .tooltip_container {
    color: white;
  }
`;

export default Tooltiper;
