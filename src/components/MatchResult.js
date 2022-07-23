import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import {
  obsH2,
  obsidian,
  obsidianShadow,
  obsHD,
  obsH,
} from '../Utility/Colors';
import Image from './Image';

const MatchResult = ({
  match,
  gameNumber,
  children,
  isResult,
  winnerId,
  teamInfos,
  score,
  isFinalOutcome,
}) => {
  return (
    <OutcomeStyles>
      <div className='center_container'>
        {!isFinalOutcome && (
          <GameWinnerStyles>
            {isResult ? (
              <div className='game_number'>GAME {gameNumber}</div>
            ) : (
              ''
            )}

            <div className='team_winner_logo'>
              <Image className='winner_logo_img' isTeam id={winnerId}></Image>
            </div>

            {winnerId === teamInfos.primaryTeam.team_id ? (
              <div className='winning_team_name'>
                {teamInfos.primaryTeam.team_name}
              </div>
            ) : (
              <div className='winning_team_name'>
                {teamInfos.secondaryTeam.team_name}
              </div>
            )}
            <Button
              setClassName='game_details_btn'
              bradius='0.35rem'
              background={obsHD}
              isRipple
            >
              GAME DETAILS
            </Button>
          </GameWinnerStyles>
        )}

        {isFinalOutcome && (
          <SeriesResult>
            <div className='outcome_result'>
              {winnerId ? 'VICTORY' : 'DRAW'}
            </div>
            {winnerId && (
              <>
                <div className='team_winner_logo'>
                  <Image className='team_img' isTeam id={winnerId}></Image>
                </div>
                <div className='winner_team_name'>
                  {teamInfos.primaryTeam.team_id === winnerId
                    ? teamInfos.primaryTeam.team_name
                    : teamInfos.secondaryTeam.team_name}
                </div>
                <div className='winner_score'>
                  WINS {Math.max(...score)} TO {Math.min(...score)}
                </div>
              </>
            )}
            {!winnerId && (
              <div className='teams_draw'>
                <div className='team_winner_logo'>
                  <Image
                    className='team_img'
                    isTeam
                    id={teamInfos.primaryTeam.team_id}
                  ></Image>
                </div>
                <div className='team_winner_logo'>
                  <Image
                    className='team_img'
                    isTeam
                    id={teamInfos.secondaryTeam.team_id}
                  ></Image>
                </div>
              </div>
            )}
          </SeriesResult>
        )}
      </div>
    </OutcomeStyles>
  );
};

const OutcomeStyles = styled.div`
  background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/gameblur01.jpg');
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  .center_container {
    width: 300px;
    height: 400px;
    background-color: #0b0b0c99;
    box-shadow: 4px 4px 20px rgb(0 0 0 / 30%);
  }
`;

const SeriesResult = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  .winner_team_name {
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
  }
  .winner_score {
    font-size: 18px;
    color: #a3a3a3;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .teams_draw {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 0.6rem 0;
  }
  .team_winner_logo {
    margin: 0.6rem 0;
    .team_img {
      width: 64px;
      height: 64px;
      min-width: 64px;
      min-height: 64px;
      opacity: 1;
    }
  }
  .outcome_result {
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: 0px 0px 10px #06f;
    margin-bottom: 10px;
    font-family: 'Radiance', sans-serif;
  }
`;

const GameWinnerStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  .team_winner_logo {
    display: flex;
    margin: 1rem 0;
    .winner_logo_img {
      width: 64px;
      height: 64px;
      min-width: 64px;
      min-height: 64px;
      opacity: 1;
    }
  }
  .game_details_btn {
    margin-top: 2rem;
  }

  .game_number {
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    margin-bottom: 10px;
    font-family: 'Radiance', sans-serif;
  }
  .winning_team_name {
    font-size: 24px;
    color: #fff;
    text-shadow: 0px 0px 10px #06f;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
  }
`;

export default MatchResult;
