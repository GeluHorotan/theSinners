import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { secondary, accent } from '../Utility/Colors';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// Functions
import { processHeroName } from '../Functions/for Hero Component/processHeroName';
import { leftSlide, rightSlide } from './animation';
import DisplayAbilityInfo from './DisplayAbilityInfo';
import HeroPagination from './HeroPagination';
import Tooltip from './Tooltip';
import TalentTree from './TalentTree';
import { escapeText } from '../Functions/for Hero Component/escapeText';
import { getAttackType } from '../Functions/for Hero Component/getAttackType';
import Navigator from './Navigator';

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
  const [lore, setLore] = useState(false);
  const [isUpgrade, setIsUpgrade] = useState(false);
  const [activeUpgrade, setActiveUpgrade] = useState();
  const [activeAbility, setActiveAbility] = useState();
  const [upgradeAbilities, setUpgradeAbilities] = useState();
  const [abilities, setAbilities] = useState();
  const [roleLevels, setRoleLevels] = useState();
  const [talents, setTalents] = useState();
  const [heroData, setHeroData] = useState();
  const topSkill = React.useRef(null);
  const getHeroData = async () => {
    const res = await fetch(
      `/.netlify/functions/hero/?id=${location.state.currentHero}`
    );
    const json = await res.json();

    setTalents(json.result.data.heroes[0].talents);
    setRoleLevels(json.result.data.heroes[0].role_levels);
    setAbilities(
      json.result.data.heroes[0].abilities.filter(
        (upgrade) =>
          upgrade.ability_is_granted_by_shard !== true &&
          upgrade.ability_is_granted_by_scepter !== true
      )
    );
    setHeroData(json.result.data.heroes[0]);
    setUpgradeAbilities(
      json.result.data.heroes[0].abilities.filter(
        (upgrade) =>
          upgrade.ability_is_granted_by_scepter ||
          upgrade.ability_has_scepter ||
          upgrade.ability_is_granted_by_shard ||
          upgrade.ability_has_shard
      )
    );
    setActiveAbility(json.result.data.heroes[0].abilities[0]);
  };

  useEffect(() => {
    getHeroData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Setting images in variables
  const complexityDiamonds = [1, 2, 3];
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
        <div className='roles_single_role' key={index}>
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
            <div className='stats_values_section' key={index}>
              <img src={`${stat.icon}`} alt='' />
              <p>{stat.value}</p>
            </div>
          );
        })}
      </div>
    );
  };

  const abilityAgsChecker = (upgrade) => {
    if (upgrade.ability_has_shard || upgrade.ability_is_granted_by_shard) {
      return (
        <div
          className='ability_upgrade'
          style={{
            background: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/aghs_shard.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      );
    }

    if (upgrade.ability_has_scepter || upgrade.ability_is_granted_by_scepter) {
      return (
        <div
          className='ability_upgrade'
          style={{
            background: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/aghs_scepter.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      );
    }
  };

  const processAbility = (spell) => {
    if (spell) {
      return <h1>{spell.name}</h1>;
    }
  };

  const processAbilityUpgrade = (element) => {
    switch (true) {
      case element.name == 'morphling_adaptive_strike_str':
        return null;
      case element.shard_loc.length > 0:
        return (
          <div
            className={`ability_details_ability_square ${
              activeUpgrade && activeUpgrade.name === element.name
                ? 'ability_details_active_ability'
                : 'ability_details_inactive_ability'
            }`}
            style={{
              background: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${element.name}.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => {
              setIsUpgrade(true);
              setActiveUpgrade(element);
              setActiveAbility();
            }}
          >
            {abilityAgsChecker(element)}
          </div>
        );

      case element.ability_is_granted_by_shard:
        return (
          <div
            className={`ability_details_ability_square ${
              activeUpgrade && activeUpgrade.name === element.name
                ? 'ability_details_active_ability'
                : 'ability_details_inactive_ability'
            }`}
            style={{
              background: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${element.name}.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => {
              setIsUpgrade(true);
              setActiveUpgrade(element);
              setActiveAbility();
            }}
          >
            {abilityAgsChecker(element)}
          </div>
        );
      case element.scepter_loc.length > 0:
        return (
          <div
            className={`ability_details_ability_square ${
              activeUpgrade && activeUpgrade.name === element.name
                ? 'ability_details_active_ability'
                : 'ability_details_inactive_ability'
            }`}
            style={{
              background: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${element.name}.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => {
              setIsUpgrade(true);
              setActiveUpgrade(element);
              setActiveAbility();
            }}
          >
            {abilityAgsChecker(element)}
          </div>
        );
      case element.ability_is_granted_by_scepter:
        return (
          <div
            className={`ability_details_ability_square ${
              activeUpgrade && activeUpgrade.name === element.name
                ? 'ability_details_active_ability'
                : 'ability_details_inactive_ability'
            }`}
            style={{
              background: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${element.name}.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => {
              setIsUpgrade(true);
              setActiveUpgrade(element);
              setActiveAbility();
            }}
          >
            {abilityAgsChecker(element)}
          </div>
        );

      default:
        return null;
    }
  };

  if ((heroData && activeAbility) || (heroData && activeUpgrade))
    return (
      <HeroContainer>
        <TopStyles
          style={{
            backgroundImage: `${getAttrColors(heroData.primary_attr)}%`,
          }}
        >
          <div className='heroVerticalBar'>
            {getAttrIcon(heroData.primary_attr)}
            <h6 className='vertical_text'>
              {' '}
              {heroData.name_loc.toUpperCase()}
            </h6>
            <h6 className='vertical_text'>{heroData.id}</h6>
            <span className='verticalLine'></span>
          </div>
          <motion.div
            variants={rightSlide}
            initial='hidden'
            animate='show'
            className='heroDetails'
          >
            <motion.div
              className='heroInfo'
              variants={leftSlide}
              initial='hidden'
              animate='show'
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className='attribute'>
                {getAttrIconText(heroData.primary_attr)}
              </div>
              <h1 className='hero_name'>{heroData.name_loc}</h1>

              <h5 className='short_hero_bio'>{heroData.npe_desc_loc}</h5>

              <div className='heroLore paragraph'>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{ b: 'span', p: 'h6' }}
                >
                  {lore ? heroData.bio_loc : heroData.hype_loc}
                </ReactMarkdown>

                <button
                  className='history_button'
                  onClick={() => {
                    setLore(!lore);
                  }}
                >
                  {lore ? 'Close History' : 'Read Full History'}
                </button>
              </div>
              <div className='all_category'>
                <div className='mini_category'>
                  <p className='hero_details_mini_title'>ATTACK TYPE</p>
                  <div className='hero_mini_info'>
                    {getAttackType(heroData.attack_capability, true)}
                  </div>
                </div>
                <div className='mini_category'>
                  <p className='hero_details_mini_title'> COMPLEXITY</p>
                  <div className='hero_mini_info hero_mini_complexity'>
                    {complexityDiamonds.map((diamond, index) => {
                      return (
                        <div
                          className={`diamond ${
                            heroData.complexity === index + 1
                              ? 'filled_diamond'
                              : ''
                          }`}
                          key={index}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
            <video
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              autoPlay
              loop
              muted
              className='hero_portrait_video'
            >
              <source
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${processHeroName(
                  heroData.name
                )}.webm`}
                type='video/mp4'
              />
            </video>
            <Navigator heroProps={heroProps} key={Navigator}></Navigator>
            <div className='upper_section_ability_container'>
              <h5>ABILITIES</h5>
              <div className='upper_section_all_squares'>
                <div className='uppper_section_ability_square upper_single_container'>
                  <Tooltip>
                    <TalentTree
                      talents={talents}
                      abilities={abilities}
                    ></TalentTree>
                  </Tooltip>
                  <img
                    className='ability_talent_tree upper_section_ability_img'
                    src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg'
                    alt=''
                  />
                </div>
                {abilities &&
                  abilities.map((ability, index) => {
                    return (
                      <div className='upper_single_container' key={index}>
                        <Tooltip trigger='ability_single_container'>
                          <div className='tooltip_video'>
                            <video
                              preload='auto'
                              playsInline
                              autoPlay
                              loop
                              muted
                              key={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${processHeroName(
                                heroData.name
                              )}/${ability.name}.webm`}
                            >
                              <source
                                type='video/webm'
                                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${processHeroName(
                                  heroData.name
                                )}/${ability.name}.webm`}
                              />
                              <source
                                type='video/mp4'
                                source={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${processHeroName(
                                  heroData.name
                                )}/${ability.name}.mp4`}
                              ></source>
                            </video>
                          </div>
                          <div className='tooltip_description'>
                            <div className='tooltip_title'>
                              {ability.name_loc}
                            </div>
                            <div className='tooltip_text'>
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                              >
                                {
                                  escapeText(ability.desc_loc, ability).props
                                    .children[0]
                                }
                              </ReactMarkdown>
                            </div>
                          </div>
                        </Tooltip>
                        <img
                          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${ability.name}.png`}
                          className='upper_section_ability_img'
                          onClick={() => {
                            setIsUpgrade(false);
                            setActiveAbility(ability);
                            setActiveUpgrade(null);
                            topSkill.current.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                          }}
                          alt={ability.name}
                        ></img>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className='pillar_bar'></div>
            <div className='fade_container'>
              <div className='fade_fade'></div>
            </div>
          </motion.div>
          <div className='fade-bottom'>
            <div className='fade-b'></div>
          </div>
        </TopStyles>
        <DetailsBarStyles>
          <motion.div
            variants={leftSlide}
            initial='hidden'
            animate='show'
            className='detailsContainer'
          >
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
          </motion.div>
          <div className='detailsVerticalSeparator'></div>
          <div className='detailsContainer'>
            <div className='roles_main_container'>{processHeroRoles()}</div>
            <h5 className='header'>ROLES</h5>
          </div>
          <div className='detailsVerticalSeparator'></div>
          <motion.div
            variants={rightSlide}
            initial='hidden'
            animate='show'
            className='detailsContainer'
          >
            <div className='stats_main_container'>
              {' '}
              <div className='stats_all_stats_container'>
                {processStats(heroStats.attack, 'ATTACK')}
                {processStats(heroStats.defense, 'DEFENSE')}
                {processStats(heroStats.mobility, 'MOBILITY')}
              </div>
            </div>

            <h5 className='header'>STATS</h5>
          </motion.div>
        </DetailsBarStyles>
        <MiddleSectionStyles>
          <h4>ABILITY DETAILS:</h4>
          <div className='middle_ability_details_container'>
            <motion.div
              variants={leftSlide}
              initial='hidden'
              animate='show'
              className='ability_details_left_container'
            >
              <motion.video
                initial={{ y: 0 }}
                animate={{
                  // y: [0, -100, 0],
                  rotate: [0, 360],
                  scale: [0, 1],
                }}
                transition={{
                  duration: 0.5,

                  ease: 'easeInOut',
                }}
                className='videoTag'
                preload='auto'
                playsInline
                autoPlay
                loop
                muted
                key={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${processHeroName(
                  heroData.name
                )}/${
                  activeAbility
                    ? activeAbility.name
                    : activeUpgrade.ability_has_shard ||
                      activeUpgrade.ability_is_granted_by_shard
                    ? `${processHeroName(heroData.name)}_aghanims_shard`
                    : activeUpgrade.ability_has_scepter ||
                      activeUpgrade.ability_is_granted_by_scepter
                    ? `${processHeroName(heroData.name)}_aghanims_scepter`
                    : ''
                }.webm`}
              >
                <source
                  type='video/webm'
                  src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${processHeroName(
                    heroData.name
                  )}/${
                    activeAbility
                      ? activeAbility.name
                      : activeUpgrade.ability_has_shard ||
                        activeUpgrade.ability_is_granted_by_shard
                      ? `${processHeroName(heroData.name)}_aghanims_shard`
                      : activeUpgrade.ability_has_scepter ||
                        activeUpgrade.ability_is_granted_by_scepter
                      ? `${processHeroName(heroData.name)}_aghanims_scepter`
                      : ''
                  }.webm`}
                />
                <source
                  type='video/mp4'
                  src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${processHeroName(
                    heroData.name
                  )}/${
                    activeAbility
                      ? activeAbility.name
                      : activeUpgrade.ability_has_shard ||
                        activeUpgrade.ability_is_granted_by_shard
                      ? `${processHeroName(heroData.name)}_aghanims_shard`
                      : activeUpgrade.ability_has_scepter ||
                        activeUpgrade.ability_is_granted_by_scepter
                      ? `${processHeroName(heroData.name)}_aghanims_scepter`
                      : ''
                  }.mp4`}
                ></source>
              </motion.video>

              <div
                className='ability_details_ability_square_container'
                ref={topSkill}
              >
                {abilities &&
                  abilities.map((ability, index) => {
                    return (
                      <div key={index}>
                        <div
                          className={`ability_details_ability_square ${
                            activeAbility && activeAbility.name === ability.name
                              ? 'ability_details_active_ability'
                              : 'ability_details_inactive_ability'
                          }`}
                          style={{
                            background: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${ability.name}.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                          }}
                          onClick={() => {
                            setIsUpgrade(false);
                            setActiveAbility(ability);
                            setActiveUpgrade(null);
                          }}
                        ></div>
                      </div>
                    );
                  })}

                {upgradeAbilities && upgradeAbilities.length > 2
                  ? [...upgradeAbilities].reverse().map((upgrade, index) => {
                      return (
                        <div key={index}>{processAbilityUpgrade(upgrade)}</div>
                      );
                    })
                  : upgradeAbilities.map((upgrade, index) => {
                      return (
                        <div key={index}>{processAbilityUpgrade(upgrade)}</div>
                      );
                    })}
              </div>
            </motion.div>

            <motion.div
              variants={rightSlide}
              initial='hidden'
              animate='show'
              className='ability_details_ability_right'
            >
              <DisplayAbilityInfo
                spell={activeAbility ? activeAbility : activeUpgrade}
                isUpgrade={isUpgrade}
              ></DisplayAbilityInfo>
            </motion.div>
          </div>
        </MiddleSectionStyles>
        <HeroPagination
          heroProps={heroProps}
          key={HeroPagination}
        ></HeroPagination>
      </HeroContainer>
    );
};

const HeroContainer = styled.div`
  width: 100%;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-position-x: -20vw;
  background-color: #000;
  /* gap: 5rem; */
  background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//backgrounds/greyfade.jpg);
  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;
  margin: 0 auto;
  color: ${secondary};
  @media screen and (max-width: 1200px) {
    zoom: 0.8;
  }
  @media screen and (max-width: 950px) {
    zoom: 0.7;
  }
  @media screen and (max-width: 750px) {
    zoom: 0.6;
  }
  @media screen and (max-width: 550px) {
    zoom: 0.5;
  }
`;

const TopStyles = styled.div`
  display: flex;
  background-color: #000;
  background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//backgrounds/greyfade.jpg);
  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  height: 75vh;
  position: relative;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    zoom: 0.8;
  }
  .history_button {
    margin-top: 0.5rem;
    color: #8a8a8a;
    text-decoration: underline;
    font-size: 1.1rem;
    cursor: pointer;
    background: none;
    border: none;
  }
  .fade-bottom {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: -4.5rem;
    z-index: 1;
    .fade-b {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(0, 0, 0, 0) 60%,
        rgba(24, 24, 24, 1) 100%,
        rgb(24, 24, 24) 100%
      );
    }
  }
  .upper_section_ability_container {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 10rem;
    bottom: 1.5rem;
    z-index: 2;
    justify-content: center;

    @media screen and (max-width: 1200px) {
      zoom: 0.5;
    }

    align-items: center;
    h5 {
      text-shadow: 0px 0px 20px #000, 0px 0px 20px #000;
      letter-spacing: 2px;
    }
    .upper_section_all_squares {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .ability_talent_tree {
        margin-right: 0.8rem;
        box-shadow: none;
      }
    }

    .upper_single_container {
      display: flex;
      position: relative;

      &:hover .tooltip {
        display: flex;
      }

      .tooltip_video {
        width: 100%;
        height: 10.563rem;
        display: flex;

        align-items: center;
        video {
          width: 100%;
          height: 100%;
        }
      }
      .tooltip_description {
        width: 18.75rem;
        background: linear-gradient(150deg, #68727c, #14171a);
        padding: 0.85rem 1rem;
        padding-bottom: 2rem;

        .tooltip_title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .tooltip_text {
          color: #ddd;
          margin-top: 0.3rem;

          letter-spacing: 0px;
        }
      }
    }

    .upper_section_ability_img {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 5rem;
      height: 5rem;
      position: relative;
      cursor: pointer;
      transition: 250ms all ease-out;
      box-shadow: 0px 0px 20px #000, 0px 0px 20px #000;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .pillar_bar {
    width: 150%;
    height: 40.625rem;
    background-color: #00000060;
    position: absolute;
    transform: skewY(-45deg) translateX(-50vw);
    overflow: hidden;
  }
  .fade_container {
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    .fade_fade {
      background: linear-gradient(
        rgba(0, 0, 0, 0) 70%,
        rgba(0, 0, 0, 0.733) 100%,
        rgb(0, 0, 0) 100%
      );
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .heroVerticalBar {
    display: flex;

    gap: 1rem;
    align-items: center;
    justify-content: center;
    transform: rotate(270deg);
    transform-origin: bottom left;
    position: absolute;
    bottom: 0.6rem;
    left: 4.25rem;
    width: 100%;
    margin-bottom: 5rem;
    z-index: 2;

    .attrImg {
      width: 2rem;
    }
    .verticalLine {
      height: 0.1rem;

      flex-grow: 1;
      background-color: #555;
    }
  }

  .heroDetails {
    display: flex;

    .hero_details_mini_title {
      letter-spacing: 2.5px;
    }
    .all_category {
      display: flex;

      gap: 5rem;
      z-index: 2;
    }

    .hero_mini_info {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      margin-top: 0.5rem;
      .filled_diamond {
        background-color: #fff;
      }
      .diamond {
        width: 1rem;
        height: 1rem;
        border: 1px solid #fff;
        transform: rotateZ(45deg);
      }
      .attack_type_img {
        width: 1.7rem;
      }
    }
    .hero_mini_complexity {
      gap: 1rem;
    }
    .hero_name {
      text-transform: uppercase;
    }
    .short_hero_bio {
      color: #a5e0f3;
      width: 45%;
      white-space: pre-wrap;
      text-transform: uppercase;
    }

    .heroInfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 20rem 0 10rem;
      left: 0;
    }
    .attribute {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .heroLore {
      width: 45%;
      padding: 2rem 0;
      z-index: 2;
      transition: 250ms all ease-in-out;
      height: 45%;
      overflow-y: auto;
      margin-bottom: 2rem;

      span {
        font-weight: 700;
      }
    }
    .hero_portrait_video {
      width: 70rem;
      right: 0;

      z-index: 1;
      position: absolute;

      @media screen and (max-width: 1200px) {
        zoom: 0.6;
        right: 25rem;
        bottom: -20%;
      }
    }
  }
`;

const DetailsBarStyles = styled.div`
  width: 100%;
  /* height: 15rem; */
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  .detailsContainer {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 1rem;
    }
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1200px) {
      zoom: 0.8;
    }
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
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 1px;
    }

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
      gap: 2.5rem;
      white-space: nowrap;
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

const MiddleSectionStyles = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 0;

  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;

  .middle_ability_details_container {
    width: 90%;
    margin: 0 auto;
    gap: 1rem;
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 5rem;
    }

    .ability_details_left_container {
      width: 55%;
      box-shadow: 3px 3px 8px #000;
      min-height: 35rem;
      position: relative;
      min-height: 0;
      height: fit-content;
      margin: 0;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      video {
        width: 100%;
        height: 100%;
        margin: 0;
        vertical-align: middle;
      }
      .ability_details_ability_square_container {
        display: flex;
        margin: 0;
        cursor: pointer;

        flex-wrap: wrap;
        width: 100%;
        padding: 0 5rem;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -10%;
        left: 50%;
        transform: translate(-50%, -10%);
        gap: 1rem;
        @media screen and (max-width: 1490px) {
          zoom: 0.8;
        }
        .ability_details_inactive_ability {
          filter: saturate(0) brightness(0.6);
        }
        .ability_details_active_ability {
          filter: saturate(1) brightness(1);
        }
        .ability_upgrade_square {
          display: flex;
          flex-direction: row-reverse;
          background: red;
        }
        .ability_details_ability_square {
          width: 5rem;
          height: 5rem;
          position: relative;

          margin: 0;
          box-shadow: 0px 0px 10px #000;
          .ability_upgrade {
            position: absolute;
            margin: 0;
            right: 0;
            bottom: 0;
            z-index: 1;

            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .ability_details_ability_right {
      width: 45%;
      min-height: 0%;
      height: 100%;
      flex: 1;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

export default Hero;
