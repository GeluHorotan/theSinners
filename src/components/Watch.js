import React, { useState, useEffect } from 'react';
import Team from './Team';
import styled from 'styled-components';

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
            if (index < teamsCounter)
              return (
                <Team
                  leagues={leagues}
                  teamId={team.id}
                  teamName={team.name}
                ></Team>
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
  height: 100vh;
`;

const TeamComponentStyles = styled.section`
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin: 0 auto;
`;

export default Watch;
