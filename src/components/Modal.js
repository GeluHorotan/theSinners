/* eslint-disable array-callback-return */
import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
// import ReactTooltip from 'react-tooltip';

import { createPortal } from 'react-dom';

import { primary, secondary } from '../Utility/Colors';

// icons

import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as IoIcons from 'react-icons/io';

import First from '../img/1.svg';
import str from '../img/Modal/strength.webp';
import agi from '../img/Modal/agility.webp';
import int from '../img/Modal/int.webp';

const Modal = ({ nickname, src, cardColor, name, SinnersLogo, player_id }) => {
  const splittedName = name.split(' ');
  // LAST 20 PLAYER GAMES
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //
  const [itemData, setItemData] = useState();
  const getItemData = async () => {
    const res = await fetch(`  https://api.opendota.com/api/constants/items`);
    const json = await res.json();
    setItemData(json);
  };

  useEffect(() => {
    getItemData();
  }, []);

  // ----------------------- HERO DATA STATS ( IMAGES AND SKILLS AND ATTR ROLES ETC)
  const [heroData, setHeroData] = useState();
  const getHeroData = async () => {
    const res = await fetch(`https://api.opendota.com/api/heroStats`);
    const json = await res.json();
    setHeroData(json);
  };

  useEffect(() => {
    getHeroData();
  }, []);

  let ids = [];
  const gettingIds = () => {
    if (playerData) {
      ids = [];
      playerData.map((game, index) => ids.push(game.match_id));
    }
  };
  gettingIds();

  //  ----------------------- MATCH STATS
  const [matchStats, setMatchStats] = useState([]);
  let games = [];
  const getMatchesData = () => {
    ids.forEach(async (id, index) => {
      if (ids.length !== 0) {
        const res = await fetch(`https://api.opendota.com/api/matches/${id}`);
        const json = await res.json();
        games.push(json);
        setMatchStats([...matchStats, games]);
      }
    });
  };

  useEffect(() => {
    getMatchesData();
  }, []);

  // ----------------------- TOTAL GAMES AND LOSES DATA
  // const [gameData, setGameData] = useState();
  // const [gameTotal, setGameTotal] = useState();

  // const getGameData = async () => {
  //   const res = await fetch(
  //     `https://api.opendota.com/api/players/${player_id}/wl`
  //   );

  //   const json = await res.json();

  //   setGameData(json);
  //   setGameTotal(json.win + json.lose);
  // };

  // useEffect(() => {
  //   getGameData();
  // }, []);

  // ----------------------- STEAM PROFILE DATA
  // const [steamData, setSteamData] = useState();
  // const getSteamData = async () => {
  //   const res = await fetch(
  //     `https://api.opendota.com/api/players/${player_id}`
  //   );

  //   const json = await res.json();

  //   setSteamData(json);
  // };

  // useEffect(() => {
  //   getSteamData();
  // }, []);

  const [heroAbilities, setHeroAbilities] = useState();
  let [property, setProperty] = useState();
  let [array, setArray] = useState();

  const getHeroAbilities = async () => {
    const res = await fetch(`https://api.opendota.com/api/constants/abilities`);

    const json = await res.json();

    setHeroAbilities(json);
    setProperty(json);
    setArray(json);
  };

  useEffect(() => {
    getHeroAbilities();
  }, []);

  if (heroAbilities) {
    property = Object.getOwnPropertyDescriptors(heroAbilities);
  }
  if (heroAbilities) {
    array = Object.entries(property);
  }

  const errorImgHandler = (ev) => {
    ev.target.style.display = 'none';
  };

  return createPortal(
    <StyledModal>
      <div className='modal-background'>
        <div className='modal-container'>
          <div className='top-container'>
            {' '}
            <img className='playerImg' src={src} alt='' />{' '}
            <img className='sinnersLogo' src={First} alt='' />
            <h1 className='team-name'>THE SINNERS</h1>
          </div>
          <div className='header'>
            <h3 className='name'>
              {splittedName[0]} "{nickname}" {splittedName[1]}
            </h3>
          </div>

          <div className='body'>
            {/* {gameData && steamData && (
        <StyledSteamDiv>
        <div className='first-container'>
        <div className='img-container'>
        <img src={steamData.profile.avatarfull} alt='' />
        </div>
        
        <div className='profile-text'>
        <h4 className='nickname'>
        {steamData.profile.personaname}
        </h4>
        <h4>
        Solo competitive rank:{' '}
        {steamData.solo_competitive_rank === null
          ? 'Uncalibrated'
          : steamData.solo_competitive_rank}
          </h4>
          <h4>
          MMR:{' '}
          {steamData.mmr_estimate.estimate === null
            ? 'Uncalibrated'
            : steamData.mmr_estimate.estimate}
            </h4>
            </div>
            </div>
            <div className='second-container'>
            <h4>Total: {gameTotal && gameTotal}</h4>
            <h5>
            LOSS {gameData.lose} - {gameData.win} WINS
            </h5>{' '}
            <h5>
            Winrate {((gameData.win * 100) / gameTotal).toFixed('2')} %
            </h5>{' '}
            </div>
            </StyledSteamDiv>
          )} */}
            <StyledTable>
              <div className='table-box'></div>
              <div className='table-row table-head'>
                <div className='table-cell first-cell'>
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
                  <h6>
                    GPM <br /> XPM
                  </h6>
                </div>

                <div className='table-cell'>
                  <h6>DAMAGE</h6>
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
                  <Fragment key={index}>
                    <div className='table-row'>
                      {heroData &&
                        heroData.map((hero, index) => {
                          const replaced = hero.name.replace(
                            'npc_dota_hero_',
                            ''
                          );

                          if (hero.id === match.hero_id) {
                            return (
                              <Fragment key={index}>
                                <div className='table-cell first-cell'>
                                  <img
                                    key={index}
                                    src={`https://api.opendota.com${hero.img}`}
                                    alt=''
                                  />

                                  <div className='horizontal-aligner'>
                                    <h6>{hero.localized_name}</h6>

                                    {hero.attack_type === 'Melee' ? (
                                      <GiIcons.GiCrossedSwords
                                        style={{ color: '#ff6564' }}
                                      />
                                    ) : (
                                      <GiIcons.GiPocketBow
                                        style={{ color: '#b26abf' }}
                                      />
                                    )}
                                  </div>

                                  <div className='hero-skills'>
                                    {array &&
                                      array.map((hero, index) => {
                                        if (hero[0].includes(`${replaced}_`)) {
                                          if (hero[1].value.img) {
                                            return (
                                              <img
                                                key={index}
                                                data-tip={`<h5>${hero[1].value.dname}</h5>
                                    <h6>${hero[1].value.behavior}</h6>
                                    
                                    <p>Piercing though spell imunity: ${hero[1].value.bkbpierce}</p>
                                    <p>Cooldown: ${hero[1].value.cd}</p>
                                    <p>DMG: ${hero[1].value.dmg}</p>
                                    <p>Damage Type: ${hero[1].value.dmg_type}</p>
                                    <p>${hero[1].value.desc}</p>`}
                                                data-class='TESTER'
                                                data-html={true}
                                                data-multiline={true}
                                                data-place='top'
                                                data-effect='solid'
                                                onError={errorImgHandler}
                                                src={`https://api.opendota.com${hero[1].value.img}`}
                                                alt=''
                                              />
                                            );
                                          } else {
                                            return null;
                                          }
                                        }
                                      })}
                                  </div>

                                  {/* <p>
                              Primary Attribute:{' '}
                              {hero.primary_attr.toUpperCase()}
                            </p> */}
                                </div>
                                {/* <ReactTooltip /> */}
                                <div className='table-cell atr'>
                                  <div className='attributes'>
                                    {hero.roles.map((role, index) => {
                                      switch (role) {
                                        case 'Carry':
                                          return (
                                            <GiIcons.GiPointySword
                                              style={{
                                                color: '#ff6564',
                                              }}
                                              key={index}
                                            />
                                          );
                                        case 'Nuker':
                                          return (
                                            <GiIcons.GiMineExplosion
                                              style={{
                                                color: '#F0D800',
                                              }}
                                              key={index}
                                            />
                                          );
                                        case 'Initiator':
                                          return (
                                            <GoIcons.GoRocket
                                              style={{
                                                color: '#FF6600',
                                              }}
                                              key={index}
                                            />
                                          );
                                        case 'Durable':
                                          return (
                                            <GiIcons.GiHealthPotion
                                              style={{
                                                color: '#D00000',
                                              }}
                                              key={index}
                                            />
                                          );
                                        case 'Jungler':
                                          return (
                                            <GiIcons.GiTreeRoots
                                              style={{
                                                color: '#00CD0D',
                                              }}
                                              key={index}
                                            />
                                          );
                                        case 'Support':
                                          return (
                                            <GoIcons.GoFlame
                                              style={{
                                                color: '#0066FF',
                                              }}
                                              key={index}
                                            />
                                          );
                                        case 'Pusher':
                                          return (
                                            <GiIcons.GiTowerFall
                                              style={{
                                                color: '#8D3D00',
                                              }}
                                              key={index}
                                            />
                                          );
                                        case 'Disabler':
                                          return (
                                            <GiIcons.GiSilenced
                                              style={{
                                                color: '#b26abf',
                                              }}
                                              key={index}
                                            />
                                          );

                                        case 'Escape':
                                          return (
                                            <GiIcons.GiRunningNinja
                                              style={{
                                                color: '#960084',
                                              }}
                                              key={index}
                                            />
                                          );
                                        default:
                                          return <p key={index}>NULL</p>;
                                      }
                                    })}
                                  </div>

                                  {/* <p>AGI Gain: {hero.agi_gain}</p>
                                              <p>STR Gain: {hero.str_gain}</p>
                                            <p>INT Gain: {hero.int_gain}</p> */}

                                  <div className='horizontal-aligner'>
                                    {' '}
                                    <GiIcons.GiArrowsShield
                                      style={{ color: '#d8c3b4' }}
                                    />
                                    <p>{hero.base_armor}</p>
                                  </div>
                                  <div
                                    className='horizontal-aligner'
                                    style={{ justifyContent: 'space-evenly' }}
                                  >
                                    <div className='vertical-aligner'>
                                      <img className='attr' src={str} alt='' />{' '}
                                      <p style={{ color: '#FF0000' }}>
                                        {hero.base_str}
                                      </p>
                                    </div>
                                    <div className='vertical-aligner'>
                                      <img className='attr' src={agi} alt='' />{' '}
                                      <p style={{ color: '#7CFC00' }}>
                                        {hero.base_agi}
                                      </p>
                                    </div>
                                    <div className='vertical-aligner'>
                                      <img className='attr' src={int} alt='' />{' '}
                                      <p style={{ color: '#0096FF' }}>
                                        {hero.base_int}
                                      </p>
                                    </div>
                                  </div>
                                  {/* <p>Attack range: {hero.attack_range}</p>
                                            <p>Attack rate: {hero.attack_rate}</p>
                                            <p>Projectile speed: {hero.projectile_speed}</p>
                                          <p>Movement speed: {hero.move_speed}</p> */}
                                </div>
                              </Fragment>
                            );
                          }
                        })}

                      <div className='table-cell'>
                        {(match.radiant_win && match.isRadiant) ||
                        (match.radiant_win === false && match.isRadiant) ? (
                          <h6
                            style={{
                              color: '#6da54a',
                              textShadow: '1px 1px 5px #6da54a',
                            }}
                          >
                            WON
                          </h6>
                        ) : (
                          <h6
                            style={{
                              color: '#bc3e36',
                              textShadow: '1px 1px 5px #bc3e36',
                            }}
                          >
                            LOST
                          </h6>
                        )}
                      </div>
                      <div className='table-cell'>
                        <div className='horizontal-aligner'>
                          <GiIcons.GiBattleGear style={{ color: '#ff6564' }} />
                          <h6
                            style={{
                              color: '#00CD0D',
                              textShadow: '1px 1px 5px #00CD0D',
                            }}
                          >
                            {match.kills}
                          </h6>
                          /{' '}
                          <h6
                            style={{
                              color: '#ff6564',
                              textShadow: '1px 1px 5px #ff6564',
                            }}
                          >
                            {match.deaths}
                          </h6>
                          /
                          <h6
                            style={{
                              color: '#0066FF',
                              textShadow: '1px 1px 5px #0066FF',
                            }}
                          >
                            {match.assists}
                          </h6>
                        </div>
                      </div>
                      <div className='table-cell'>
                        <div className='horizontal-aligner'>
                          <GiIcons.GiGoldNuggets style={{ color: '#f0c137' }} />
                          <h6
                            style={{
                              color: '#f0c137',
                              textShadow: '1px 1px 5px #f0c137',
                            }}
                          >
                            {match.gold_per_min}
                          </h6>
                        </div>
                        <div className='horizontal-aligner'>
                          <IoIcons.IoIosTrendingUp
                            style={{ color: '#960084' }}
                          />
                          <h6
                            style={{
                              color: '#960084',
                              textShadow: '1px 1px 5px #960084',
                            }}
                          >
                            {match.xp_per_min}
                          </h6>
                        </div>
                      </div>

                      <div className='table-cell'>
                        <div className='horizontal-aligner'>
                          <GiIcons.GiDrippingSword
                            style={{
                              color: '#ff6564',
                            }}
                          />
                          <h6
                            style={{
                              color: '#ff6564',
                              textShadow: '1px 1px 5px #ff6564',
                            }}
                          >
                            {match.hero_damage}
                          </h6>
                        </div>
                        <div className='horizontal-aligner'>
                          <GiIcons.GiHeartTower
                            style={{
                              color: '#8D3D00',
                            }}
                          />
                          <h6
                            style={{
                              color: '#8D3D00',
                              textShadow: '1px 1px 5px #8D3D00',
                            }}
                          >
                            {match.tower_damage}
                          </h6>
                        </div>
                      </div>
                      <div className='table-cell'>
                        <div className='horizontal-aligner'>
                          <GiIcons.GiMonsterGrasp
                            style={{
                              color: '#b26abf',
                            }}
                          />
                          <h6
                            style={{
                              color: '#b26abf',
                              textShadow: '1px 1px 5px #b26abf',
                            }}
                          >
                            {match.last_hits}
                          </h6>
                        </div>
                      </div>
                      <div className='table-cell last-cell'>
                        <div className='horizontal-aligner'>
                          <GiIcons.GiSun
                            style={{
                              color: '#F0D800',
                            }}
                          />
                          <h6>{(match.duration / 60).toFixed(0)}</h6>
                        </div>
                      </div>
                    </div>
                    <div className='table-row bottom-infos'></div>
                  </Fragment>
                ))}
            </StyledTable>
          </div>
          <div className='footer'></div>
        </div>
      </div>
    </StyledModal>,
    document.getElementById('portal')
  );
};

