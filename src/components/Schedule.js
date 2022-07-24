import React from 'react';
import styled from 'styled-components';

const Schedule = ({ children }) => {
  return <ScheduleStyles>{children}</ScheduleStyles>;
};

const ScheduleStyles = styled.div`
  width: 100%;
  min-height: 1000px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding: 0px 0px;
`;

export default Schedule;
