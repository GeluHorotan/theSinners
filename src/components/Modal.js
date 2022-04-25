import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { createPortal } from 'react-dom';

import { primary, secondary } from '../Utility/Colors';

// icons

import * as GiIcons from 'react-icons/gi';

// Test Logos

// 869095183;

import First from '../img/1.svg';

const Modal = ({ nickname, src, cardColor, name, SinnersLogo, player_id }) => {
  const splittedName = name.split(' ');

  const [playerData, setPlayerData] = useState();

  const getPlayerData = async () => {
    const res = await fetch(
      `https://api.opendota.com/api/players/${player_id}/recentMatches`
    );

    const json = await res.json();

    setPlayerData(json);
  };

  useEffect(() => {
    getPlayerData();
  }, []);

  const [heroData, setHeroData] = useState();

  const getHeroData = async () => {
    const res = await fetch(`https://api.opendota.com/api/heroStats`);

    const json = await res.json();

    setHeroData(json);
  };

  useEffect(() => {
    getHeroData();
  }, []);

  // console.log('😂😂😂', heroData[122]);

  // Mapping Variables

  console.log(playerData);

  const getKda = playerData.map((match, index) => (
    <p>
      <GiIcons.GiDrippingSword />
      {match.kills}/{match.deaths}/{match.assists}
    </p>
  ));

  const getMatchID = playerData.map((match, index) => (
    <p> {match.match_id} </p>
  ));
  const getHeroID = playerData.map((match, index) => {
    return match.hero_id;
  });
  const getIMG = getHeroID.map((id, index) => {
    return (
      <img src={`https://api.opendota.com${heroData[id - 2].img}`} alt='test' />
    );
  });

  const getGPM = playerData.map((match, index) => (
    <p>
      {' '}
      <GiIcons.GiGoldBar /> {match.gold_per_min}
    </p>
  ));
  const getXPM = playerData.map((match, index) => (
    <p>
      <GiIcons.GiProgression /> {match.xp_per_min}
    </p>
  ));
  const getLH = playerData.map((match, index) => (
    <p>
      {' '}
      <GiIcons.GiFrankensteinCreature /> {match.last_hits}
    </p>
  ));
  const getDuration = playerData.map((match, index) => (
    <p>
      <GiIcons.GiClockwork /> {match.duration}
    </p>
  ));
  const getHeroDMG = playerData.map((match, index) => (
    <p>
      <GiIcons.GiDrippingSword /> {match.hero_damage}
    </p>
  ));

  const getTowerDMG = playerData.map((match, index) => (
    <p>
      <GiIcons.GiHeartTower /> {match.tower_damage}
    </p>
  ));
  const getResult = playerData.map((match, index) => (
    <p>
      {match.radiant_win ? (
        <GiIcons.GiHillConquest />
      ) : (
        <GiIcons.GiCornerExplosion />
      )}
    </p>
  ));

  return createPortal(
    <StyledModal>
      <div className='modal-background'>
        <div className='modal-container'>
          <div className='top-container' id={cardColor}>
            {' '}
            <img className='playerImg' src={src} alt='' />{' '}
            <img className='sinnersLogo' src={First} alt='' />
            <h1 className='team-name'>
              THE <br /> SINNERS
            </h1>
          </div>
          <div className='header'>
            <h3 className='name'>
              {/* <img src={`https://api.opendota.com${heroData[0].img}`} alt='' />{' '} */}
              {splittedName[0]} "{nickname}" {splittedName[1]}
            </h3>
          </div>
          <div className='body'>
            <div className='recent-games'>
              <div className='match-id'>
                <h6>Match ID</h6>
                {getMatchID && getMatchID}
              </div>
              <div className='hero-id'>
                <h6>Hero ID</h6>
                {getIMG}
              </div>
              <div className='match-result'>{getResult && getResult}</div>
              <div className='player-kda'>
                {' '}
                <h6>KDA</h6>
                {getKda && getKda}
              </div>
              <div className='player-gpm'>
                {' '}
                <h6>GPM</h6>
                {getGPM && getGPM}
              </div>
              <div className='player-xpm'>
                {' '}
                <h6>XPM</h6>
                {getXPM && getXPM}
              </div>
              <div className='player-dmg'>
                {' '}
                <h6>Hero Damage</h6>
                {getHeroDMG && getHeroDMG}
              </div>
              <div className='tower-dmg'>
                {' '}
                <h6>Building Damage</h6>
                {getTowerDMG && getTowerDMG}
              </div>
              <div className='player-lh'>
                <h6>Last Hits</h6>
                {getLH && getLH}
              </div>
              <div className='game-duration'>
                <h6>Game Duration</h6>
                {getDuration && getDuration}
              </div>
            </div>
          </div>
          <div className='footer'></div>
        </div>
      </div>
    </StyledModal>,
    document.getElementById('portal')
  );
};

const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: 0 auto;
  min-height: 90%;
  color: ${primary};
  display: flex;
  z-index: 11;
  position: fixed;
  top: 0;
  align-items: center;
  overflow: scroll;
  justify-content: center;

  .modal-background {
    width: 100%;
    height: 100vh;

    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
      background: ${secondary};
      overflow: scroll;
      width: 90%;
      min-height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      justify-content: center;

      .top-container {
        width: 100%;
        height: auto;

        display: flex;
        align-items: flex-end;

        justify-content: center;

        .playerImg {
          z-index: 1;
        }

        .sinnersLogo {
          justify-content: center;
          height: 50%;
        }
        h1.team-name {
          font-size: 10rem;
          justify-content: center;

          text-align-last: start;
          line-height: 10rem;
        }
      }
    }
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    .name {
      letter-spacing: 2px;
    }
  }
  .body {
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding: 2rem;
    color: black;
    .match-data {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5rem;
      margin: 1rem 0;
    }
    .recent-games {
      display: flex;
      gap: 5rem;
      justify-content: space-between;
      min-height: 100%;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .match-id,
    .hero-id,
    .match-result,
    .player-kda,
    .player-gpm,
    .player-xpm,
    .player-dmg,
    .tower-dmg,
    .player-lh,
    .game-duration {
      gap: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: auto;
    }

    .hero-id {
      img {
        width: 4rem;
      }
    }
  }
`;

export default Modal;
