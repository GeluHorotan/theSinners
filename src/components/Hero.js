import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { secondary, accent } from '../Utility/Colors';
import { motion } from 'framer-motion';

const Hero = () => {
  const location = useLocation();
  const [heroProps, setHeroProps] = useState();
  const getProps = () => {
    setHeroProps(location.state);
  };

  useEffect(() => {
    getProps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [abilities, setAbilities] = useState();
  const [roleLevels, setRoleLevels] = useState();
  const [talents, setTalents] = useState();
  const [heroData, setHeroData] = useState();
  const getHeroData = async () => {
    const res = await fetch(`/.netlify/functions/hero/?id=${location.state}`);
    const json = await res.json();
    setTalents(json.result.data.heroes[0].talents);
    setRoleLevels(json.result.data.heroes[0].role_levels);
    setAbilities(json.result.data.heroes[0].abilities);
    setHeroData(json.result.data.heroes[0]);
  };
  console.log(heroData);
  useEffect(() => {
    getHeroData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png',
  // value: `${heroData.damage_max} - ${heroData.damage_min}`,

  // icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png',
  // value: `${heroData.attack_time}`,

  // Setting images in variables

  const strength = (
    <img
      className='attrImg'
      src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'
      alt=''
    />
  );
  const agility = (
    <img
      className='attrImg'
      src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'
      alt=''
    />
  );
  const intelligence = (
    <img
      className='attrImg'
      src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'
      alt=''
    />
  );

  const getAttrIcon = (element) => {
    switch (element) {
      case 0:
        return <>{strength}</>;

      case 1:
        return <>{agility}</>;

      case 2:
        return <>{intelligence}</>;

      default:
        return null;
    }
  };

  const getAttrColors = (element) => {
    switch (element) {
      case 0:
        return `linear-gradient(90deg, #622281, #CC3164 70%)`;

      case 1:
        return `linear-gradient(90deg, Darkgreen, #7DFE7D)`;

      case 2:
        return `linear-gradient(90deg, #145B78, Skyblue)`;

      default:
        return null;
    }
  };

  const getAttrIconText = (element) => {
    switch (element) {
      case 0:
        return (
          <>
            {strength}
            <h6>STRENGTH</h6>
          </>
        );

      case 1:
        return (
          <>
            {agility}
            <h6>AGILITY</h6>
          </>
        );
      case 2:
        return (
          <>
            {intelligence}
            <h6>INTELLIGENCE</h6>
          </>
        );
      default:
        return null;
    }
  };

  const processHeroName = (name) => {
    const heroName = name.replace('npc_dota_hero_', '');
    return heroName;
  };

  const processNumberUp = (number) => {
    const fixedNumber = Math.ceil(number * 10) / 10;
    return fixedNumber;
  };

  const processWidthGrow = (role) => {
    let width = 0;
    let i = 0;
    for (i; i < role; i++) {
      width += 33;
    }
    return width;
  };

  const processHeroRoles = () => {
    const rolesArray = [
      'Carry',
      'Support',
      'Nuker',
      'Disabler',
      'Jungler',
      'Durable',
      'Escape',
      'Pusher',
      'Initiator',
    ];
    return rolesArray.map((role, index) => {
      return (
        <div className='roles_single_role'>
          <p>{role}</p>
          <div className='roles_bar_container'>
            <div className='roles_bar_background'></div>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${processWidthGrow(roleLevels[index])}%` }}
              className='roles_bar_fill'
            ></motion.div>
          </div>
        </div>
      );
    });
  };

  let heroStats;
  if (heroData) {
    heroStats = {
      attack: [
        {
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png',
          value: `${heroData.damage_max} - ${heroData.damage_min}`,
        },
        {
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png',
          value: `${heroData.attack_rate.toFixed(2)}`,
        },
        {
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png',
          value: `${processNumberUp(heroData.attack_range)}`,
        },
        {
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png',
          value: `${heroData.projectile_speed}`,
        },
      ],
      defense: [
        {
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png',
          value: `${heroData.armor.toFixed(1)}`,
        },
        {
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png',
          value: `${heroData.magic_resistance}`,
        },
      ],
      mobility: [
        {
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png',
          value: `${heroData.movement_speed}`,
        },
        {
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png',
          value: `${heroData.turn_rate.toFixed(1)}`,
        },
        {
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png',
          value: `${heroData.sight_range_day} - ${heroData.sight_range_night}`,
        },
      ],
    };
  }

  const processStats = (object, title) => {
    if (!object) {
      return;
    }
    return (
      <div className='stats_single_row'>
        <h6 className='stats_stat_title'>{title}</h6>
        {object.map((stat, index) => {
          return (
            <div className='stats_values_section'>
              <img src={`${stat.icon}`} alt='' />
              <p>{stat.value}</p>
            </div>
          );
        })}
      </div>
    );
  };

  if (heroData)
    return (
      <HeroContainer>
        <TopStyles
          style={{
            backgroundImage: `${getAttrColors(heroData.primary_attr)}%`,
          }}
        >
          <div className='heroVerticalBar'>
            {getAttrIcon(heroData.primary_attr)}
            <h5> {heroData.name_loc.toUpperCase()}</h5>
            <h5>{heroData.id}</h5>
            <span className='verticalLine'></span>
          </div>
          <div className='heroDetails'>
            <div className='heroInfo'>
              <div className='attribute'>
                {getAttrIconText(heroData.primary_attr)}
              </div>
              <h1>{heroData.name_loc}</h1>
              <h5>{heroData.npe_desc_loc}</h5>
              <p className='heroLore'>{heroData.hype_loc}</p>
            </div>
            <video autoPlay loop muted>
              <source
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${processHeroName(
                  heroData.name
                )}.webm`}
                type='video/mp4'
              />
            </video>
          </div>
        </TopStyles>
        <DetailsBarStyles>
          <div className='detailsContainer'>
            <div className='attributes_main_container'>
              <div className='attributesHeroPortrait'>
                <img
                  src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${processHeroName(
                    heroData.name
                  )}.png`}
                  alt=''
                />
                <div className='attributes_bar health_color'>
                  <p>{heroData.max_health}</p>

                  <p className='attribute_minor_number'>
                    + {processNumberUp(heroData.health_regen)}
                  </p>
                </div>
                <div className='attributes_bar mana_color'>
                  <p>{heroData.max_mana}</p>
                  <p className='attribute_minor_number'>
                    + {processNumberUp(heroData.mana_regen)}
                  </p>
                </div>
              </div>
              <div className='attributes_all_attributes_container'>
                <div className='attributes_single_attribute'>
                  {strength} <h5>{heroData.str_base}</h5>
                  <p className='attributes_single_attribute_gainer'>
                    + {heroData.str_gain.toFixed(1)}
                  </p>
                </div>
                <div className='attributes_single_attribute'>
                  {agility} <h5>{heroData.agi_base}</h5>
                  <p className='attributes_single_attribute_gainer'>
                    + {heroData.agi_gain.toFixed(1)}
                  </p>
                </div>
                <div className='attributes_single_attribute'>
                  {intelligence} <h5>{heroData.int_base}</h5>
                  <p className='attributes_single_attribute_gainer'>
                    + {heroData.int_gain.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>

            <h5 className='header'>ATTRIBUTES</h5>
          </div>
          <div className='detailsVerticalSeparator'></div>
          <div className='detailsContainer'>
            <div className='roles_main_container'>{processHeroRoles()}</div>
            <h5 className='header'>ROLES</h5>
          </div>
          <div className='detailsVerticalSeparator'></div>
          <div className='detailsContainer'>
            <div className='stats_main_container'>
              {' '}
              <div className='stats_all_stats_container'>
                {processStats(heroStats.attack, 'ATTACK')}
                {processStats(heroStats.defense, 'DEFENSE')}
                {processStats(heroStats.mobility, 'MOBILITY')}
              </div>
            </div>

            <h5 className='header'>STATS</h5>
          </div>
        </DetailsBarStyles>
      </HeroContainer>
    );
};

const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  margin: 0 auto;
  color: ${secondary};
`;

const TopStyles = styled.div`
  display: flex;

  height: 75vh;
  position: relative;
  justify-content: center;

  .heroVerticalBar {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    transform-origin: left;

    transform: rotate(-90deg);
    position: absolute;
    bottom: 10px;
    left: 100px;
    .verticalLine {
      width: 50rem;
      height: 0.2rem;
      background: grey;
    }
  }

  .heroDetails {
    display: flex;

    .heroInfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 20rem;
    }
    .attribute {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .heroLore {
      width: 50%;
      padding: 2rem 0;
    }
    video {
      width: 70rem;
      right: -7rem;
      z-index: 1;
      position: absolute;
    }
  }
`;

const DetailsBarStyles = styled.div`
  width: 100%;
  height: 15rem;
  padding: 1rem 3rem;

  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background: linear-gradient(80deg, #252728 0%, #101415 100%);
  border-top: 2px solid #282828;
  border-bottom: 2px solid #2c2e2e;
  box-shadow: 0px 0px 8px #000;

  .detailsContainer {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .header {
      color: #969696;

      font-size: 1.3rem;
      letter-spacing: 2px;
      text-shadow: 1px 1px 2px #000;
    }
  }
  .attributes_main_container {
    display: flex;
    gap: 3rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 2rem;
    }
  }

  .attributesHeroPortrait {
    display: flex;
    flex-direction: column;
    img {
      width: 10rem;
    }
    .attributes_bar {
      width: 100%;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      text-shadow: 1px 1px 2px #000;

      .attribute_minor_number {
        position: absolute;
        right: 0.3rem;
        color: ${accent};
        font-size: 0.75rem;
        font-weight: 400;
        text-shadow: none;
      }
    }
  }

  .attributes_all_attributes_container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .attributes_single_attribute {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;
      .attributes_single_attribute_gainer {
        color: #999;

        text-shadow: 1px 1px 2px #000;
      }
    }
  }
  .detailsVerticalSeparator {
    width: 1px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    &::after {
      content: '';
      width: 100%;
      height: 80%;
      background-color: #4f4f4f;
    }
  }

  .roles_main_container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 1rem;
    width: 100%;
    .roles_single_role {
      height: 2rem;
      min-height: 0;

      .roles_bar_container {
        width: 100%;
        height: 6px;
        max-height: 6px;
        flex-grow: 1;
        margin-top: 4px;
        position: relative;
        .roles_bar_background {
          width: 100%;
          height: 100%;
          background-color: #4c4c4c;
          position: absolute;
          left: 0;
          top: 0;
        }
        .roles_bar_fill {
          height: 100%;
          width: 0%;
          background-color: #fff;
          box-shadow: 0px 0px 10px #427ed1, 0px 0px 10px #427ed1;
          position: absolute;
          left: 0;
          top: 0;
          transition-property: width;
          transition-duration: 5s;
          transition-delay: 2s;
        }
      }
    }
  }
  .stats_main_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .stats_all_stats_container {
      display: flex;
      gap: 5rem;

      .stats_single_row {
        display: flex;
        flex-direction: column;
        .stats_stat_title {
          align-self: center;
        }
        .stats_values_section {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;

          margin-top: 0.5rem;
          gap: 1rem;
          img {
            width: 1.5rem;
          }
        }
      }
    }
  }
`;

export default Hero;
