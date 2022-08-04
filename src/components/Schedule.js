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
import { useLayoutEffect } from 'react';

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
  const [games, setGames] = useState([]);
  const [fetchedGames, setFetchedGames] = useState([]);

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

  const getAllGames = async () => {
    nodes.forEach((node) => {
      node.series.matches.forEach((match) => {
        setGames((prevState) => [
          ...prevState,
          { game: match, league_id: node.leagueId },
        ]);
      });
    });
    for (let i = 0; i < games.length; i++) {
      const res = await fetch(
        `/.netlify/functions/singleMatch/?league_id=${games[i].league_id}&match_id=${games[i].game.match_id}`
      );
      const json = await res.json();
      setFetchedGames((prevState) => [...prevState, json]);
    }
  };

  useLayoutEffect(() => {
    // getAllGames();
  }, []);

  useEffect(() => {
    getAllNodes();
  }, [leagues]);
  sorter(nodes, sorterOption);
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
          <div className='menu_options'>
            <div className='dropdown_options'>
              <div className='dropdown_1'>
                <DropdownMenu
                  title={
                    activeDivision
                      ? `DIVISION ${activeDivision}`
                      : 'ALL DIVISIONS'
                  }
                  className={'division_filter'}
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
                                          index === 1
                                            ? 'I'
                                            : index === 2
                                            ? 'II'
                                            : ''
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
                                      `${
                                        index === 1
                                          ? 'I'
                                          : index === 2
                                          ? 'II'
                                          : ''
                                      }`
                                  )
                                );
                              }
                            } else if (activeRegion) {
                              setActiveDivision((prevState) => false);
                              setFiltered((prevState) =>
                                nodes.filter(
                                  (node) => node.region === activeRegion
                                )
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
              </div>
              <div className='dropdown_1'>
                <DropdownMenu
                  title={
                    activeRegion
                      ? `${displayTeamRegion(activeRegion)}`
                      : 'ALL REGIONS'
                  }
                  className={'division_filter'}
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
              </div>
            </div>
          </div>
          <div className='search_filter'>
            <Input
              className={'search_filter'}
              ref={inputRef}
              onChange={searchHandler}
              label='Search Match'
              colorTrigger={filtered}
              topOffset={'-1.2rem'}
            ></Input>
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
          </div>
        </FilterStyles>
        {filtered.length !== 0 &&
          filtered.map((node, index) => {
            if (index < 5)
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
  width: 90%;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  .search_filter {
    width: 20rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 1rem;
  }

  .menu_options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 900px) {
      justify-content: center;
    }
    @media screen and (max-width: 580px) {
      flex-direction: column;
    }

    .dropdown_options {
      display: flex;

      .dropdown_1 {
        width: 15rem;
        @media screen and (max-width: 580px) {
          width: 11rem;
        }
        @media screen and (max-width: 580px) {
          width: 11rem;
        }
        @media screen and (max-width: 350px) {
          width: 10rem;
        }
      }
    }
  }

  .sort_options {
    display: flex;
    font-size: 1.3rem;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }

    .descending,
    .ascending {
      margin-right: 1rem;
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
`;

export default Schedule;
