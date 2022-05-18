import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// Animations
import { bounce } from '../components/animation';

// Colors
import { accent, desaturatedRed, primary, secondary } from '../Utility/Colors';

const Heroes = () => {
  // Steam Valve API / Dota2.com API
  // Dota 2
  const [heroesList, setHeroesList] = useState();
  const getListHeroes = async () => {
    const res = await fetch(`/.netlify/functions/helloWorld/`);
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
      case '0':
        return (
          <>
            <img
              className='attrImg'
              src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'
              alt=''
            />
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
                    <div
                      className='heroPortrait'
                      style={{
                        backgroundImage: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${localizedName}.png)`,
                      }}
                    >
                      {' '}
                      <div
                        className='attributeFade'
                        style={{
                          background:
                            'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.733) 40%, rgb(0, 0, 0) 100%)',
                        }}
                      >
                        <div className='heroPortraitDetails'>
                          {getAttrImg(`${hero.primary_attr}`)}
                          <h5>{hero.name_loc.toUpperCase()}</h5>
                        </div>
                      </div>
                    </div>
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
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
  width: 100%;
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
  padding: 1rem;

  .heroes-grid {
    width: 90rem;
    margin: 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0rem 1rem;
    gap: 1.5rem;
    a {
      text-decoration: none;
    }
    .heroPortrait {
      width: 225px;
      height: 127px;
      cursor: pointer;
      transition: 0.4s all ease-in;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 1px 1px 4px #000;
      filter: saturate(0.8);

      .attributeFade {
        width: 100%;
        transform: translateY(5rem);
        transform-origin: bottom;
        opacity: 0;
        transform: scaleY(0);
        transition: 0.4s all ease-in-out;
      }

      .heroPortraitDetails {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.1rem;
        padding: 1.5rem 0.5rem 0.5rem 0.5rem;

        h5 {
          line-height: 1.5rem;
        }

        .attrImg {
          width: 2.625rem;
          height: 2.625rem;
          padding: 0.25rem;
        }
      }
    }
    .heroPortrait:hover {
      transform: scale(1.1);
      z-index: 15;
    }
    .heroPortrait:hover .attributeFade {
      transform: translateY(0);
      transform: scaleY(1);
      opacity: 1;
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
