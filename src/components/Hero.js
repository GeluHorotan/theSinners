import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { accent, primary, secondary } from '../Utility/Colors';
import Logo from '../img/logo.png';
export const test = 2;
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

  const getAttrImg = (element) => {
    switch (element) {
      case 'str':
        return (
          <>
            {strength}
            <h6>STRENGTH</h6>
          </>
        );
      case 'agi':
        return (
          <>
            {agility}
            <h6>AGILITY</h6>
          </>
        );
      case 'int':
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

  const processHeroHealth = (base_str, base_health_regen) => {
    const baseHealth = 200;
    const healthPerStr = 20;
    const regenPerStr = 0.1;
    const heroHealth = baseHealth + base_str * healthPerStr;
    const healthRegen = base_health_regen + base_str * regenPerStr;
    return (
      <>
        <p>{heroHealth} </p>{' '}
        <p className='regen'> + {healthRegen.toFixed(1)}</p>
      </>
    );
  };
  const processHeroMana = (base_int, base_mana_regen) => {
    const baseMana = 75;
    const manaPerInt = 12;
    const regenPerInt = 0.05;
    const heroMana = baseMana + manaPerInt * base_int;
    const manaRegen = base_mana_regen + base_int * regenPerInt;
    return (
      <>
        <p>{heroMana} </p> <p className='regen'> + {manaRegen.toFixed(1)}</p>
      </>
    );
  };

  if (heroProps)
    return (
      <HeroContainer>
        {/* <TopStyles>
          <div className='heroVerticalBar'>
            {getAttrImg(heroProps[0][0].primary_attr)}
            <h5> {heroProps[0][0].localized_name.toUpperCase()}</h5>
            <h5>{heroProps[0][0].id}</h5>
            <span className='verticalLine'></span>
          </div>
          <div className='heroDetails'>
            <div className='heroInfo'>
              <div className='attribute'>
                {getAttrImg(heroProps[0][0].primary_attr)}
              </div>
              <h1>{heroProps[0][0].localized_name}</h1>
              <p className='heroLore'>{heroProps[1]}</p>
            </div>
            <video autoPlay loop muted>
              <source
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${processHeroName(
                  heroProps[0][0].name
                )}.webm`}
                type='video/mp4'
              />
            </video>
          </div>
        </TopStyles>
        <HeroDetailsBarContainerStyles>
          <SmallPortraitStyles>
            <img
              src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${processHeroName(
                heroProps[0][0].name
              )}.png`}
              alt=''
            />
            <span className='base health-color'>
              {processHeroHealth(
                heroProps[0][0].base_str,
                heroProps[0][0].base_health_regen
              )}
            </span>
            <span className='base mana-color'>
              {processHeroMana(
                heroProps[0][0].base_int,
                heroProps[0][0].base_mana_regen
              )}
            </span>
          </SmallPortraitStyles>
          <div className='attribute_container'>
            <div className='heropage_single_attribute'>
              {strength} <h5>{heroProps[0][0].base_str}</h5>
              <p className='gain'> + {heroProps[0][0].str_gain}</p>
            </div>
            <div className='heropage_single_attribute'>
              {agility} <h5>{heroProps[0][0].base_agi}</h5>
              <p className='gain'> + {heroProps[0][0].agi_gain}</p>
            </div>
            <div className='heropage_single_attribute'>
              {intelligence} <h5>{heroProps[0][0].base_int}</h5>
              <p className='gain'> + {heroProps[0][0].int_gain}</p>
            </div>
          </div>
          <div className='vertical_separator'></div>
          <div className='heropage_roles_container'>
            <div className='heropage_role'>
              Carry
              <div className='bar_container'>
                <div className='bar_background'></div>
                <div className='bar_fill'></div>
              </div>
            </div>
            <div className='heropage_role'>Support</div>
            <div className='heropage_role'>Nuker</div>
            <div className='heropage_role'>Disabler</div>
            <div className='heropage_role'>Jungler</div>
            <div className='heropage_role'>Durable</div>
            <div className='heropage_role'>Escape</div>
            <div className='heropage_role'>Pusher</div>
            <div className='heropage_role'>Initiator</div>
          </div>
        </HeroDetailsBarContainerStyles> */}
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

  background: grey;
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
    background: ${accent};

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
      z-index: 10;
      position: absolute;
    }
  }
`;

const HeroDetailsBarContainerStyles = styled.div`
  width: 100%;
  gap: 2rem;
  height: 15rem;
  background: #1f1f1f;
  z-index: 15;
  position: absolute;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .attribute_container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;

    img {
      width: 2rem;
    }
    .heropage_single_attribute {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
    }
    .gain {
      color: #999;
      font-weight: 400;
    }
  }
  .vertical_separator {
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
  .heropage_roles_container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;

    .bar_container {
      width: 100%;
      height: 6px;
      max-height: 6px;
      flex-grow: 1;
      margin-top: 4px;
      position: relative;
      .bar_background {
        width: 100%;
        height: 100%;
        background-color: #4c4c4c;
        position: absolute;
        left: 0;
        top: 0;
      }
      .bar_fill {
        height: 100%;
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 0px 10px #427ed1, 0px 0px 10px #427ed1;
        position: absolute;
        left: 0;
        top: 0;
        transition-property: width;
        transition-duration: 5s;
        transition-delay: 0.5s;
      }
    }
  }
`;

const SmallPortraitStyles = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;

  img {
    width: 10rem;
  }
  .base {
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 2px #000;
    width: 100%;
    position: relative;
  }
  .regen {
    right: 5px;
    position: absolute;
    right: 0.5rem;
    color: #286323;
    font-weight: 300;
    font-size: 0.7rem;
  }
`;

export default Hero;
