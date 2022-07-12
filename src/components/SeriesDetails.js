import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { formatTimestamp } from '../Functions/formatTimestamp';

import { LeagueContext } from '../pages/Esports';
import Image from './Image';

import { Tab } from '@headlessui/react';
import Button from './Button';
import { useLayoutEffect } from 'react';
import { displayTeamRegion } from '../Functions/displayTeamRegion';

const SeriesDetails = () => {
  const [activeGame, setActiveGame] = useState([]);
  const [liveGames, setLiveGames] = useState([]);
  const [lastGames, setLastGames] = useState([]);
  const [teamInfos, setTeamInfos] = useState();
  const [currentTimestamp, setCurrentTimestamp] = useState(
    Math.round(new Date().getTime() / 1000) - 1 * 3600
  );
  const [lastDayTimestamp, setLastDayTimestamp] = useState(
    Math.round(new Date().getTime() / 1000) - 24 * 3600
  );
  const leagues = React.useContext(LeagueContext);

  const getTeamInfos = () => {
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
        } else if (
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
  };
  console.log('object');
  const getGamesByCategory = () => {
    leagues &&
      currentTimestamp &&
      leagues.forEach((tournament, index) => {
        tournament.node_groups[0].node_groups[0].nodes.forEach((node) => {
          if (
            node.has_started &&
            !node.is_completed &&
            lastDayTimestamp - node.actual_time < 0
          ) {
            setLiveGames((prevState) => [
              ...prevState,
              {
                game: node,
                league: tournament.info.league_id,
              },
            ]);
          } else if (
            node.has_started &&
            node.is_completed &&
            lastDayTimestamp - node.actual_time < 0
          ) {
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
    if (liveGames.length !== 0) {
      setActiveGame((prevState) =>
        liveGames.reduce((previousValue, currentValue, index) => {
          return previousValue.game.actual_time < currentValue.game.actual_time
            ? { game: previousValue.game, league: previousValue.league }
            : { game: previousValue.game, league: previousValue.league };
        })
      );
    } else if (liveGames.length === 0 && lastGames.length !== 0) {
      setActiveGame((prevsState) =>
        lastGames.reduce((previousValue, currentValue, index) => {
          return previousValue.game.actual_time < currentValue.game.actual_time
            ? { game: previousValue.game, league: previousValue.league }
            : { game: previousValue.game, league: previousValue.league };
        })
      );
    }
  };

  useEffect(() => {
    if (liveGames.length !== 0 || lastGames.length !== 0) {
      getActiveGame();
    }
    if (activeGame.length !== 0) {
      getTeamInfos();
    }
  }, [liveGames, lastGames]);
  useLayoutEffect(() => {
    getGamesByCategory();
  }, [leagues]);
  if (activeGame.length !== 0 && teamInfos && teamInfos.secondaryTeam) {
    return (
      <Tab.Group>
        <Wrapper>
          <div className='bg_container'>
            <SeriesDetailsStyles>
              <div className='series_details_header'>
                <div className='header_team team_left'>
                  <div className='header_top_section'>
                    <div className='header_series_label'>
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
                      <div className='pips pip_active'></div>
                      <div className='pips'></div>
                      <div className='pips'></div>
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
                  <div className='game_isLive'>
                    Live
                    <div className='live_dot'></div>
                  </div>
                </div>
                <div className='header_team team_right'>
                  <div
                    className='header_top_section'
                    style={{
                      flexDirection: 'row-reverse',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <div className='header_series_label'>
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
                      <div className='pips pip_active'></div>
                      <div className='pips'></div>
                      <div className='pips'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='series_details_game_selector'>
                <Tab.List className='game_tab_list'>
                  {activeGame.game.matches.map((match, index) => {
                    return (
                      <Tab className='game_option' key={index}>
                        GAME {index + 1}
                      </Tab>
                    );
                  })}
                </Tab.List>
              </div>
              <div className='series_details_details_body'>
                <div className='game_details_container'>
                  <div className='game_details_body'>
                    <Tab.Panels>
                      {activeGame.game.matches.map((match, index) => {
                        return (
                          <Tab.Panel key={index}>{match.match_id}</Tab.Panel>
                        );
                      })}
                      <Tab.Panel>STREAM</Tab.Panel>
                    </Tab.Panels>
                  </div>
                </div>
              </div>
              <div className='series_details_footer'>
                <Tab.List>
                  <Tab>STREAM</Tab>
                </Tab.List>
              </div>
            </SeriesDetailsStyles>
          </div>
          <div className='fade_container'>
            <div className='fade_overlay_bottom'></div>
          </div>
        </Wrapper>
      </Tab.Group>
    );
  }
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 15rem;
  .bg_container {
    background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/bg_grout_texture.jpg);

    width: 100%;
    background-size: 100% auto;
    background-position: top, center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 900px;
    min-height: 900px;
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
  }
`;

const SeriesDetailsStyles = styled.div`
  width: 100%;
  max-width: 960px;
  z-index: 100;

  transition-property: max-width;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  .series_details_header {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    img {
      width: 5rem;
      height: 5rem;
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
        justify-content: flex-start;
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
            width: 64px;
            height: 64px;
          }
        }
        .header_live_score {
          height: 30px;
          display: flex;
          flex-direction: row;
          margin: 0px 10px;
          transform: skewX(21deg);
          margin-left: 0px;
          .pips {
            width: 10px;
            height: 100%;
            margin-right: 10px;

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
    .game_tab_list {
      width: 100%;
      display: flex;
      flex-direction: row;
      border: none;
    }
    .selected {
      background: linear-gradient(145deg, #161618 0%, #222739 0%, #2a314a 100%);
    }
    .game_option {
      flex-grow: 1;
      font-weight: 600;
      cursor: pointer;
      flex-basis: 0;
      height: 30px;
      display: flex;
      flex-direction: row;
      color: #fff;
      justify-content: center;
      align-items: center;
      background-color: #0b0b0c;
      transition-property: background-color, color;
      transition-timing-function: ease-in-out;
      transition-duration: 0.1s;
      border: none;
    }
  }

  .series_details_details_body {
    width: 100%;
    height: 540px;
    min-height: 0;
    display: flex;
    flex-direction: column;
    background-color: #0b0b0c;
    border: 1px solid #0b0b0c;
    position: relative;
    transition-property: height;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;

    .game_details_container {
      background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/gameblur01.jpg);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
      background-blend-mode: multiply;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 30px;
      .game_details_body {
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
      }
    }
  }
  .series_details_footer {
    width: 100%;
    height: 55px;
    background-color: #0b0b0c;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
  }
`;

export default SeriesDetails;
