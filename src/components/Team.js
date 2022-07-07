import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { displayPlayerRole } from '../Functions/displayPlayerRole';

import { displayTeamRegion } from '../Functions/displayTeamRegion';
import { formatTimestamp } from '../Functions/formatTimestamp';
import { playerImage } from '../Functions/playerImage';
import { teamImage } from '../Functions/teamImage';
import { obsHD, obsidian, textObs } from '../Utility/Colors';
import Tippy from '@tippyjs/react/headless';
import Tooltiper from './Tooltiper';
import { HashLoader } from 'react-spinners';

const Team = ({ teamId, teamName, leagues, className, children }) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');
  const [enemyId, setEnemyId] = useState();
  const [enemyTeam, setEnemyTeam] = useState();
  const [primaryScore, setPrimaryScore] = useState();
  const [secondaryScore, setSecondaryScore] = useState();
  const [isFollowed, setIsFollowed] = useState(false);
  const [teamRegion, setTeamRegion] = useState();
  const [teamDivision, setTeamDivision] = useState();
  const [teamPlayers, setTeamPlayers] = useState();
  const [recentMatches, setRecentMatches] = useState([]);
  const [lastMatches, setLastMatches] = useState([]);

  const focusable = React.useRef(null);
  const getTeamInfo = async () => {
    const res = await fetch(`/.netlify/functions/teamInfo/?id=${teamId}`);
    const json = await res.json();
    setTeamPlayers(json.registered_member_account_ids);
  };

  const getRecentMatches = async () => {
    const res = await fetch(`/.netlify/functions/recentMatches`);
    const json = await res.json();
    json.tournaments.forEach((tournament) =>
      tournament.matches.forEach((match) =>
        match.teams.forEach((team) => {
          if (
            team.teamId === teamId &&
            (match.winner !== 0 ||
              match.teams[0].games_won !== 0 ||
              match.teams[1].games_won !== 0) &&
            match.actualMatchTime !== 0
          ) {
            setLastMatches((prevState) => [...prevState, match]);
          }
          if (
            team.teamId === teamId &&
            match.winner === 0 &&
            match.actualMatchTime === 0
          ) {
            setRecentMatches((prevState) => [...prevState, match]);
          }
        })
      )
    );
  };
  const lastPlayedMatches = () => {
    lastMatches.length !== 0 &&
      recentMatches.length === 0 &&
      lastMatches[lastMatches.length - 1].teams.forEach((team, index) => {
        if (team.teamId === teamId) {
          setPrimaryScore(() => team.games_won);
        }
        if (team.teamId !== teamId) {
          setSecondaryScore(() => team.games_won);
        }
      });
  };

  const getEnemyId = () => {
    recentMatches.length !== 0 &&
      recentMatches[0].teams.forEach((team, index) => {
        if (team.teamId !== teamId) {
          setEnemyId((prevState) => team.teamId);
        }
      });

    recentMatches.length === 0 &&
      lastMatches.length !== 0 &&
      lastMatches[lastMatches.length - 1].teams.forEach((team, index) => {
        if (team.teamId !== teamId) {
          setEnemyId((prevState) => team.teamId);
        }
      });
  };

  const getEnemyTeam = async () => {
    if (enemyId) {
      const res = await fetch(`/.netlify/functions/enemyTeam/?id=${enemyId}`);
      const json = await res.json();
      setEnemyTeam(json);
      setLoading(false);
    }
  };

  useEffect(() => {
    getEnemyId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMatches, recentMatches]);

  useEffect(() => {
    lastPlayedMatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMatches]);

  useEffect(() => {
    leagues &&
      leagues.forEach((league) => {
        league.node_groups[0].node_groups[0].team_standings.forEach((team) => {
          if (team.team_id === teamId) {
            setTeamRegion((prevState) => league.info.region);
            const division = league.info.name.split(' ');
            setTeamDivision(
              division.filter((name) => name === 'II' || name === 'I')
            );
          }
        });
      });
    recentMatches.sort((a, b) => a.matchTime - b.matchTime);
    getTeamInfo();
    getRecentMatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamId]);

  useEffect(() => {
    getEnemyTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enemyId]);

  if (teamPlayers && teamPlayers.length === 5)
    return (
      <TeamEntryStyles className={className}>
        <div className='teamlist_favorite_section'>
          <div className='teamlist_following_line'>
            <div className='focusable'>
              <div
                className={isFollowed ? 'star_sign_active' : 'star_sign'}
                onClick={() => {
                  setIsFollowed(!isFollowed);
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className='teamlist_team_logo'>
          {teamImage(teamId, 'team_logo')}
        </div>
        <div className='teamlist_team_info'>
          <div className='team_info'>
            <div className='team_name'>{teamName}</div>
          </div>
          <div className='team_region'>{displayTeamRegion(teamRegion)}</div>
          <div className='team_division'>DIVISION {teamDivision}</div>
        </div>
        <div className='teamlist_player_section'>
          {teamPlayers &&
            teamPlayers.map((player, index) => {
              if (player.role !== 0) {
                return (
                  <div className='teamlist_player_image_container'>
                    <div className='teamlist_player_gradient'>
                      <img
                        src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/players/${player}.png`}
                        alt=''
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src =
                            'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/player_unknown.png';
                        }}
                      />
                    </div>
                  </div>
                );
              }
            })}
        </div>

        <div className='teamlist_match_section'>
          <div className='teamlist_top_bar'>
            {recentMatches.length > 0
              ? 'NEXT MATCH '
              : lastMatches.length !== 0
              ? 'LAST MATCH'
              : ''}
            {recentMatches.length !== 0 &&
              formatTimestamp(recentMatches[0].matchTime)}
            {recentMatches.length === 0 && lastMatches.length === 0
              ? 'No match data recorded'
              : ''}

            {lastMatches.length !== 0 && recentMatches.length === 0 ? (
              <>
                <div
                  className={
                    primaryScore > secondaryScore
                      ? 'won_game'
                      : primaryScore < secondaryScore
                      ? 'lost_game'
                      : primaryScore === secondaryScore
                      ? 'draw_game'
                      : ''
                  }
                >
                  {primaryScore > secondaryScore ? (
                    <>&nbsp;WON&nbsp;</>
                  ) : primaryScore < secondaryScore ? (
                    <>&nbsp;LOSS&nbsp;</>
                  ) : primaryScore === secondaryScore ? (
                    <>&nbsp;DRAW&nbsp; </>
                  ) : (
                    ''
                  )}
                  {primaryScore} - {secondaryScore}
                </div>{' '}
                &nbsp;VS
              </>
            ) : (
              ''
            )}
          </div>

          <div className='teamlist_bottom_section_wrapper'>
            <div className='teamlist_bottom_section'>
              <div ref={focusable} className='focusable'>
                <Tooltiper interactive={false} reference={focusable}>
                  <HashLoader
                    color={color}
                    loading={loading}
                    size={150}
                    speed={10}
                  />
                  test
                </Tooltiper>
                {recentMatches.length !== 0 &&
                  recentMatches[0].teams.map((team, index) => {
                    if (team.teamId !== teamId) {
                      return teamImage(team.teamId, 'enemy_logo');
                    }
                  })}
                {recentMatches.length === 0 &&
                  lastMatches.length !== 0 &&
                  lastMatches[lastMatches.length - 1].teams.map(
                    (team, index) => {
                      if (team.teamId !== teamId) {
                        return teamImage(team.teamId, 'enemy_logo');
                      }
                    }
                  )}
              </div>

              <div className='teamlist_label'>
                {recentMatches.length !== 0 &&
                  recentMatches[0].teams.map((team, index) => {
                    if (team.teamId !== teamId) {
                      return (
                        <div className='teamlist_team_name'>{team.name}</div>
                      );
                    }
                  })}
                {recentMatches.length === 0 &&
                  lastMatches.length !== 0 &&
                  lastMatches[lastMatches.length - 1].teams.map(
                    (team, index) => {
                      if (team.teamId !== teamId) {
                        return (
                          <div className='teamlist_team_name'>{team.name}</div>
                        );
                      }
                    }
                  )}
              </div>
            </div>
          </div>
        </div>
      </TeamEntryStyles>
    );
};

const TeamEntryStyles = styled.div`
  width: 75%;
  height: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #36363ebf;
  color: #a3a3a3;
  box-shadow: 4px 4px 8px rgb(0 0 0 / 50%);
  margin-top: 1rem;
  position: relative;
  z-index: 1;
  .teamlist_favorite_section {
    min-width: 70px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #6e6e7766;
    .teamlist_following_line {
      cursor: pointer;

      .focusable {
        .star_sign {
          background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/star_black.png');
          width: 15px;
          height: 15px;
          background-size: cover;
          background-repeat: no-repeat;
          transition: all 250ms ease-in-out;
          filter: brightness(1.3);
        }
        .star_sign_active {
          background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/star_gold.png');
          width: 30px;
          height: 30px;
          background-size: cover;
          background-repeat: no-repeat;
          transition: all 250ms ease-in-out;
          filter: drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.5))
            brightness(1.3);
        }
      }
    }
  }
  .team_logo {
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    opacity: 1;
    margin-left: 18px;
    margin-right: 12px;
  }
  .teamlist_team_info {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;

    .team_info {
      display: flex;

      flex-direction: row;

      align-items: center;
      .team_name {
        color: #fff;

        font-weight: 600;

        text-transform: uppercase;
        letter-spacing: 4px;
        margin-right: 10px;
      }
    }
    .team_region {
      font-size: 0.6rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      white-space: nowrap;
    }
    .team_division {
      color: #6b7785;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  .teamlist_player_section {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: -14px;

    .teamlist_player_image_container {
      height: 100%;
      width: 5.625rem;
      margin: 0px -14px;

      background-image: linear-gradient(
        280deg,
        rgba(0, 0, 0, 0.3),
        transparent,
        rgba(0, 0, 0, 0.3)
      );
      clip-path: polygon(30px 0px, 100% 0px, calc(100% - 30px) 100%, 0px 100%);
      .teamlist_player_gradient {
        width: 100%;
        height: 100%;

        mask-image: linear-gradient(#fff, #fff 76%, transparent 80%);
        -webkit-mask-image: linear-gradient(#fff, #fff 80%, transparent 95%);
        img {
          width: 100%;
          padding-top: 15%;
        }
      }
    }
  }
  .teamlist_match_section {
    width: 330px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    clip-path: polygon(30px 0px, 100% 0px, 100% 100%, 0% 100%);
    text-decoration: none;
    color: #fff;

    .teamlist_top_bar {
      width: 100%;
      height: 30px;

      background-color: #202023bf;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      .won_game {
        color: green;
      }
      .lost_game {
        color: red;
      }
      .draw_game {
        color: 'blue';
      }
    }
    .teamlist_bottom_section_wrapper {
      width: 100%;
      flex-grow: 1;
      background-color: #252528bf;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      padding-right: 1rem;
      .teamlist_bottom_section {
        width: 75%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-right: 1.4rem;
        .tester {
          border: 1px solid white !important;
        }

        .focusable {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .teamlist_label {
          flex-grow: 1;
          display: flex;
          flex-direction: column;

          justify-content: flex-end;

          .teamlist_team_name {
            color: #fff;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
        }
      }

      .enemy_logo {
        margin-right: 10px;
        width: 50px;
        height: 50px;
      }
    }
  }
`;

const TooltipStyles = styled.div`
  background: ${obsidian};
  box-shadow: 0px 0px 4px black;

  .tooltip_container {
    color: white;
    width: 45rem;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .enemy_top_container {
      width: 100%;

      padding: 0.8rem;
      min-height: 3rem;
      display: flex;
      background: #192d2e;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      .enemy_logo {
        width: 64px;
        height: 64px;
        min-width: 64px;
        min-height: 64px;
        opacity: 1;
      }
      .enemy_team_name {
        display: flex;
        margin-left: 0.5rem;
        width: 100%;
        justify-content: space-between;
      }
    }

    .enemy_bottom_container {
      width: 100%;
      padding: 0.8rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .enemy_player_container {
        width: 8rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        background: #192d2e;
        box-shadow: -1px 1px 1px #2c5052;

        .enemy_player {
          min-width: 10rem;
          height: 10rem;
          margin-top: 0.5rem;
        }
        .enemy_player_role {
          background: ${obsidian};
          width: 100%;
          min-height: 2rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        .enemy_player_info {
          height: 100%;
          background: ${obsHD};
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 0.5rem;

          .real_name {
            color: ${textObs};
            font-size: 0.8rem;
          }
          .pro_name {
            letter-spacing: 1px;
          }
        }
      }
    }
  }
`;

export default Team;
