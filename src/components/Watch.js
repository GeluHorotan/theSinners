import React, { useState, useEffect } from 'react';
import Team from './Team';
import styled from 'styled-components';

import Tooltip from './Tooltip';
import { Link } from 'react-router-dom';

// Functions
import { teamImage } from '../Functions/teamImage';
import { displayTeamRegion } from '../Functions/displayTeamRegion';
import { formatTimestamp } from '../Functions/formatTimestamp';
import MyPopover from './MyPopover';

const Watch = ({ leagues }) => {
  const [teamList, setTeamList] = useState();
  const [teamsCounter, setTeamsCounter] = useState(8);

  const getTeamList = async () => {
    const res = await fetch(`/.netlify/functions/teamList/`);
    const json = await res.json();
    setTeamList(json.teams);
  };

  useEffect(() => {
    getTeamList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <WrapperStyles>
      <TeamComponentStyles>
        {teamList &&
          teamList.map((team, index) => {
            return (
              <Team
                leagues={leagues}
                teamId={team.id}
                teamName={team.name}
                className='tester'
              >
                <MyPopover></MyPopover>
              </Team>
            );
          })}
      </TeamComponentStyles>
      <button onClick={() => setTeamsCounter((prevState) => prevState + 5)}>
        SHOW MORE TEAMS
      </button>
    </WrapperStyles>
  );
};

const WrapperStyles = styled.div`
  width: 100%;
`;

const TeamComponentStyles = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  overflow: visible;
  flex-direction: column;
  align-items: center;
  margin-top: 20rem;
`;

export default Watch;
