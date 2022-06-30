import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Team = ({ teamId, teamName, leagues }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [teamRegion, setTeamRegion] = useState();
  const [teamDivision, setTeamDivision] = useState();
  const [teamPlayers, setTeamPlayers] = useState();
  const [recentMatches, setRecentMatches] = useState([]);
  const [lastMatches, setLastMatches] = useState([]);
  const [teamGames, setTeamGames] = useState();

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
            match.winner !== 0 &&
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
  recentMatches.sort((a, b) => a.matchTime - b.matchTime);

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

    getTeamInfo();
    getRecentMatches();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (teamPlayers && teamPlayers.length === 5)
    return (
      <TeamEntryStyles>
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
          <img
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams_override/${teamId}.png`}
            className='team_logo'
            alt=''
          />
        </div>
        <div className='teamlist_team_info'>
          <div className='team_info'>
            <div className='team_name'>{teamName}</div>
          </div>
          <div className='team_region'>WESTERN EUROPE</div>
          <div className='team_division'>{teamDivision}</div>
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
                          currentTarget.onerror = null; // prevents looping
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
        <Link to='#' className='teamlist_match_section'>
          <div className='teamlist_top_bar'>
            {recentMatches.length > 0 ? 'NEXT MATCH' : 'LAST MATCH'}
          </div>
          <div className='teamlist_bottom_section_wrapper'>
            <div className='teamlist_bottom_section'>
              <div className='focusable'>
                {recentMatches.length > 0 &&
                recentMatches[0].teams[1].name === teamName ? (
                  <img
                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/teamlogos/${recentMatches[0].teams[0].teamId}.png`}
                    alt=''
                  />
                ) : recentMatches.length > 0 &&
                  recentMatches[0].teams[1].name !== teamName ? (
                  <img
                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/teamlogos/${recentMatches[0].teams[1].teamId}.png`}
                    alt=''
                  />
                ) : (
                  ''
                )}
              </div>
              <div className='teamlist_label'>
                {recentMatches.length > 0 &&
                recentMatches[0].teams[1].name === teamName ? (
                  <div className='teamlist_team_name'>
                    {recentMatches[0].teams[0].name}
                  </div>
                ) : recentMatches.length > 0 &&
                  recentMatches[0].teams[1].name !== teamName ? (
                  <div className='teamlist_team_name'>
                    {recentMatches[0].teams[1].name}
                  </div>
                ) : (
                  ''
                )}
                {recentMatches.length === 0 && lastMatches.length > 0
                  ? lastMatches[lastMatches.length - 1].teams[1].name
                  : ''}
              </div>
            </div>
          </div>
        </Link>
      </TeamEntryStyles>
    );
};

const TeamEntryStyles = styled.div`
  width: 100%;
  height: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #36363ebf;
  color: #a3a3a3;
  box-shadow: 4px 4px 8px rgb(0 0 0 / 50%);
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
      gap: 5px;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
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
      img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export default Team;
