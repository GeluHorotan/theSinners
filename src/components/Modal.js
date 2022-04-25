import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { createPortal } from 'react-dom';

import { primary, secondary } from '../Utility/Colors';

// Test Logos

// 869095183;

import First from '../img/1.svg';

const Modal = ({ nickname, src, cardColor, name, SinnersLogo, player_id }) => {
  const splittedName = name.split(' ');
  console.log(player_id);

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
              {' '}
              {splittedName[0]} "{nickname}" {splittedName[1]}
            </h3>
          </div>
          <div className='body'>
            {playerData &&
              playerData.map((match, index) => (
                <div className='match-data'>
                  <p>ID: {match.match_id} </p>
                  <p>Hero ID: {match.hero_id} </p>
                  <p>
                    KDA: {match.kills}/{match.deaths}/{match.assists}
                  </p>

                  <p>GPM: {match.gold_per_min}</p>
                  <p>XPM: {match.xp_per_min}</p>
                  <p>Last hits: {match.last_hits}</p>
                  <p>Duration: {match.duration}</p>
                </div>
              ))}
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
  height: 100%;
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

      width: 90%;
      min-height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      justify-content: center;

      .top-container {
        width: 100%;
        height: 100vh;
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
  }
`;

export default Modal;
