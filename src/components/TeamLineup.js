import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getName } from '../Functions/getName';
import { ItemsContext } from '../pages/Esports';
import Image from './Image';
import Video from './Video';

const TeamLineup = ({
  lineup,
  children,
  teamInfos,
  activeGame,
  matchIndex,
}) => {
  const [isActive, setIsActive] = useState({ active: false, currentIndex: -1 });

  const [winner, setWinner] = useState('');
  const [heroesList, setHeroesList] = useState();

  const getHeroes = async () => {
    const res = await fetch('/.netlify/functions/helloWorld/');
    const json = await res.json();
    setHeroesList((prevState) => json.result.data.heroes);
  };

  const classHandler = (index, className) => {
    if (index === isActive) {
      return className;
    } else {
      return null;
    }
  };

  const getWinner = () => {
    if (
      activeGame.game.matches[matchIndex].winning_team_id ===
      teamInfos.primaryTeam.team_id
    ) {
      setWinner((prevState) => 'primary');
    } else if (
      activeGame.game.matches[matchIndex].winning_team_id ===
      teamInfos.secondaryTeam.team_id
    ) {
      setWinner((prevState) => 'secondary');
    }
  };
  useEffect(() => {
    getHeroes();
  }, []);

  useEffect(() => {
    getWinner();
  }, [matchIndex]);

  const dotaItems = React.useContext(ItemsContext);

  if (teamInfos && lineup)
    return (
      <LineupStyles>
        <div className='body'>
          <div className='match_section_team series_details_left'>
            <div
              className={`team_heading ${winner === 'primary' ? 'winner' : ''}`}
            >
              <div className='team'>
                {teamInfos.primaryTeam.team_id === lineup.tourney.dire_team_id
                  ? 'DIRE'
                  : 'RADIANT'}
              </div>
              <div className='score'>
                {' '}
                {teamInfos.primaryTeam.team_id === lineup.tourney.dire_team_id
                  ? lineup.dire_score
                  : lineup.radiant_score}
              </div>
            </div>

            <div className='player_list'>
              {lineup.players.map((player, index) => {
                if (
                  teamInfos.primaryTeam.team_id === lineup.tourney.dire_team_id
                    ? player.team_number === 1
                    : player.team_number === 0
                )
                  return (
                    <>
                      <div
                        className={`match_section_player ${classHandler(
                          index,
                          'active_player left_active_player'
                        )}`}
                        onClick={(e) => {
                          if (index === isActive) {
                            setIsActive((prevState) => false);
                          } else {
                            setIsActive((prevState) => index);
                          }
                        }}
                      >
                        {index}
                        <div
                          className='hero_and_level'
                          style={{ textAlign: 'right' }}
                        >
                          <div className='hero_name'>
                            {heroesList &&
                              heroesList.map((hero, index) =>
                                hero.id === player.hero_id ? (
                                  <>{hero.name_english_loc}</>
                                ) : (
                                  ''
                                )
                              )}
                          </div>
                          <div className='hero_level'>Level {player.level}</div>
                        </div>{' '}
                        <Image
                          className={'player_icon'}
                          isPlayer
                          id={player.account_id}
                        ></Image>
                        <div
                          className='name_and_stats'
                          style={{ textAlign: 'left' }}
                        >
                          <div className='player_name'>{player.pro_name}</div>
                          <div className='player_stats'>
                            {player.kills}&nbsp;/&nbsp;{player.deaths}
                            &nbsp;/&nbsp;
                            {player.assists}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`match_player_overlay  ${classHandler(
                          index,
                          'active_window'
                        )}`}
                      >
                        <div className='overlay_top_section'>
                          <Video
                            className={'hero_portrait_container'}
                            isHero
                            id={player.hero_id}
                          ></Video>

                          <div className='overlay_player'>
                            <div className='player_name'>
                              {' '}
                              {player.pro_name}
                            </div>
                            <div className='team_name'>
                              {' '}
                              {teamInfos.primaryTeam.team_name}
                            </div>

                            <Image
                              className={'player_image'}
                              isPlayer
                              id={player.account_id}
                            ></Image>

                            <Image
                              isTeam
                              id={teamInfos.primaryTeam.team_id}
                              className='team_image'
                            ></Image>
                          </div>
                        </div>
                        <div className='overlay_item_section'>
                          {player.items.map((item, index) => {
                            if (item !== 0)
                              return (
                                item !== 0 && (
                                  <Image
                                    className={'item_icon'}
                                    isItem
                                    id={item}
                                  ></Image>
                                )
                              );
                          })}
                        </div>
                      </div>
                    </>
                  );
              })}
            </div>
          </div>
          <div className='match_section_team series_details_right'>
            {' '}
            <div
              className={`team_heading ${
                winner === 'secondary' ? 'winner' : ''
              }`}
            >
              <div className='team'>
                {teamInfos.secondaryTeam.team_id === lineup.tourney.dire_team_id
                  ? 'DIRE'
                  : 'RADIANT'}
              </div>
              <div className='score'>
                {' '}
                {teamInfos.secondaryTeam.team_id === lineup.tourney.dire_team_id
                  ? lineup.dire_score
                  : lineup.radiant_score}
              </div>
            </div>
            <div className='player_list'>
              {lineup.players.map((player, index) => {
                if (
                  teamInfos.secondaryTeam.team_id ===
                  lineup.tourney.dire_team_id
                    ? player.team_number === 1
                    : player.team_number === 0
                )
                  return (
                    <>
                      <div
                        className={`match_section_player ${classHandler(
                          index,
                          'active_player right_active_player'
                        )}`}
                        onClick={(e) => {
                          if (index === isActive) {
                            setIsActive((prevState) => false);
                          } else {
                            setIsActive((prevState) => index);
                          }
                        }}
                        style={{ flexDirection: 'row-reverse' }}
                      >
                        <div
                          className='hero_and_level'
                          style={{ textAlign: 'left' }}
                        >
                          <div className='hero_name'>
                            {heroesList &&
                              heroesList.map((hero, index) =>
                                hero.id === player.hero_id ? (
                                  <>{hero.name_english_loc}</>
                                ) : (
                                  ''
                                )
                              )}{' '}
                          </div>
                          <div className='hero_level'>Level {player.level}</div>
                        </div>{' '}
                        <Image
                          className={'player_icon'}
                          isPlayer
                          id={player.account_id}
                        ></Image>
                        <div
                          className='name_and_stats'
                          style={{ textAlign: 'right' }}
                        >
                          <div className='player_name'>{player.pro_name}</div>
                          <div className='player_stats'>
                            {player.kills}&nbsp;/&nbsp;{player.deaths}
                            &nbsp;/&nbsp;
                            {player.assists}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`match_player_overlay right_overlay ${classHandler(
                          index,
                          'active_window'
                        )}`}
                      >
                        <div className='overlay_top_section'>
                          <Video
                            className={'hero_portrait_container'}
                            isHero
                            id={player.hero_id}
                          ></Video>

                          <div className='overlay_player'>
                            <div className='player_name'>
                              {' '}
                              {player.pro_name}
                            </div>
                            <div className='team_name'>
                              {' '}
                              {teamInfos.secondaryTeam.team_name}
                            </div>

                            <Image
                              className={'player_image'}
                              isPlayer
                              id={player.account_id}
                            ></Image>

                            <Image
                              isTeam
                              id={teamInfos.secondaryTeam.team_id}
                              className='team_image'
                            ></Image>
                          </div>
                        </div>
                        <div className='overlay_item_section'>
                          {player.items.map((item, index) => {
                            if (item !== 0)
                              return (
                                item !== 0 && (
                                  <Image
                                    className={'item_icon'}
                                    isItem
                                    id={item}
                                  ></Image>
                                )
                              );
                          })}
                        </div>
                      </div>
                    </>
                  );
              })}
            </div>
          </div>
        </div>
      </LineupStyles>
    );
};

