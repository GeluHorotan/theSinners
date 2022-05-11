import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// Animations
import { bounce } from '../components/animation';

// Colors
import { accent, primary, secondary } from '../Utility/Colors';

const Heroes = () => {
  // Steam Valve API
  // DOta 2
  const [heroesList, setHeroesList] = useState();
  const getListHeroes = async () => {
    const res = await fetch(`/.netlify/functions/helloWorld`);
    const json = await res.json();
    setHeroesList(json);
  };

  useEffect(() => {
    getListHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // OpenDota API
  // Dota 2 Hero Attributes
  const [heroAttr, setHeroAttr] = useState();
  const getHeroAttr = async () => {
    const res = await fetch(`https://api.opendota.com/api/heroStats`);
    const json = await res.json();
    setHeroAttr(json);
  };

  useEffect(() => {
    getHeroAttr();
  }, []);

  // Switch function for returning hero attr image
  // ------------------------------------

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

  return (
    <StyledWrapper>
      <StyledImageBackground>
        <div className='image-bg'>
          <div className='fade-top'>
            <div className='fade-t'></div>
          </div>
          <div className='fade-bottom'>
            <div className='fade-b'></div>
          </div>
        </div>
      </StyledImageBackground>
      <StyledHeader>
        <motion.h1
          className='title'
          variants={bounce}
          initial='hidden'
          animate='show'
        >
          Who will you <br />
          choose ?!
        </motion.h1>
        <p className='short-'>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
        </p>
      </StyledHeader>
      <StyledGridContainer>
        <div className='heroes-grid'>
          {heroesList &&
            heroAttr &&
            heroesList.data.result.heroes.map((hero, index) => {
              const localizedName = hero.name.replace('npc_dota_hero_', '');
              const heroName = localizedName.replace('_', ' ');
              // console.log(heroAttr);
              return (
                <Link
                  to={`/hero/${localizedName}`}
                  state={[
                    {
                      heroDETAILS: [
                        { id: `${heroAttr[index].id}` },
                        { name: `${localizedName}` },
                        { primaryAttr: `${heroAttr[index].primary_attr}` },
                        { attackType: `${heroAttr[index].attack_type}` },
                        { roles: `${heroAttr[index].roles}` },
                        { base_health: `${heroAttr[index].base_health}` },
                        {
                          base_health_regen: `${heroAttr[index].base_health_regen}`,
                        },
                        { base_mana: `${heroAttr[index].base_mana}` },
                        {
                          base_mana_regen: `${heroAttr[index].base_mana_regen}`,
                        },
                        { base_armor: `${heroAttr[index].base_armor}` },
                        { base_mr: `${heroAttr[index].base_mr}` },
                        {
                          base_attack_min: `${heroAttr[index].base_attack_min}`,
                        },
                        {
                          base_attack_max: `${heroAttr[index].base_attack_max}`,
                        },
                        { base_str: `${heroAttr[index].base_str}` },
                        { base_agi: `${heroAttr[index].base_agi}` },
                        { base_int: `${heroAttr[index].base_int}` },
                        { str_gain: `${heroAttr[index].str_gain}` },
                        { agi_gain: `${heroAttr[index].agi_gain}` },
                        { int_gain: `${heroAttr[index].int_gain}` },
                        { attack_range: `${heroAttr[index].attack_range}` },
                        {
                          projectile_speed: `${heroAttr[index].projectile_speed}`,
                        },
                        {
                          attack_rate: `${heroAttr[index].attack_rate}`,
                        },
                        {
                          move_speed: `${heroAttr[index].move_speed}`,
                        },
                        {
                          turn_rate: `${heroAttr[index].turn_rate}`,
                        },
                        {
                          cm_enabled: `${heroAttr[index].cm_enabled}`,
                        },
                        {
                          legs: `${heroAttr[index].legs}`,
                        },
                      ],
                      test: 'test123',
                    },
                  ]}
                >
                  <div className='hero-card' key={index}>
                    <img
                      src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${localizedName}.png`}
                      alt=''
                    />
                    <p>{heroName.toUpperCase()}</p>
                    <p>{heroAttr.primary_attr}</p>
                    {getAttrImg(heroAttr[index].primary_attr)}
                  </div>
                </Link>
              );
            })}
        </div>
      </StyledGridContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background: ${primary};
  width: 90%;
  min-height: 3000px;
  margin: 0 auto;
`;

const StyledImageBackground = styled.div`
  .fade-top {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    left: 0px;
    top: 0px;
    right: 0px;
    .fade-t {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.733) 90%,
        rgb(0, 0, 0) 100%
      );
    }
  }

  .fade-bottom {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    left: 0px;
    bottom: 0px;
    right: 0px;
    .fade-b {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(0, 0, 0, 0) 60%,
        rgba(24, 24, 24, 0.733) 90%,
        rgb(24, 24, 24) 100%
      );
    }
  }
  .image-bg {
    max-width: 100%;
    min-height: 80vh;
    position: relative;
    background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/heroes_full.jpg');

    background-size: 3500px;
    background-repeat: no-repeat;
    background-position: center bottom 80%;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 5%;
  text-align: center;
  color: ${secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 75%;
  }
`;

const StyledGridContainer = styled.div`
  background: ${accent};
  padding: 1rem;

  .heroes-grid {
    width: 100%;
    margin: 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0rem 1rem;
    /* gap: 0.5rem; */
    a {
      text-decoration: none;
    }
    img {
      width: 225px;
      height: 127px;
      cursor: pointer;
      transition: 0.4s all ease-in-out;
      border: 0.5rem solid ${primary};
    }
    img:hover {
      transform: scale(1.2);
    }
    .hero-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
    }
    .attrImg {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export default Heroes;
