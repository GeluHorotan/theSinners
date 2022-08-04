import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import styled from 'styled-components';
import { obsH2 } from './Utility/Colors';
import * as BsIcons from 'react-icons/bs';

const DropdownMenu = ({ children, title, className }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <DropdownStyles className={className}>
      <Menu>
        <Menu.Button
          className={'menu_button'}
          onClick={() => {
            setIsActive((prevState) => !isActive);
          }}
        >
          <div className='dropdown_selector'>
            {title}{' '}
            {!isActive ? (
              <div className='icon'>
                {' '}
                <BsIcons.BsCaretDownFill></BsIcons.BsCaretDownFill>{' '}
              </div>
            ) : (
              <div className='icon'>
                {' '}
                <BsIcons.BsCaretUpFill></BsIcons.BsCaretUpFill>{' '}
              </div>
            )}
          </div>

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
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0.5rem;
  z-index: 10;
  .menu_button {
    position: relative;
    width: 100%;
    height: 2rem;
    background: ${obsH2};
    color: white;
    letter-spacing: 1px;
    background: none;
    border: none;
    white-space: nowrap;
    justify-content: flex-start;
    align-self: flex-start;
    z-index: 1;
    box-shadow: 4px 4px 8px rgb(0 0 0 / 30%);

    @media screen and (max-width: 768px) {
      height: 1.5rem;
    }

    cursor: pointer;
    .dropdown_selector {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 3px;
      padding-left: 0.5rem;

      transition: 150ms all ease-in-out;
      clip-path: polygon(
        0px 0px,
        calc(100% - 30px) 0px,
        calc(100% - 40px) 100%,
        calc(100% - 35px) 100%,
        calc(100% - 25px) 0px,
        calc(100% + 2px) 0px,
        calc(100% + 2px) 100%,
        0px 100%
      );
      background-color: #5e6976;
      color: #fff;
      width: 100%;

      height: 100%;
      @media screen and (max-width: 768px) {
        font-size: 0.7rem;
      }
      .icon {
        background: linear-gradient(
          108deg,
          #41474e 0%,
          #41474e calc(100% - 33px),
          #ff6046 calc(100% - 33px),
          #ff6046 100%
        );
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: flex-end;
        padding-right: 0.35rem;
        align-items: center;
        clip-path: polygon(
          0px 0px,
          calc(100% - 100%) 0px,
          calc(100% - 100%) 100%,
          calc(100% - 35px) 100%,
          calc(100% - 25px) 0px,
          calc(100% + 100%) 0px,
          calc(100% + 100%) 100%,
          0px 100%
        );
      }
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
    z-index: 10;
    border-radius: 3px;
    align-items: flex-end;
    justify-content: space-evenly;
    pointer-events: initial;
    box-shadow: 6px 6px 8px rgb(0 0 0 / 60%);
    .menu_options {
      width: 100%;

      height: 100%;
      text-transform: uppercase;
      padding: 0.8rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      cursor: pointer;
      user-select: none;
      filter: brightness(0.8);
      transition: background-color, filter 150ms ease-in-out;

      @media screen and (max-width: 768px) {
        font-size: 0.6rem;
      }
      &:hover {
        background-color: #41474e;
        filter: brightness(1);
      }
    }
  }
`;

export default DropdownMenu;
