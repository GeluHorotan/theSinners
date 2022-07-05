import React from 'react';
import styled from 'styled-components';

// Tooltip Engine
import { createPopper } from '@popperjs/core/lib/popper-lite.js';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

const Tooltip = ({ children, triggerElement }) => {
  const tooltip = document.querySelector('.tooltip');
  const trigger = document.querySelector('.focusable');

  createPopper(trigger, tooltip, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });
  return (
    <TooltipStyles className='tooltip'>
      <div className='tooltip_body'>{children}</div>
    </TooltipStyles>
  );
};

const TooltipStyles = styled.div`
  width: fit-content;
  position: absolute;
  min-height: 0;
  vertical-align: middle;
  left: 50% !important;
  top: -50% !important;
  transform: translate(-50%, -100%) !important;
  display: none;
  filter: drop-shadow(2px 2px 8px black);
  transition: 250ms all ease-in-out;
  transform: scale(0);
  z-index: 100 !important;
  .tooltip_body {
    width: fit-content;
    background-color: #000;
    clip-path: polygon(
      0px 0px,
      0px calc(100% - 20px),
      calc(50% - 20px) calc(100% - 20px),
      50% 100%,
      calc(50% + 20px) calc(100% - 20px),
      100% calc(100% - 20px),
      100% 0px
    );
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: visible;
    text-align: left;
  }
`;

export default Tooltip;
