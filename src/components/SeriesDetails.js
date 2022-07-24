import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { formatTimestamp } from '../Functions/formatTimestamp';

import { LeagueContext } from '../pages/Esports';
import Image from './Image';

import { Tab } from '@headlessui/react';
import Button from './Button';
import { useLayoutEffect } from 'react';
import { displayTeamRegion } from '../Functions/displayTeamRegion';
import { getPips } from '../Functions/getPips';
import { displayPlayerRole } from '../Functions/displayPlayerRole';
import MatchResult from './MatchResult';
import TeamLineup from './TeamLineup';
import { grey } from '../Utility/Colors';

const SeriesDetails = () => {
  const [activeGame, setActiveGame] = useState([]);
  const [seriesMatches, setSeriesMatches] = useState([]);
  const [isLineup, setIsLineup] = useState(false);
  const [liveGames, setLiveGames] = useState([]);
  const [lastGames, setLastGames] = useState([]);
  const [teamInfos, setTeamInfos] = useState();
  const [gameLineup, setGameLineup] = useState();
  const [currentTimestamp, setCurrentTimestamp] = useState(
    Math.round(new Date().getTime() / 1000) - 1 * 3600
  );
  const [lastDayTimestamp, setLastDayTimestamp] = useState(
    Math.round(new Date().getTime() / 1000) - 24 * 3600
  );
  const leagues = React.useContext(LeagueContext);

  const getTeamInfos = () => {
    if (activeGame.length !== 0) {
      leagues.forEach((league, index) => {
        league.node_groups[0].node_groups[0].team_standings.filter((team) => {
          if (
            activeGame.length !== 0 &&
            team.team_id === activeGame.game.team_id_1
          ) {
            setTeamInfos((prevState) => ({
              ...prevState,
              primaryTeam: team,

              region: league.info.region,
              name: league.info.name,
            }));
          }
          if (
            activeGame.length !== 0 &&
            team.team_id === activeGame.game.team_id_2
          ) {
            setTeamInfos((prevState) => ({
              ...prevState,
              secondaryTeam: team,
            }));
          }
        });
      });
    }
  };

  const getGamesByCategory = () => {
    leagues &&
      currentTimestamp &&
      leagues.forEach((tournament, index) => {
        tournament.node_groups[0].node_groups[0].nodes.forEach((node) => {
          if (node.has_started && !node.is_completed) {
            setLiveGames((prevState) => [
              ...prevState,
              {
                game: node,
                league: tournament.info.league_id,
              },
            ]);
          } else if (node.has_started && node.is_completed) {
            setLastGames((prevState) => [
              ...prevState,
              {
                game: node,
                league: tournament.info.league_id,
              },
            ]);
          }
        });
      });
  };

  const getActiveGame = () => {
    if (liveGames.length !== 0 || lastGames.length !== 0) {
      if (liveGames.length !== 0) {
        setActiveGame((prevState) =>
          liveGames.reduce((previousValue, currentValue, index) => {
            return previousValue.game.actual_time <
              currentValue.game.actual_time
              ? { game: previousValue.game, league: previousValue.league }
              : { game: currentValue.game, league: currentValue.league };
          })
        );
      } else if (liveGames.length === 0 && lastGames.length !== 0) {
        setActiveGame((prevsState) =>
          lastGames.reduce((previousValue, currentValue, index) => {
            return previousValue.game.actual_time <
              currentValue.game.actual_time
              ? { game: previousValue.game, league: previousValue.league }
              : { game: currentValue.game, league: currentValue.league };
          })
        );
      }
    }
  };

  const getTeamMembers = async () => {
    if (teamInfos) {
      const res = await fetch(
        `/.netlify/functions/teamInfo/?id=${teamInfos.primaryTeam.team_id}`
      );
      const json = await res.json();
      setTeamInfos((prevState) => ({
        ...prevState,
        primaryTeam: { ...prevState.primaryTeam, infos: json },
      }));
    }
    if (teamInfos) {
      const res = await fetch(
        `/.netlify/functions/teamInfo/?id=${teamInfos.secondaryTeam.team_id}`
      );
      const json = await res.json();

      setTeamInfos((prevState) => ({
        ...prevState,
        secondaryTeam: { ...prevState.secondaryTeam, infos: json },
      }));
    }
  };

  const getSeriesMatches = async () => {
    let i = 0;
    if (activeGame.game.matches.length !== 0) {
      for (i; i < activeGame.game.matches.length; i++) {
        const res = await fetch(
          `/.netlify/functions/singleMatch/?league_id=${activeGame.league}&match_id=${activeGame.game.matches[i].match_id}`
        );
        const json = await res.json();

        setSeriesMatches((prevState) => [...prevState, json]);
      }
    }
  };

  useEffect(() => {
    getSeriesMatches();
  }, [activeGame]);

  useEffect(() => {
    getTeamInfos();
    getTeamMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGame]);

  useEffect(() => {
    getActiveGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveGames, lastGames]);
  useLayoutEffect(() => {
    getGamesByCategory();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leagues]);

  if (activeGame.length !== 0 && teamInfos && teamInfos.secondaryTeam)
    return (
      <Tab.Group defaultIndex={6}>
        <Wrapper>
          <div className='bg_container'>
            <SeriesDetailsStyles>
              <div className='series_details_header'>
                <div className='header_team team_left'>
                  <div
                    className='header_top_section'
                    style={{
                      textShadow: `${
                        activeGame.game.team_1_wins >
                        activeGame.game.team_2_wins
                          ? '0px 0px 10px #06f'
                          : ''
                      }`,
                    }}
                  >
                    <div
                      className='header_series_label'
                      style={{
                        filter: `${
                          activeGame.game.team_1_wins >
                          activeGame.game.team_2_wins
                            ? 'drop-shadow(0px 0px 30px blue) drop-shadow(0px 0px 30px rgba(0, 0, 255, 0.5))'
                            : ''
                        }`,
                      }}
                    >
                      <div className='header_team_name'>
                        {' '}
                        {teamInfos.primaryTeam.team_name}
                      </div>
                      <div className='header_record'>
                        {teamInfos.primaryTeam.wins} -{' '}
                        {teamInfos.primaryTeam.losses}
                      </div>
                    </div>
                    <div className='header_focusable'>
                      <Image
                        isTeam
                        className={'team_logo'}
                        id={activeGame.game.team_id_1}
                      ></Image>
                    </div>

                    <div className='header_live_score'>
                      <div
                        className='pip_container'
                        style={{
                          flexDirection: 'row-reverse',
                          filter: `${
                            activeGame.game.team_1_wins >
                            activeGame.game.team_2_wins
                              ? 'drop-shadow(0px 0px 30px blue) drop-shadow(0px 0px 30px rgba(0, 0, 255, 0.5))'
                              : ''
                          }`,
                        }}
                      >
                        {getPips(
                          activeGame.game.team_id_1 ===
                            teamInfos.primaryTeam.team_id
                            ? activeGame.game.team_1_wins
                            : ''
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='header_center_details'>
                  <div className='game_region'>
                    {' '}
                    {displayTeamRegion(teamInfos.region)}
                  </div>
                  <div className='game_division'>
                    {' '}
                    DIVISION&nbsp;
                    {teamInfos.name
                      .split(' ')
                      .filter((name) => name === 'I' || name === 'II')}
                  </div>
                  {liveGames.length !== 0 ? (
                    <div className='game_isLive'>
                      Live
                      <div className='live_dot'></div>
                    </div>
                  ) : (
                    formatTimestamp(activeGame.game.actual_time, 'classic')
                  )}
                </div>
                <div className='header_team team_right'>
                  <div
                    className='header_top_section'
                    style={{
                      flexDirection: 'row-reverse',
                      justifyContent: 'flex-end',

                      textShadow: `${
                        activeGame.game.team_2_wins >
                        activeGame.game.team_1_wins
                          ? '0px 0px 10px #06f'
                          : ''
                      }`,
                    }}
                  >
                    <div
                      className='header_series_label'
                      style={{
                        filter: `${
                          activeGame.game.team_2_wins >
                          activeGame.game.team_1_wins
                            ? 'drop-shadow(0px 0px 30px blue) drop-shadow(0px 0px 30px rgba(0, 0, 255, 0.5))'
                            : ''
                        }`,
                      }}
                    >
                      <div className='header_team_name'>
                        {teamInfos.secondaryTeam.team_name}
                      </div>
                      <div className='header_record'>
                        {' '}
                        {teamInfos.secondaryTeam.wins} -{' '}
                        {teamInfos.secondaryTeam.losses}
                      </div>
                    </div>
                    <div className='header_focusable'>
                      <Image
                        isTeam
                        className={'team_logo'}
                        id={activeGame.game.team_id_2}
                      ></Image>
                    </div>

                    <div
                      className='header_live_score'
                      style={{ transform: 'skewX(-21deg)' }}
                    >
                      <div
                        className='pip_container'
                        style={{
                          filter: `${
                            activeGame.game.team_2_wins >
                            activeGame.game.team_1_wins
                              ? 'drop-shadow(0px 0px 30px blue) drop-shadow(0px 0px 30px rgba(0, 0, 255, 0.5))'
                              : ''
                          }`,
                        }}
                      >
                        {getPips(
                          activeGame.game.team_id_2 ===
                            teamInfos.secondaryTeam.team_id
                            ? activeGame.game.team_2_wins
                            : ''
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='series_details_game_selector'>
                <Tab.List className='game_tab_list'>
                  {activeGame.game.matches.map((match, index) => {
                    return (
                      <Tab
                        className='game_option'
                        key={index}
                        onClick={() => {
                          setGameLineup((prevState) => index);
                        }}
                      >
                        {({ selected }) => (
                          <div
                            className={selected ? 'active_tab game_option' : ''}
                          >
                            GAME {index + 1}
                          </div>
                        )}
                      </Tab>
                    );
                  })}
                </Tab.List>
              </div>

              <div className='series_details_details_body'>
                <div className='game_details_container players_showcase'>
                  <Tab.Panels>
                    {lastGames.length !== 0 &&
                    activeGame.game.matches.length !== 0
                      ? activeGame.game.matches.map((match, index) => {
                          return (
                            <Tab.Panel>
                              {!isLineup && liveGames.length === 0 && (
                                <MatchResult
                                  isResult
                                  match={match}
                                  gameNumber={index + 1}
                                  winnerId={match.winning_team_id}
                                  teamInfos={teamInfos}
                                ></MatchResult>
                              )}

                              {isLineup && teamInfos && (
                                <TeamLineup
                                  lineup={seriesMatches[index]}
                                  teamInfos={teamInfos}
                                  activeGame={activeGame}
                                  matchIndex={index}
                                >
                                  {index + 1}
                                </TeamLineup>
                              )}
                            </Tab.Panel>
                          );
                        })
                      : ''}
                    {liveGames.length !== 0 ? <>isLive</> : ''}

                    {liveGames.length !== 0 && <Tab.Panel>ROSTER</Tab.Panel>}

                    <Tab.Panel>
                      {lastGames.length !== 0 && (
                        <MatchResult
                          isFinalOutcome
                          winnerId={
                            activeGame.game.team_1_wins >
                            activeGame.game.team_2_wins
                              ? activeGame.game.team_id_1
                              : activeGame.game.team_2_wins >
                                activeGame.game.team_1_wins
                              ? activeGame.game.team_id_2
                              : null
                          }
                          score={[
                            activeGame.game.team_1_wins,
                            activeGame.game.team_2_wins,
                          ]}
                          teamInfos={teamInfos}
                        ></MatchResult>
                      )}
                      {liveGames.length !== 0 && <>IS LIVE</>}
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </div>
              <Tab.List className='footer_panels'>
                <div className='series_details_footer'>
                  <div className='footer_left_tabs'>
                    <div
                      className={`view_tab ${
                        isLineup ? 'view_tab_active' : ''
                      }`}
                      onClick={() => {
                        setIsLineup((prevState) => !isLineup);
                      }}
                    >
                      LINEUP
                    </div>

                    <Tab>
                      <div
                        className='view_tab'
                        onClick={() => {
                          setIsLineup((prevState) => false);
                        }}
                      >
                        RESULT
                      </div>
                    </Tab>
                  </div>
                </div>
              </Tab.List>
            </SeriesDetailsStyles>
          </div>
          <div className='fade_container'>
            <div className='fade_overlay_bottom'></div>
          </div>
        </Wrapper>
      </Tab.Group>
    );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;


  .bg_container {
    background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/bg_grout_texture.jpg);
  padding: 5rem 0;
    width: 100%;
    background-size: 100% 100%;
    background-position: top, center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    transition-property: height;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
  }
   .fade_container {
    left: 0px;
    bottom: 0px;

    right: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    .fade_overlay_bottom {
      background: linear-gradient(
        rgba(22, 22, 24, 0) 50%,
        rgba(22, 22, 24, 0.733) 75%,
        rgb(22, 22, 24) 100%
      );
      position: absolute;
      width: 100%;
      height: 100%;
    } 
  
`;

const SeriesDetailsStyles = styled.div`
  width: 100%;
  max-width: 960px;
  height: 100%;
  z-index: 100;
  transition-property: max-width;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;

  @media screen and (max-width: 980px) {
    zoom: 0.9;
    display: block;
    text-size-adjust: none;
  }
  @media screen and (max-width: 895px) {
    zoom: 0.8;
    display: block;
    text-size-adjust: none;
  }
  @media screen and (max-width: 795px) {
    zoom: 0.7;
    display: block;
    text-size-adjust: none;
  }
  @media screen and (max-width: 695px) {
    zoom: 0.6;
    display: block;
    text-size-adjust: none;
  }
  @media screen and (max-width: 595px) {
    zoom: 0.5;
    display: block;
    text-size-adjust: none;
  }
  @media screen and (max-width: 495px) {
    zoom: 0.4;
    display: block;
    text-size-adjust: none;
  }
  @media screen and (max-width: 395px) {
    zoom: 0.35;
    display: block;
    text-size-adjust: none;
  }
  button {
    background: none;
    border: none;
    outline: none;
    color: ${grey};
  }
  button:focus {
    outline: none;
  }
  .active_tab {
    color: #fff;
    background: linear-gradient(145deg, #161618 0%, #222739 0%, #2a314a 100%);
  }
  .series_details_header {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    img {
      width: 1rem;
      height: 1rem;
    }
    margin-bottom: 4px;
    .team_right {
      clip-path: polygon(40px 0px, 100% 0px, 100% 110px, 0px 110px);
    }
    .header_center_details {
      width: 300px;
      height: 100%;
      background-color: #0b0b0c;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      clip-path: polygon(0px 0px, 300px 0px, 260px 110px, 40px 110px);
      .game_region {
        color: #fff;
        max-width: 230px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 3px;
      }
      .game_division {
        color: #a3a3a3;
        max-width: 230px;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 8px;
      }
      .game_isLive {
        background-color: #00ab30;
        color: #fff;
        padding: 4px 8px;
        font-size: 10px;
        border-radius: 2px;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        display: flex;
        flex-direction: row;
        .live_dot {
          width: 8px;
          height: 8px;
          margin-left: 6px;
          border-radius: 4px;
          background-color: #fff;
        }
      }
    }
    .team_left {
      clip-path: polygon(0px 0px, calc(100% - 40px) 0px, 100% 110px, 0px 110px);
    }
    .header_team {
      width: 365px;
      height: 100%;
      min-height: 0;
      display: flex;
      flex-direction: column;
      background-color: #131315;
      color: #a3a3a3;
      transition-property: width;
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      .header_top_section {
        padding: 0 2rem;
        width: 100%;
        height: 100%;
        display: flex;

        align-items: center;
        justify-content: flex-end;
        gap: 12px;
        .header_series_label {
          min-height: 0px;
          display: flex;
          flex-direction: column;

          text-align: left;
          .header_team_name {
            width: 100%;
            color: #fff;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .header_record {
            width: 100%;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
        }
        .header_focusable {
          .team_logo {
            width: 3rem;
            height: 3rem;
          }
        }
        .header_live_score {
          height: 30px;
          display: flex;
          flex-direction: row;

          transform: skewX(21deg);
          margin-left: 0px;

          .pip_container {
            height: 30px;
            display: flex;
            flex-direction: row;
            margin: 0 0.35rem;
          }
          .pips {
            width: 10px;
            height: 100%;
            margin: 0 0.3rem;
            background-color: #2f2f30;
          }
          .pip_active {
            background-color: #fff;
            box-shadow: 0px 0px 10px #06f;
          }
        }
      }
    }
  }
  .series_details_game_selector {
    width: 100%;
    height: 30px;
    margin-bottom: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #0b0b0c;
    .game_tab_list {
      width: 100%;
      display: flex;
      flex-direction: row;
      border: none;
    }

    .game_option {
      flex-grow: 1;
      font-weight: 600;
      cursor: pointer;
      flex-basis: 0;
      height: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #0b0b0c;
      transition: 150ms background-color ease-in-out;
      border: none;
      &:hover {
        background-color: #131315;
      }
    }
  }

  .series_details_details_body {
    width: 100%;
    height: 540px;
    min-height: 0;
    display: flex;
    flex-direction: row;
    background-color: #0b0b0c;
    border: 1px solid #0b0b0c;
    position: relative;
    transition-property: height;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;

    .players_showcase {
      background-size: cover;
      background-repeat: no-repeat;
      background-blend-mode: multiply;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 1rem;
    }

    .game_details_container {
      background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/gameblur01.jpg);
      width: 100%;

      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: absolute;
    }
  }

  .series_details_footer {
    width: 100%;
    height: 55px;
    background: #0b0b0c;
    display: flex;
    margin-top: 0.35rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .footer_left_tabs {
      width: 110px;
      height: 100%;
      display: flex;
      flex-direction: row;
      button {
        cursor: pointer;
        background: none;
        border: none;
        color: white;
      }
      .view_tab {
        flex-grow: 1;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #1b1b1f;
        transition: all 150ms ease-in-out;
        padding: 1.5rem;
        background: #0b0b0c;
        cursor: pointer;
        &:hover {
          background-color: #131315;
        }
      }
      .view_tab_active {
        background: linear-gradient(
          145deg,
          #161618 0%,
          #222739 0%,
          #2a314a 100%
        );
      }
    }
  }
`;

export default SeriesDetails;
