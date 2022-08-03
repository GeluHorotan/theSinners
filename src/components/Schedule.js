import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import GameEntry from './GameEntry';
import { LeagueContext, TeamsContext } from '../pages/Esports';
import { sorter } from '../Functions/sorter';
import { displayTeamRegion } from '../Functions/displayTeamRegion';
import { formatTimestamp } from '../Functions/formatTimestamp';
import Image from './Image';
import { HeroesContext } from '../pages/Esports';
import DropdownMenu from '../DropdownMenu';
import { Menu } from '@headlessui/react';
import Input from './Input';
import {
  accent,
  blue,
  desaturatedRed,
  saturatedRed,
  secondary,
} from '../Utility/Colors';
import * as FaIcons from 'react-icons/fa';

const Schedule = ({ children }) => {
  const dotaHeroes = React.useContext(HeroesContext);
  const leagues = useContext(LeagueContext);
  const teamList = useContext(TeamsContext);
  const [nodes, setNodes] = useState([]);
  const [standings, setStandings] = useState([]);
  const [standingsCopy, setStandingsCopy] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeRegion, setActiveRegion] = useState();
  const [activeDivision, setActiveDivision] = useState();
  const inputRef = React.createRef(null);
  const [sorterOption, setSorterOption] = useState('ascending');

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
              region: league.info.region,
              division: league.info.name
                .split(' ')
                .filter((name) => name === 'II' || name === 'I')
                .toString(),
            },
          ])
        );
      });

    leagues &&
      leagues.forEach((league) => {
        league.node_groups[0].node_groups[0].nodes.forEach((node) =>
          setFiltered((prevState) => [
            ...prevState,
            {
              series: node,
              leagueId: league.info.league_id,
              region: league.info.region,
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
          setStandingsCopy((prevState) => [...prevState, team]);
        })
      );
  };

  const searchHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value.length === 0) {
      setFiltered((prevState) => nodes);
    }
    if (e.target.value.length !== 0) {
      const results = standings.filter((standing) =>
        standing.team_name.toUpperCase().includes(e.target.value.toUpperCase())
      );

      results.forEach((standing) => {
        setFiltered((prevState) =>
          nodes.filter(
            (node) =>
              standing.team_id === node.series.team_id_1 ||
              standing.team_id === node.series.team_id_2
          )
        );
      });
    }
  };

  useEffect(() => {
    getAllNodes();
  }, [leagues]);

  sorter(filtered, sorterOption);

  useEffect(() => {
    getAllTeams();
  }, []);

  const regions = [
    { category: 'all regions' },
    { category: 'north america' },
    { category: 'south america' },
    { category: 'western europe' },
    { category: 'eastern europe' },

    { category: 'CHINA' },
    { category: 'southest asia' },
  ];
  const divisions = [
    { category: 'all divisions' },
    { category: 'Division I' },
    { category: 'Division II' },
  ];

  return (
    <ScheduleStyles>
      <GamesStyles>
        <FilterStyles>
          <div className='sort_options'>
            <div className='ascending'>
              <FaIcons.FaSortAmountUp
                onClick={() => {
                  setSorterOption((prevState) => 'ascending');
                }}
              ></FaIcons.FaSortAmountUp>
            </div>
            <div className='descending'>
              <FaIcons.FaSortAmountDownAlt
                onClick={() => {
                  setSorterOption((prevState) => 'descending');
                }}
              ></FaIcons.FaSortAmountDownAlt>
            </div>
          </div>
          <DropdownMenu
            title={
              activeDivision ? `DIVISION ${activeDivision}` : 'ALL DIVISIONS'
            }
          >
            {divisions.map((division, index) => {
              return (
                <Menu.Item>
                  <div
                    className='menu_options'
                    onClick={() => {
                      if (index !== 0) {
                        if (activeRegion) {
                          setActiveDivision((prevState) =>
                            index === 1 ? 'I' : index === 2 ? 'II' : ''
                          );
                          setFiltered((prevState) =>
                            nodes.filter(
                              (node) =>
                                node.division ===
                                  `${
                                    index === 1 ? 'I' : index === 2 ? 'II' : ''
                                  }` && node.region === activeRegion
                            )
                          );
                        } else if (!activeRegion) {
                          setActiveDivision((prevState) =>
                            index === 1 ? 'I' : index === 2 ? 'II' : ''
                          );
                          setFiltered((prevState) =>
                            nodes.filter(
                              (node) =>
                                node.division ===
                                `${index === 1 ? 'I' : index === 2 ? 'II' : ''}`
                            )
                          );
                        }
                      } else if (activeRegion) {
                        setActiveDivision((prevState) => false);
                        setFiltered((prevState) =>
                          nodes.filter((node) => node.region === activeRegion)
                        );
                      } else {
                        setActiveDivision((prevState) => false);
                        setFiltered((prevState) => nodes);
                      }
                    }}
                  >
                    {division.category}
                  </div>
                </Menu.Item>
              );
            })}
          </DropdownMenu>
          <DropdownMenu
            title={
              activeRegion
                ? `${displayTeamRegion(activeRegion)}`
                : 'ALL REGIONS'
            }
          >
            {regions.map((region, index) => {
              return (
                <Menu.Item>
                  <div
                    className='menu_options'
                    onClick={() => {
                      if (index !== 0) {
                        if (activeDivision) {
                          setActiveRegion((prevState) => index);
                          setFiltered((prevState) =>
                            nodes.filter(
                              (node) =>
                                node.region === index &&
                                node.division === activeDivision
                            )
                          );
                        } else if (!activeDivision) {
                          setActiveRegion((prevState) => index);
                          setFiltered((prevState) =>
                            nodes.filter((node) => node.region === index)
                          );
                        }
                      } else if (activeDivision) {
                        setActiveRegion((prevState) => false);
                        setFiltered((prevState) =>
                          nodes.filter(
                            (node) => node.division == activeDivision
                          )
                        );
                      } else {
                        setActiveRegion((prevState) => false);
                        setFiltered((prevState) => nodes);
                      }
                    }}
                  >
                    {region.category}
                  </div>
                </Menu.Item>
              );
            })}
          </DropdownMenu>
          <Input
            ref={inputRef}
            onChange={searchHandler}
            label='Search Match'
            colorTrigger={filtered}
            topOffset={'-1.2rem'}
          ></Input>
        </FilterStyles>
        {filtered.length !== 0 &&
          filtered.map((node, index) => {
            if (index < 10)
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
                  cTimestamp={formatTimestamp(
                    node.series.scheduled_time,
                    'day'
                  )}
                  pTimestamp={formatTimestamp(
                    filtered[index - 1 === -1 ? filtered.length - 1 : index - 1]
                      .series.scheduled_time,
                    'day'
                  )}
                  heroes={dotaHeroes}
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

const FilterStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .sort_options {
    display: flex;
    flex-grow: 1;
    padding: 0.5rem 2rem;
    font-size: 1.3rem;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    .descending,
    .ascending {
      margin-left: 1rem;
      transition: 200ms all ease-in-out;
      &:hover {
        color: ${desaturatedRed};
      }
    }
  }
`;

const GamesStyles = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export default Schedule;
