import React from 'react';
import Tippy from '@tippyjs/react/headless';

import styled from 'styled-components';
import { obsHD, obsidian, textObs } from '../Utility/Colors';

const Tooltiper = ({ children, element, interactive, reference }) => {
  return (
    <Tippy
      reference={reference}
      arrow={true}
      interactive={interactive}
      render={(attrs) => (
        <TooltipStyles
          className='box'
          tabIndex='-1'
          animation={true}
          {...attrs}
        >
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

const TooltipStyles = styled.div`
  background: ${obsidian};
  box-shadow: 0px 0px 4px black;

  .tooltip_container {
    color: white;
    width: 45rem;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .enemy_top_container {
      width: 100%;

      padding: 0.8rem;
      min-height: 3rem;
      display: flex;
      background: #192d2e;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      .enemy_logo {
        width: 64px;
        height: 64px;
        min-width: 64px;
        min-height: 64px;
        opacity: 1;
      }
      .enemy_team_name {
        display: flex;
        margin-left: 0.5rem;
        width: 100%;
        justify-content: space-between;
      }
    }

    .enemy_bottom_container {
      width: 100%;
      padding: 0.8rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .enemy_player_container {
        width: 8rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        background: #192d2e;
        box-shadow: -1px 1px 1px #2c5052;

        .enemy_player {
          min-width: 10rem;
          height: 10rem;
          margin-top: 0.5rem;
        }
        .enemy_player_role {
          background: ${obsidian};
          width: 100%;
          min-height: 2rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        .enemy_player_info {
          height: 100%;
          background: ${obsHD};
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 0.5rem;

          .real_name {
            color: ${textObs};
            font-size: 0.8rem;
          }
          .pro_name {
            letter-spacing: 1px;
          }
        }
      }
    }
  }
`;

export default Tooltiper;
