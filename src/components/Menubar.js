import React from 'react';
import styled from 'styled-components';
import { grey, obsidian, obsidianShadow, white } from '../Utility/Colors';

const Menubar = ({ children, className }) => {
  return (
    <MenubarStyles className={className}>
      <MenuStyles>{children}</MenuStyles>
    </MenubarStyles>
  );
};

const MenubarStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 2.5rem;
  color: white;
`;

const MenuStyles = styled.div`
  width: 100%;
  min-height: 3.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${obsidian};
  filter: ${obsidianShadow};
  position: sticky;
  /* top: 10rem; */
  z-index: 10;

  .menubar_list {
    flex-grow: 1;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1.2rem;
    button {
      background: none;
      border: none;
    }

    .menubar_label {
      min-height: 3.5rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: ${grey};

      transition-property: color;
      transition-timing-function: ease-in-out;
      transition-duration: 0.15s;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-weight: 700;
      font-size: 0.9rem;
      margin: 0 1.2rem;
      &:hover {
        color: ${white};
      }
    }
  }
  .tab_active {
    .menubar_label {
      color: ${white};
    }
  }
`;

export default Menubar;
