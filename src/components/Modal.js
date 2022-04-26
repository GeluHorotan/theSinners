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
              {splittedName[0]} "{nickname}" {splittedName[1]}
            </h3>
          </div>
          <div className='body'>
            <div className='table-box'></div>
            <div className='table-row table-head' id={cardColor}>
              <div className='table-cell first-cell'>
                <h6>GAME ID</h6>
              </div>
              <div className='table-cell'>
                <h6>HERO</h6>
              </div>

              <div className='table-cell'>
                <h6>ATTRIBUTES</h6>
              </div>
              <div className='table-cell'>
                <h6>RESULT</h6>
              </div>
              <div className='table-cell'>
                <h6>KDA</h6>
              </div>
              <div className='table-cell'>
                <h6>GPM</h6>
              </div>
              <div className='table-cell'>
                <h6>XPM</h6>
              </div>
              <div className='table-cell'>
                <h6>HERO DAMAGE</h6>
              </div>
              <div className='table-cell'>
                <h6>BUILDING DAMAGE</h6>
              </div>
              <div className='table-cell'>
                <h6>LAST HITS</h6>
              </div>
              <div className='table-cell'>
                <h6>GAME DURATION</h6>
              </div>
            </div>
            {playerData &&
              playerData.map((match, index) => (
                <div className='table-row'>
                  <div className='table-cell first-cell'>{match.match_id}</div>

                  {heroData &&
                    heroData.map((hero, index) => {
                      if (hero.id === match.hero_id) {
                        return (
                          <>
                            <div className='table-cell'>
                              <img
                                key={index}
                                src={`https://api.opendota.com${hero.img}`}
                                alt=''
                              />
                            </div>
                            <div className='table-cell atr'>
                              <p>{hero.primary_attr.toUpperCase()}</p>
                              <p>{hero.attack_type}</p>
                              <p> {hero.roles[0]}</p>
                            </div>
                          </>
                        );
                      }
                    })}

                  <div className='table-cell'>
                    {match.radiant_win ? <h6>WON</h6> : <h6>LOST</h6>}
                  </div>
                  <div className='table-cell'>
                    <GiIcons.GiDrippingSword /> {match.kills}/{match.deaths}/
                    {match.assists}
                  </div>
                  <div className='table-cell'>
                    <GiIcons.GiGoldBar /> {match.gold_per_min}
                  </div>
                  <div className='table-cell'>
                    <GiIcons.GiProgression /> {match.xp_per_min}
                  </div>
                  <div className='table-cell'>
                    <GiIcons.GiDrippingSword /> {match.hero_damage}
                  </div>
                  <div className='table-cell'>
                    <GiIcons.GiHeartTower /> {match.tower_damage}
                  </div>
                  <div className='table-cell'>
                    <GiIcons.GiFrankensteinCreature /> {match.last_hits}
                  </div>
                  <div className='table-cell last-cell'>
                    <GiIcons.GiClockwork /> {match.duration}
                  </div>
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
  height: 100vh;
  color: ${primary};
  display: flex;
  z-index: 11;
  position: fixed;
  top: 0;
  align-items: center;

  justify-content: center;

  .modal-background {
    width: 100%;
    height: 100%;

    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
      background: ${secondary};
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: scroll;
      justify-content: center;

      .top-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;

        justify-content: center;

        .playerImg {
          z-index: 1;
        }

        .sinnersLogo {
          justify-content: center;
          height: 40%;
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
    height: 20rem;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    color: black;
    img {
      width: 5rem;
    }

    .table-box {
      margin: 50px auto;
    }
    .table-row {
      display: table;
      width: 100%;
      margin: 5px auto;
      background: transparent;
      padding: 0.5rem 0;
      color: #555;

      box-shadow: 0 1px 4px 0 rgba(0, 0, 50, 0.3);

      &:nth-child(odd) {
        background: #dfdbd4;
      }
    }

    .table-cell {
      display: table-cell;
      width: 5%;
      text-align: center;
      padding: 4px 0;
      border-right: 1px solid #d6d4d4;
      vertical-align: middle;
    }

    .table-head {
      background: #8665f7;
      box-shadow: none;
      color: #fff;
      font-weight: 600;
    }
    .table-head .table-cell {
      border-right: none;
    }

    .last-cell {
      border-right: none;
    }

    .first-cell {
      text-align: left;
      padding-left: 10px;
    }
  }
`;

export default Modal;
