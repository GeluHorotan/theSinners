import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { useSpring } from 'framer-motion';
import styled from 'styled-components';
import { preventOverflow } from '@popperjs/core';

const Tooltiper = ({
  children,
  element,
  interactive,
  reference,
  TooltipStyles,
}) => {
  const springConfig = { damping: 15, stiffness: 300 };
  const initialScale = 0.5;
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);

  function onMount() {
    scale.set(1);
    opacity.set(1);
  }

  function onHide({ unmount }) {
    const cleanup = scale.onChange((value) => {
      if (value <= initialScale) {
        cleanup();
        unmount();
      }
    });

    scale.set(initialScale);
    opacity.set(0);
  }

  return (
    <Tippy
      reference={reference}
      interactive={interactive}
      popperOptions={preventOverflow}
      render={(attrs) => (
        <TooltipStyles
          className='box'
          tabIndex='-1'
          popperOptions={preventOverflow}
          style={{
            scale,
            opacity,
          }}
          {...attrs}
        >
          <div className='tooltip_container'>{children}</div>
        </TooltipStyles>
      )}
      onMount={onMount}
      onHide={onHide}
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