const LineupStyles = styled.div`
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
  padding: 1.7rem;
  top: 0;
  left: 0;
  @media screen and (max-width: 980px) {
    zoom: 0.9;
  }
  @media screen and (max-width: 895px) {
    zoom: 0.8;
  }
  @media screen and (max-width: 795px) {
    zoom: 0.7;
  }
  @media screen and (max-width: 695px) {
    zoom: 0.6;
  }
  @media screen and (max-width: 595px) {
    zoom: 0.5;
  }
  @media screen and (max-width: 495px) {
    zoom: 0.4;
  }
  @media screen and (max-width: 395px) {
    zoom: 0.3;
  }
  .body {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    .match_section_team {
      width: calc(50% - 4px);
      height: 100%;
      min-height: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .winner {
        color: #fff !important;
        text-shadow: 0px 0px 10px #06f;
      }

      .team_heading {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 18px;
        padding: 8px 2rem;
        background-color: #2a2a30;
        color: #a3a3a3;
        .team {
          font-size: 20px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
          margin-top: 3px;
        }
        .score {
          font-size: 1.5rem;
          font-weight: 700;
        }
      }
      .player_list {
        width: 100%;
        flex-grow: 1;
        min-height: 0;
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        align-items: center;

        .match_section_player {
          width: 100%;
          transition: transform 250ms ease-in-out;

          flex-grow: 1;
          flex-basis: 1;
          display: flex;
          align-items: center;
          flex-direction: row;
          color: #a3a3a3;
          background-color: #1f2025;
          cursor: pointer;
          position: relative;
          border-top: 1px solid transparent;
          border-bottom: 1px solid transparent;
          .hero_and_level {
            flex-grow: 1;
            flex-basis: 0px;
            min-height: 0;
            display: flex;
            flex-direction: column;

            .hero_name {
              font-size: 16px;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .hero_level {
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
          }
          .player_icon {
            width: 64px;
            height: 64px;
            margin: 0px 12px;
            border: 1px solid #000;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          .name_and_stats {
            flex-grow: 1;
            flex-basis: 0;
            min-height: 0;
            display: flex;
            flex-direction: column;

            .player_name {
              font-size: 1rem;
              font-weight: bold;
            }
            .player_stats {
              font-size: 0.7rem;
              font-weight: bold;
            }
          }
        }

        .match_player_overlay {
          height: 100%;
          width: calc(50% - 4px);
          position: absolute;
          background-color: #20212b;
          top: 0px;
          right: 0px;
          z-index: 1;
          pointer-events: inherit;
          transition-property: opacity;
          transition-timing-function: ease-in-out;
          transition-duration: 0.1s;
          display: none;
          flex-direction: column;
          align-items: center;
          border: 1px solid #314068;
          .overlay_top_section {
            width: 100%;
            height: 400px;
            position: relative;
            display: flex;

            flex-direction: row;
            align-items: center;
            overflow: hidden;
            .hero_portrait_container {
              width: 80%;
              position: absolute;
              top: 0;
              right: -10%;
              opacity: 0.7;
              z-index: 1;
            }
            .overlay_player {
              width: 60%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              z-index: 2;
              position: relative;

              .player_name {
                width: 100%;
                color: #fff;
                text-align: center;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 22px;
                margin-bottom: 4px;
              }
              .team_name {
                width: 100%;
                color: #a3a3a3;
                text-align: center;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 17px;
                margin-bottom: 12px;
              }
              .player_image {
                width: 140px;
                height: 140px;
                background-size: cover;
                background-repeat: no-repeat;
                background-color: #27272a;
                border: 1px solid #000;
                box-shadow: 2px 2px 7px rgb(0 0 0 / 50%);
              }
              .team_image {
                width: 64px;
                height: 64px;
                margin-top: 1rem;
              }
            }
          }

          .overlay_item_section {
            width: calc(100% - 40px);
            border-top: 1px solid #000;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            padding: 20px 0px;
            .item_icon {
              width: 66px;
              height: 48px;
              background-size: cover;
              background-repeat: no-repeat;
              border: 1px solid #000;
              box-shadow: 2px 2px 7px rgb(0 0 0 / 50%);
            }
          }
        }
        .right_overlay {
          left: 0px;
        }

        .active_window {
          display: flex;
        }
        .active_player {
          color: #fff;
          background-color: #20212b;
          border-top: 1px solid #314068;
          border-bottom: 1px solid #314068;
          z-index: 2;
          width: calc(100% + 10px);
        }
        .right_active_player {
          border-right: 1px solid #314068;
          transform: translateX(-5px);
        }
        .left_active_player {
          border-left: 1px solid #314068;
          transform: translateX(5px);
        }
      }
    }
    .series_details_left {
      border-right: 1px solid #000;
    }
    .series_details_right {
      .team_heading {
        justify-content: flex-start;
      }
    }
  }
`;

export default TeamLineup;
