import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import GameEntry from './GameEntry';
import { LeagueContext, TeamsContext } from '../pages/Esports';
import { sorter } from '../Functions/sorter';
import { displayTeamRegion } from '../Functions/displayTeamRegion';
import { formatTimestamp } from '../Functions/formatTimestamp';
import Image from './Image';

const Schedule = ({ children }) => {
  const leagues = useContext(LeagueContext);
  const teamList = useContext(TeamsContext);
  const [nodes, setNodes] = useState([]);
  const [standings, setStandings] = useState([]);
  const [filtered, setFiltered] = useState();

  const getAllNodes = () => {
    //  Getting all nodes of the teams presented in tournament

    leagues &&
      leagues.forEach((league) => {
        league.node_groups[0].node_groups[0].nodes.forEach((node) =>
          setNodes((prevState) => [
            ...prevState,
            {
              series: node,
              leagueId: league.info.league_id,
              region: displayTeamRegion(league.info.region),
              division: league.info.name
                .split(' ')
                .filter((name) => name === 'II' || name === 'I')
                .toString(),
            },
          ])
        );
      });
  };

  const getAllTeams = () => {
    // Getting all list of teams present in the tournament
    leagues &&
      leagues.forEach((league) =>
        league.node_groups[0].node_groups[0].team_standings.forEach((team) => {
          setStandings((prevState) => [...prevState, team]);
        })
      );
  };

  useEffect(() => {
    getAllNodes();
  }, [leagues]);

  sorter(nodes);

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <ScheduleStyles>
      <GamesStyles>
        {nodes.length !== 0 &&
          nodes.map((node, index) => {
            return (
              <GameEntry
                leftTeam={standings.filter(
                  (standing) => standing.team_id === node.series.team_id_1
                )}
                rightTeam={standings.filter(
                  (standing) => standing.team_id === node.series.team_id_2
                )}
                gamesDetails={node.series}
                league_id={node.leagueId}
                region={node.region}
                division={node.division}
                cTimestamp={formatTimestamp(node.series.scheduled_time, 'day')}
                pTimestamp={formatTimestamp(
                  nodes[index - 1 === -1 ? nodes.length - 1 : index - 1].series
                    .scheduled_time,
                  'day'
                )}
              ></GameEntry>
            );
          })}
      </GamesStyles>
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

const GamesStyles = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export default Schedule;