const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.8);

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
    height: 95%;

    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
      background: ${primary};

      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: auto;
      overflow-x: hidden;
      justify-content: center;

      .top-container {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex: 1 1 0px;

        position: relative;
        align-items: flex-end;
        background-image: linear-gradient(to right, #ba5370, #d04ed6);
        background-image: linear-gradient(120deg, #f093fb -0%, #f5576c 100%);

        justify-content: center;

        .playerImg {
          z-index: 1;
        }

        .sinnersLogo {
          justify-content: center;
          height: 60%;
          position: absolute;
          right: 14%;
          top: 20%;
          opacity: 0.3;
        }
        h1.team-name {
          font-size: 20rem;
          justify-content: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align-last: start;
          line-height: 20rem;
          letter-spacing: 2rem;
          opacity: 0.3;
          color: ${primary};
        }
      }
    }
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    color: ${secondary};
    .name {
      letter-spacing: 2px;
    }
  }
  .body {
    width: 100%;
    height: 20px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

const StyledTable = styled.div`
  .table-box {
    margin: 50px auto;
  }
  .table-row {
    display: table;
    width: 100%;
    margin: 5px auto;
    background: #29293e;

    padding: 0.5rem 0;
    color: ${secondary};

    box-shadow: 0 1px 4px 0 rgba(0, 0, 50, 0.3);

    &:nth-child(odd) {
      background: #201d2b;
    }
  }

  .table-cell {
    display: table-cell;
    width: 12%;
    text-align: center;
    padding: 4px 0;
    border-right: 1px solid ${secondary};
    vertical-align: middle;

    .hero-skills {
      display: flex;

      flex-wrap: wrap;
      justify-content: center;

      padding: 0rem 1rem;
      gap: 1rem;

      img {
        box-shadow: 3px 3px 10px #4b4b4b;
        width: 2rem;
        flex: 0 0 calc(25% - 20px);
      }
    }
  }

  .aligner {
    display: flex;

    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .horizontal-aligner {
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .vertical-aligner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .role {
    text-align: center;
    background: red;
    width: fit-content;
  }

  .attributes {
    display: flex;

    flex-wrap: wrap;
    justify-content: center;
    margin: 0 1rem;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
  }

  p {
    font-weight: 600;
  }
  svg {
    font-size: 1.5rem;
  }

  img {
    width: 10rem;
  }

  .attr {
    width: 2rem;
    flex: 0 0 calc(25% - 20px);
  }

  .table-head {
    background-image: linear-gradient(
      120deg,
      #f093fb 0%,
      #f5576c 100%
    ) !important;
    box-shadow: none;
    color: ${secondary};
    font-weight: 600;
  }
  .table-head .table-cell {
    border-right: none;
  }

  .last-cell {
    border-right: none;
  }
`;

const StyledSteamDiv = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  color: ${secondary};

  justify-content: center;
  .first-container {
    display: flex;

    .profile-text {
      height: 100%;
      display: flex;
      justify-content: end;
      flex-direction: column;
      padding: 0 2rem;
    }
  }
  .second-container {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
    padding: 0.5rem 0;
  }
`;

export default Modal;
