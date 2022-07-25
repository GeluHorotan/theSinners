import React from 'react';
import styled from 'styled-components';
import GameEntry from './GameEntry';

const Schedule = ({ children }) => {
  return (
    <ScheduleStyles>
      <GameEntry></GameEntry>
    </ScheduleStyles>
  );
};

const ScheduleStyles = styled.div`
  background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/bg_granite_texture_sched.jpg');
  color: #fff;
  width: 100%;
  background-size: 100% auto;
  background-position: top, center;
  background-repeat: repeat-y;
  justify-content: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Schedule;
