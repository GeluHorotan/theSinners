import React, { useState } from 'react';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';
import { obsH2 } from '../Utility/Colors';
import styled from 'styled-components';

const ViewMode = ({ pageFunction, scrollFunction, viewMode }) => {
  return (
    <ViewModeStyles>
      <div className='views'>
        <div
          className={`view_option ${
            viewMode === 'pagination' ? 'active_view' : ''
          }`}
          onClick={pageFunction}
        >
          <RiIcons.RiPageSeparator />
          PAGE
        </div>
        <div
          className={`view_option ${
            viewMode === 'infiniteScroll' ? 'active_view' : ''
          }`}
          onClick={scrollFunction}
        >
          <IoIcons.IoInfinite />
          SCROLL
        </div>
      </div>
    </ViewModeStyles>
  );
};

export default ViewMode;

const ViewModeStyles = styled.section`
  width: 100%;
  padding: 5vh 0;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  gap: 2rem;

  color: ${obsH2};
  .active_view {
    filter: brightness(1) !important;
  }
  .views {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: #fff;

    .view_option {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      filter: brightness(0.6);
      transition: all 200ms ease-in-out;
      font-weight: 400;
      letter-spacing: 1px;
      &:hover {
        filter: brightness(1);
      }
    }
    svg {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;

      color: #fff;
    }
  }
`;
