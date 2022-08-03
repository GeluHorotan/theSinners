import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import styled from 'styled-components';
import { obsH2 } from './Utility/Colors';

const DropdownMenu = ({ children, title }) => {
  return (
    <DropdownStyles>
      <Menu>
        <Menu.Button className={'menu_button'}>
          <div className='dropdown_selector'>{title} </div>

          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Menu.Items className={'grid_tabels_dropdown_menu'}>
              {children}
            </Menu.Items>
          </Transition>
        </Menu.Button>
      </Menu>
    </DropdownStyles>
  );
};

const DropdownStyles = styled.div`
  width: 17%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  z-index: 10;
  .menu_button {
    position: relative;
    width: 100%;
    height: 30px;
    background: ${obsH2};
    color: white;
    letter-spacing: 1px;
    background-color: #5e6976;
    padding-right: 12px;
    border-radius: 3px;
    border: none;
    white-space: nowrap;
    justify-content: flex-start;
    align-self: flex-start;
    z-index: 1;
    box-shadow: 4px 4px 8px rgb(0 0 0 / 30%);
    cursor: pointer;
    .dropdown_selector {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 1rem;
      width: 100%;
    }
  }
  .grid_tabels_dropdown_menu {
    background: #2e3339;
    display: flex;
    width: 100%;
    min-height: 0;
    height: fit-content;
    flex-direction: column;
    position: absolute;
    left: 0;
    margin-top: 1rem;
    z-index: 1;
    border-radius: 3px;
    align-items: flex-end;
    justify-content: space-evenly;
    pointer-events: initial;
    box-shadow: 6px 6px 8px rgb(0 0 0 / 60%);
    .menu_options {
      width: 100%;

      height: 100%;
      text-transform: uppercase;
      padding: 12px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      align-items: flex-start;
      cursor: pointer;
      user-select: none;
      filter: brightness(0.8);
      transition: background-color, filter 150ms ease-in-out;
      &:hover {
        background-color: #41474e;
        filter: brightness(1);
      }
    }
  }
`;

export default DropdownMenu;
