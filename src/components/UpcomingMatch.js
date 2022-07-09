import React, { useState, useEffect } from 'react';
import { formatTimestamp } from '../Functions/formatTimestamp';
import styled from 'styled-components';
import { obsHD } from '../Utility/Colors';

import Button from './Button';
import Image from './Image';

const UpcomingMatch = ({ leagues }) => {
  const [recentMatches, setRecentMatches] = useState([]);
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const getMostRecentMatches = async () => {
    const res = await fetch(`/.netlify/functions/recentMatches`);
    const json = await res.json();
    json.tournaments.forEach((tournament) => {
      tournament.matches.forEach((match) => {
        if (match.actualMatchTime === 0 || match.winner === 0) {
          if (match.matchTime - currentTimestamp > 0) {
            setRecentMatches((prevState) => [...prevState, match]);
          }
        }
      });
    });
  };

  useEffect(() => {
    recentMatches && recentMatches.sort((a, b) => a.matchTime - b.matchTime);
  }, [recentMatches]);

  useEffect(() => {
    getMostRecentMatches();
    setInterval(() => {
      console.log('DATA FETCHED BY SECOND');
      getMostRecentMatches();
    }, 3600000);
  }, []);
  console.log(recentMatches);
  if (recentMatches.length !== 0) {
    return (
      <UpcomingMatchStyles>
        <div className='container'>
          <div className='left_labels'>
            <div className='coming_up_next'>COMING UP NEXT</div>
            <div className='left_teams'>
              <div className='team_name'>{recentMatches[0].teams[0].name}</div>
              <div className='versus'>VS</div>
              <div className='team_name'>{recentMatches[0].teams[1].name}</div>
            </div>
            <div className='watch_live'>Watch Live</div>

            <div className='timestamp'>
              {formatTimestamp(recentMatches[0].matchTime, 'classic')}
              <div className='fromNow_timestamp'>
                {formatTimestamp(recentMatches[0].matchTime, 'fromNow')}
              </div>
            </div>
          </div>
          <div className='teams'>
            <div className='team_wrapper'>
              <div>
                {recentMatches[0].teams[0].name}

                <Image
                  isTeam
                  className='team_logo'
                  id={recentMatches[0].teams[0].teamId}
                ></Image>
              </div>
            </div>
            <div className='versus'>VS</div>
            <div className='team_wrapper'>
              <div>
                <Image
                  isTeam
                  className='team_logo'
                  id={recentMatches[0].teams[1].teamId}
                ></Image>
              </div>
            </div>
          </div>
          <Button isRipple={true}>VIEW SCHEDULE</Button>
        </div>
      </UpcomingMatchStyles>
    );
  }
};

const UpcomingMatchStyles = styled.section`
  width: 100%;
  margin-top: 15rem;
  background: ${obsHD};
  padding: 0 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  .container {
    width: 100%;

    max-width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;

    .left_labels {
      width: 500px;
      display: flex;
      flex-direction: column;
      color: #fff;
      z-index: 1;

      .watch_live {
        color: #a3a3a3;
        font-size: 15px;
        margin-bottom: 0.3rem;
        letter-spacing: 1px;
      }
      .timestamp {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        display: flex;
        .fromNow_timestamp {
          margin-left: 2rem;
        }
      }

      .left_teams {
        flex-direction: row;
        display: flex;

        font-size: 2.5rem;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        .team_name {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .versus {
          color: #fff;
          font-size: 1.3rem;
          margin: 0px 8px;
        }
      }
      .coming_up_next {
        color: #a3a3a3;
        font-size: 14px;
        font-weight: 700;

        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 1rem;
      }
    }
    .teams {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .team_wrapper {
      opacity: 0.3;
      filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5));
      height: 100%;
      position: relative;
      transition: 200ms opacity ease-in-out;

      img.team_logo {
        width: 175px;
        min-width: 175px;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-color: #111;
        clip-path: polygon(50px 0px, 175px 0px, 125px 100%, 0px 100%);
        vertical-align: middle;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default UpcomingMatch;
