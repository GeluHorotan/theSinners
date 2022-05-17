import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// Animations
import { bounce } from '../components/animation';

// Colors
import { accent, primary, secondary } from '../Utility/Colors';

const Heroes = () => {
  // Steam Valve API / Dota2.com API
  // Dota 2
  const [heroesList, setHeroesList] = useState();
  const getListHeroes = async () => {
    const res = await fetch(`/.netlify/functions/helloWorld`);
    const json = await res.json();
    setHeroesList(json);
  };
  console.log(test);
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

  // OpenDota API
  // Dota 2 Hero Lore
  const [heroLore, setHeroLore] = useState();
  const getHeroLore = async () => {
    const res = await fetch(`https://api.opendota.com/api/constants/hero_lore`);
    const json = await res.json();
    setHeroLore(json);
  };

  useEffect(() => {
    getHeroLore();
  }, []);

  // Switch function for returning hero attr image
  // ------------------------------------

  const getAttrImg = (element) => {
    switch (element) {
      case '0':
        return (
          <>
            <img
              className='attrImg'
              src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'
              alt=''
            />
            <p>STR</p>
          </>
        );
      case '1':
        return (
          <>
            <img
              className='attrImg'
              src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'
              alt=''
            />
            <p>AGI</p>
          </>
        );
      case '2':
        return (
          <>
            <img
              className='attrImg'
              src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'
              alt=''
            />
            <p>INT</p>
          </>
        );
      default:
        return null;
    }
  };

  if (heroesList) {
    heroesList.result.data.heroes.sort((a, b) =>
      a.name_loc.localeCompare(b.name_loc)
    );
  }

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
            heroesList.result.data.heroes.map((hero, index) => {
              const localizedName = hero.name.replace('npc_dota_hero_', '');

              return (
                <Link to={`/hero/${localizedName}`} state={hero.id}>
                  <div className='hero-card' key={index}>
                    <img
                      src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${localizedName}.png`}
                      alt=''
                    />
                    <p>{hero.name_loc}</p>
                    <p>{hero.id}</p>
                    {getAttrImg(`${hero.primary_attr}`)}
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
