import React from 'react';
import styled from 'styled-components';

const Tooltip = ({ children }) => {
  return (
    <TooltipStyles>
      <div className='tooltip_body'>{children}</div>
    </TooltipStyles>
  );
};

const TooltipStyles = styled.div`
  width: 300px;
  position: absolute;
  min-height: 20rem;
  transform: translateY(-80%) translateY(-5.25rem) translateX(-7rem);
  /* display: none; */
  filter: drop-shadow(2px 2px 8px black);

  .tooltip_body {
    width: 300px;
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
