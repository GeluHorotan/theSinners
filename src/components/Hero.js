import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

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

  const getAttrImg = (element) => {
    switch (element) {
      case 'str':
        return (
          <img
            className='attrImg'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'
            alt=''
          />
        );
      case 'agi':
        return (
          <img
            className='attrImg'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'
            alt=''
          />
        );
      case 'int':
        return (
          <img
            className='attrImg'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'
            alt=''
          />
        );
      default:
        return null;
    }
  };

  if (heroProps)
    return (
      <HeroContainer>
        <video autoPlay loop muted>
          <source
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroProps[0].heroDETAILS[1].name}.webm`}
            type='video/mp4'
          />
        </video>
        <div className='text'>
          <h4>{heroProps[0].heroDETAILS[1].name.toUpperCase()}</h4>
          {getAttrImg(heroProps[0].heroDETAILS[2].primaryAttr)}
          <h6>{heroProps[0].heroDETAILS[3].attackType}</h6>
          <h6>{heroProps[0].heroDETAILS[4].roles}</h6>
          <h6>{heroProps[0].heroDETAILS[5].base_health}</h6>
          <h6>{heroProps[0].heroDETAILS[6].base_health_regen}</h6>
          <h6>{heroProps[0].heroDETAILS[7].base_mana}</h6>
          <h6>{heroProps[0].heroDETAILS[8].base_mana_regen}</h6>
          <h6>{heroProps[0].heroDETAILS[9].base_armor}</h6>
          <h6>{heroProps[0].heroDETAILS[10].base_mr}</h6>
          <h6>{heroProps[0].heroDETAILS[11].base_attack_min}</h6>
          <h6>{heroProps[0].heroDETAILS[12].base_attack_max}</h6>
          <h6>{heroProps[0].heroDETAILS[13].base_str}</h6>
          <h6>{heroProps[0].heroDETAILS[14].base_agi}</h6>
          <h6>{heroProps[0].heroDETAILS[15].base_int}</h6>
          <h6>{heroProps[0].heroDETAILS[16].str_gain}</h6>
          <h6>{heroProps[0].heroDETAILS[17].agi_gain}</h6>
          <h6>{heroProps[0].heroDETAILS[18].int_gain}</h6>

          <h6>{heroProps[0].heroDETAILS[19].attack_range}</h6>
          <h6>{heroProps[0].heroDETAILS[20].projectile_speed}</h6>
          <h6>{heroProps[0].heroDETAILS[21].attack_rate}</h6>
          <h6>{heroProps[0].heroDETAILS[22].move_speed}</h6>
          <h6>{heroProps[0].heroDETAILS[23].turn_rate}</h6>
          <h6>{heroProps[0].heroDETAILS[24].cm_enabled}</h6>
          <h6>{heroProps[0].heroDETAILS[25].legs}</h6>
        </div>
      </HeroContainer>
    );
};

const HeroContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  padding: 10rem;
  margin: 0 auto;
  color: cyan;
  video {
    width: 25%;
  }
  .text {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;

export default Hero;
