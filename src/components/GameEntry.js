import React from 'react';
import styled from 'styled-components';

const GameEntry = () => {
  return (
    <WrapperStyles>
      <DpcHeaderStyles>FILTER HEADER</DpcHeaderStyles>
      <DpcListStyles>
        <div className='schedule_day_section'>
          <div className='schedule_day_header'>
            <time datetime='1654462800000' className='schedule_date_label'>
              Monday, June 6th
            </time>
          </div>
          <div className='schedule_node_list'>
            <div className='dpc_schedule_entry'>
              <DpcBodyStyles>
                <div className='dpc_left_section'>
                  <div className='node_type_upper'>China</div>
                  <div className='node_type_lower'>DIV II</div>
                  <div className='node_time_label'>7:05 AM</div>
                </div>
                <div className='dpc_center_section'>
                  <div className='dpc_team_section left_team'>
                    <div className='dpc_team_name'>LBZS</div>
                    <div className='dpc_team_record'>3 - 4</div>
                  </div>
                  <div>IMAGE</div>
                  <div className='dpc_center_container'>
                    <div className='dpc_score'>1 - 2</div>
                  </div>
                  <div>IMAGE</div>
                  <div className='dpc_team_section right_team'>
                    <div className='dpc_team_name'>Team Fusion</div>
                    <div className='dpc_team_record'>3 - 4</div>
                  </div>
                </div>
                <div className='dpc_right_section'>R</div>
              </DpcBodyStyles>
              <div className='dpc_schedule_disclosure'></div>
            </div>
          </div>
        </div>
      </DpcListStyles>
    </WrapperStyles>
  );
};

const WrapperStyles = styled.div`
  color: #fff;
  width: 100%;
  height: 100vh;

  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DpcHeaderStyles = styled.div`
  width: 100%;
  height: 100px;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 30px;
  align-items: center;
  background: linear-gradient(
    180deg,
    #161618 0%,
    #161618 0%,
    #161618 75%,
    rgba(22, 22, 24, 0) 100%
  );

  z-index: 998;
  padding: 0px 20px;
`;

const DpcListStyles = styled.div`
  width: 100%;
  min-height: 1000px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding: 0px 0px;

  .schedule_day_section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .schedule_day_header {
      top: 140px;
      width: calc(100% - 40px);
      max-width: 1200px;
      height: 40px;
      margin: 0px 0px;
      background-color: #28282e;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: sticky;
      top: 200px;
      z-index: 2;
      box-shadow: 0px 0px 16px rgb(0 0 0 / 40%);
      .schedule_date_label {
        color: #fff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-align: center;
      }
    }

    .schedule_node_list {
      width: 100%;
      max-width: 1240px;
      padding: 0px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      .dpc_schedule_entry {
        width: 100%;
        max-width: 1200px;
        background-color: #27272dbf;
        box-shadow: 4px 4px 8pxrgba (0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        margin-bottom: 2px;
        border: 1px solid transparent;
        transition-property: border, background-color;
        transition-timing-function: ease-in-out;
        transition-duration: 0.2s;

        .dpc_schedule_disclosure {
          height: 0px;
          min-height: 0px;
        }
      }
    }
  }
`;

const DpcBodyStyles = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .dpc_left_section {
    width: 250px;
    min-width: 250px;
    max-width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    .node_type_upper {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 3px;
      color: #fff;
      margin-bottom: 2px;
    }
    .node_type_lower {
      font-size: 12px;
      letter-spacing: 1px;
      color: #a3a3a3;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 8px;
    }
    .node_time_label {
      color: #6b7785;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      text-align: center;
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
  }
  .dpc_center_section {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #a3a3a3;

    .dpc_team_section {
      flex-grow: 1;
      flex-basis: 0;
      display: flex;
      flex-direction: column;

      .dpc_team_name {
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .dpc_team_record {
        font-size: 13px;
        font-weight: 700;
        color: #6b7785;
      }
    }
    .left_team {
      text-align: right;
      margin-right: 14px;
    }
    .dpc_center_container {
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      .dpc_score {
        width: 100px;
        text-align: center;
      }
    }
    .right_team {
      text-align: left;
      margin-left: 14px;
    }
  }
  .dpc_right_section {
    width: 250px;
    max-width: 250px;
    min-width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default GameEntry;
