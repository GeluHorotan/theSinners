import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { LeagueContext } from '../pages/Esports';
import Image from './Image';

const SeriesDetails = () => {
  const [activeGame, setActiveGame] = useState();
  const [liveGames, setLiveGames] = useState([]);
  const [lastGames, setLastGames] = useState([]);
  const leagues = React.useContext(LeagueContext);

  const getGamesByCategory = () => {
    leagues &&
      leagues.forEach((tournament, index) => {
        tournament.node_groups[0].node_groups[0].nodes.forEach((node) => {
          if (node.has_started && !node.is_completed) {
            setLiveGames((prevState) => [...prevState, node]);
          }
          //  else if (node.has_started && node.is_completed) {
          //   setLastGames((prevState) => [...prevState, node]);
          // }
        });
      });
  };

  // const getActiveGame = () => {
  //   if (liveGames.length !== 0) {
  //     setActiveGame(
  //       liveGames.reduce((previousValue, currentValue, index) => {
  //         return previousValue.actual_time < currentValue.actual_time
  //           ? previousValue
  //           : currentValue;
  //       })
  //     );
  // } else if (liveGames.length === 0 && lastGames.length !== 0) {
  //   setActiveGame(
  //     lastGames.reduce((previousValue, currentValue, index) => {
  //       return previousValue.actual_time < currentValue.actual_time
  //         ? previousValue
  //         : currentValue;
  //     })
  //   );
  //   }
  // };

  useEffect(() => {
    getGamesByCategory();
    // getActiveGame();
  }, []);
  if (activeGame)
    return (
      <Wrapper>
        <div className='bg_container'>
          <SeriesDetailsStyles>
            <div className='series_details_header'>
              <div className='header_team team_left'>
                {/* <Image isTeam id={activeGame.team_id_1}></Image> */}
              </div>
              <div className='header_center_details'></div>
              <div className='header_team team_right'>
                {/* <Image isTeam id={activeGame.team_id_2}></Image> */}
              </div>
            </div>
            <div className='series_details_game_selector'>
              <div className='game_option selected'></div>
              <div className='game_option'></div>
            </div>
            <div className='series_details_details_body'>
              <div className='game_details_container'>
                <div className='game_details_body'></div>
              </div>
            </div>
            <div className='series_details_footer'></div>
          </SeriesDetailsStyles>
        </div>
        <div className='fade_container'>
          <div className='fade_overlay_bottom'></div>
        </div>
      </Wrapper>
    );
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
    }
  }
  .series_details_game_selector {
    width: 100%;
    height: 30px;
    margin-bottom: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .selected {
      background: linear-gradient(145deg, #161618 0%, #222739 0%, #2a314a 100%);
    }
    .game_option {
      flex-grow: 1;
    flex-basis: 0;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #0b0b0c;
    transition-property: background-color,color;
    transition-timing-function: ease-in-out;
    transition-duration: .1s;
}
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
    background-color: rgba(0,0,0,.5);
    padding: 30px;
    .game_details_body {
      width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    background: cyan;
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
