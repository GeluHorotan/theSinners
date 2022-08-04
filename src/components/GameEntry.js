import { Disclosure } from '@headlessui/react';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { displayTeamRegion } from '../Functions/displayTeamRegion';
import { formatTimestamp } from '../Functions/formatTimestamp';
import { obsH } from '../Utility/Colors';
import Button from './Button';
import Image from './Image';
import HashLoader from 'react-spinners/HashLoader';
import * as MdIcons from 'react-icons/md';

const GameEntry = ({
  leftTeam,
  rightTeam,
  children,
  gamesDetails,
  league_id,
  region,
  division,
  timestamp,
  cTimestamp,
  pTimestamp,
  heroes,
}) => {
  const [seriesMatches, setSeriesMatches] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const getSeriesMatches = async () => {
    for (let i = 0; i < gamesDetails.matches.length; i++) {
      const res = await fetch(
        `/.netlify/functions/singleMatch/?league_id=${league_id}&match_id=${gamesDetails.matches[i].match_id}`
      );
      const json = await res.json();

      setSeriesMatches((prevState) => [...prevState, json]);
    }
    setIsLoading((prevState) => false);
  };

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? ':' : ':') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? ':' : ':') : ':';
    var sDisplay = s > 0 ? s + (s == 1 ? '' : '') : '';
    return <div>{hDisplay + mDisplay + sDisplay}</div>;
  }

  if (leftTeam && rightTeam && gamesDetails.matches.length !== 0 && region)
    return (
      <Disclosure>
        <WrapperStyles>
          <DpcListStyles>
            <div className='schedule_day_section'>
              {cTimestamp !== pTimestamp && (
                <div className='schedule_day_header'>
                  <time dateTime={cTimestamp} className='schedule_date_label'>
                    {cTimestamp}
                  </time>
                </div>
              )}
              <div className='schedule_node_list '>
                <div
                  className={`dpc_schedule_entry ${
                    isActive ? 'schedule_active' : ''
                  }`}
                >
                  <DpcBodyStyles>
                    <div className='dpc_left_section'>
                      <div className='node_type_upper'>
                        {displayTeamRegion(region)}
                      </div>
                      <div className='node_type_lower'>DIVISION {division}</div>
                      <div className='node_time_label'>
                        {formatTimestamp(gamesDetails.scheduled_time, 'hour')}
                      </div>
                    </div>
                    <div className='dpc_center_section'>
                      <div className='dpc_team_section left_team'>
                        <div className='team_infos'>
                          <div className='dpc_team_name'>
                            {leftTeam[0].team_name}
                          </div>
                          <div className='dpc_team_record'>
                            {' '}
                            {leftTeam[0].wins}&nbsp;-&nbsp;
                            {leftTeam[0].losses}
                          </div>
                        </div>
                        <div className='team_logo'>
                          <Image
                            className={'team_logo'}
                            id={leftTeam[0].team_id}
                            isTeam
                          ></Image>
                        </div>
                      </div>
                      <div className='dpc_center_container'>
                        <div className='dpc_score'>
                          {gamesDetails.team_1_wins}&nbsp;-&nbsp;
                          {gamesDetails.team_2_wins}
                        </div>
                      </div>

                      <div className='dpc_team_section right_team'>
                        <div className='team_logo'>
                          <Image
                            className={'team_logo'}
                            id={rightTeam[0].team_id}
                            isTeam
                          ></Image>
                        </div>
                        <div className='team_infos'>
                          <div className='dpc_team_name'>
                            {rightTeam[0].team_name}
                          </div>
                          <div className='dpc_team_record'>
                            {' '}
                            {rightTeam[0].wins}&nbsp;-&nbsp;
                            {rightTeam[0].losses}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='dpc_right_section'>
                      <Disclosure.Button
                        className='py-2'
                        onClick={() => {
                          setIsActive((prevState) => !isActive);
                          getSeriesMatches();
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'white',
                          flexGrow: '1',
                        }}
                      >
                        <MdIcons.MdArrowBackIosNew
                          style={{
                            transform: !isActive
                              ? 'rotate(-90deg)'
                              : 'rotate(90deg)',
                            fontSize: '1.25rem',
                          }}
                        ></MdIcons.MdArrowBackIosNew>{' '}
                      </Disclosure.Button>
                    </div>
                  </DpcBodyStyles>
                </div>
              </div>
            </div>
          </DpcListStyles>

          <DpcDisclosureStyles>
            <Disclosure.Panel className='disclosure_container disclosure_active '>
              <HashLoader
                loading={isLoading}
                color='white'
                size={35}
                speed={2}
              />
              {!isLoading &&
                gamesDetails.matches.length !== 0 &&
                seriesMatches.length === gamesDetails.matches.length &&
                gamesDetails.matches.map((match, index) => {
                  return (
                    <div className='disclosure_box'>
                      <div className='disclosure_left_section'>
                        <div className='disclosure_time'>
                          {formatTimestamp(
                            seriesMatches[index].start_time,
                            'hour'
                          )}
                        </div>
                      </div>
                      <div className='disclosure_hero_list left'>
                        {' '}
                        {seriesMatches[index].players.map((player, i) => {
                          if (
                            leftTeam[0].team_id ===
                            seriesMatches[index].dire_team_id
                              ? player.team_number === 1
                              : player.team_number === 0
                          )
                            return (
                              <Image
                                isHero
                                className={'hero_logo'}
                                id={player.hero_id}
                              ></Image>
                            );
                        })}
                      </div>
                      <div className='disclosure_center'>
                        <div className='center_first_line'>
                          <Image
                            className={'team_logo'}
                            isTeam
                            id={match.winning_team_id}
                          ></Image>
                          <div className='center_game_number'>
                            GAME {index + 1}
                          </div>
                        </div>

                        <div className='center_winning_team'>
                          {match.winning_team_id ===
                          seriesMatches[index].tourney.radiant_team_id ? (
                            <>
                              {seriesMatches[index].tourney.radiant_team_name}
                            </>
                          ) : match.winning_team_id ===
                            seriesMatches[index].tourney.dire_team_id ? (
                            <>{seriesMatches[index].tourney.dire_team_name}</>
                          ) : (
                            ''
                          )}
                          &nbsp;WIN
                        </div>

                        <div className='center_game_duration'>
                          {secondsToHms(seriesMatches[index].duration)}
                        </div>
                      </div>

                      <div className='disclosure_hero_list right'>
                        {seriesMatches[index].players.map((player, i) => {
                          if (
                            rightTeam[0].team_id ===
                            seriesMatches[index].dire_team_id
                              ? player.team_number === 0
                              : player.team_number === 1
                          )
                            return (
                              <Image
                                isHero
                                className={'hero_logo'}
                                id={player.hero_id}
                              ></Image>
                            );
                        })}
                      </div>
                      <div className='disclosure_right_section'></div>
                    </div>
                  );
                })}
            </Disclosure.Panel>
          </DpcDisclosureStyles>
        </WrapperStyles>
      </Disclosure>
    );
};

