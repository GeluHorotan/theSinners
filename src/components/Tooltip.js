import React from 'react';
import styled from 'styled-components';

const Tooltip = ({ children }) => {
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

  transform: translateY(-105%) translateX(-38%);
  display: none;
  filter: drop-shadow(2px 2px 8px black);
  transition: 250ms all ease-in-out;

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

    text-align: left;
  }
`;

export default Tooltip;