const WrapperStyles = styled.div`
  color: #fff;
  width: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const DpcHeaderStyles = styled.div`
  width: 100%;
  height: 100px;

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
      width: 90%;
      height: 40px;
      margin: 0px 0px;
      background-color: #28282e;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 2;
      box-shadow: 0px 0px 16px rgb(0 0 0 / 40%);
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
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
      min-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      .dpc_schedule_entry {
        width: 90%;

        background-color: #27272dbf;

        box-shadow: 4px 4px 8px rgba (0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        margin-bottom: 2px;
        transition: all 200ms ease-in-out;
        @media screen and (max-width: 1000px) {
          width: 100%;
          display: inline-block;
        }
      }
    }
  }
  .schedule_active {
    border: 1px solid #2c3b63;
    border-bottom: none;
    background-color: #1c2031 !important;
  }
`;

const DpcBodyStyles = styled.div`
  width: 100%;

  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .dpc_left_section {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2.5rem;
    @media screen and (max-width: 900px) {
      padding-left: 1rem;
      align-items: flex-start;
    }

    .node_type_upper {
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 3px;
      color: #fff;
      margin-bottom: 2px;

      @media screen and (max-width: 900px) {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
    .node_type_lower {
      font-size: 0.75rem;
      letter-spacing: 1px;
      color: #a3a3a3;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 8px;
      @media screen and (max-width: 900px) {
        font-size: 0.55rem;
        font-weight: 500;
      }
    }
    .node_time_label {
      color: #6b7785;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-align: center;
      display: flex;
      flex-direction: row;

      @media screen and (max-width: 900px) {
        font-size: 0.55rem;
        font-weight: 500;
        letter-spacing: 1px;
      }
    }
  }
  .dpc_center_section {
    flex-grow: 1;

    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: #a3a3a3;
    @media screen and (max-width: 900px) {
      font-size: 0.75rem;
    }
    .team_logo {
      width: 3rem;
      height: 3rem;
      min-width: 3rem;
      min-height: 3rem;

      @media screen and (max-width: 900px) {
        width: 2rem;
        height: 2rem;
        min-width: 2rem;
        min-height: 2rem;
      }
    }

    .dpc_team_section {
      flex-grow: 1;
      flex-basis: 0;
      display: flex;
      flex-direction: row;
      gap: 0.2rem;
      align-items: center;
      justify-content: center;

      .dpc_team_name {
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;

        @media screen and (max-width: 900px) {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
        }
        @media screen and (max-width: 670px) {
          font-size: 0.55rem;
        }
      }
      .dpc_team_record {
        font-size: 0.8rem;
        font-weight: 700;
        color: #6b7785;
        @media screen and (max-width: 900px) {
          font-size: 0.75rem;
          font-weight: 600;
        }
        @media screen and (max-width: 670px) {
          font-size: 0.55rem;
          font-weight: 500;
        }
      }
    }
    .left_team {
      text-align: right;
      margin-right: 0.9rem;
      justify-content: flex-end;
    }
    .dpc_center_container {
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;

      .dpc_score {
        text-align: center;
      }
    }
    .right_team {
      text-align: left;
      margin-left: 0.9rem;
      justify-content: flex-start;
    }
  }
  .dpc_right_section {
    width: 25%;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 900px) {
      padding-right: 1rem;
      align-items: flex-end;
    }
    @media screen and (max-width: 500px) {
      width: 15%;
    }
  }
`;

const DpcDisclosureStyles = styled.div`
  width: 100%;
  .disclosure_active {
    border: 1px solid #2c3b63;
    border-top: none;
  }
  .disclosure_container {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    background-color: #15171e;
    transition-property: height, min-height, padding-top, padding-bottom;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 1rem 0;
    @media screen and (max-width: 1000px) {
      width: 100%;
      display: inline-block;
    }
    .disclosure_box {
      width: 100%;
      padding: 0.5rem 0;
      flex-grow: 1;
      flex-basis: 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      .disclosure_left_section {
        width: 25%;
        padding-left: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 900px) {
          padding-left: 1rem;
          align-items: flex-start;
        }

        .disclosure_time {
          color: #6b7785;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-align: center;
          @media screen and (max-width: 900px) {
            font-size: 0.65rem;
          }
          @media screen and (max-width: 500px) {
            font-size: 0.55rem;
          }
        }
        .disclosure_watched_box {
          padding: 4px 8px;
          background-color: #007acc;
          border-radius: 3px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          font-size: 10px;
        }
      }
      .disclosure_hero_list {
        width: 10.625rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0 2.5rem;

        @media screen and (max-width: 900px) {
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .hero_logo {
          width: 2rem;
          height: 2rem;
          background-size: cover;
          background-repeat: no-repeat;
          @media screen and (max-width: 900px) {
            width: 1.5rem;
            height: 1.5rem;
          }
          @media screen and (max-width: 500px) {
            width: 1rem;
            height: 1rem;
          }
        }
      }
      .disclosure_center {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .center_first_line {
          display: flex;
          flex-direction: row;
          align-items: center;

          margin-bottom: 0.5rem;

          .team_logo {
            width: 32px;
            height: 32px;
            min-width: 32px;
            min-height: 32px;
            opacity: 1;
          }
          .center_game_number {
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #fff;
            margin-left: 0.5rem;
            white-space: nowrap;
          }
        }
        .center_winning_team {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #a3a3a3;
          text-align: center;
          margin-bottom: 0.8rem;
          @media screen and (max-width: 500px) {
            font-size: 0.6rem;
          }
        }
        .center_game_duration {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #6b7785;
        }
      }
      .disclosure_right_section {
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 900px) {
          padding-right: 1rem;
          align-items: flex-end;
        }
      }
      &::after {
        width: calc(100% - 48px);
        height: 100%;
        position: absolute;
        content: '';
        margin: 0px 24px;
        border-bottom: 1px solid #31363f;
        pointer-events: none;
      }
    }
  }
`;

export default GameEntry;