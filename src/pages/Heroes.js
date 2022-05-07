import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Animations
import { bounce } from '../components/animation';

// Colors
import { accent, primary, secondary } from '../Utility/Colors';

const Heroes = () => {
  // Steam Valve API
  // DOta 2
  const steamApiKey = 'D3ECAFCD18BAD344D7E3A0B44D55E53F';
  const [heroesData, setHeroesData] = useState();
  const getHeroes = async () => {
    const res = await fetch(
      `/IEconDOTA2_570/GetHeroes/v0001/?key=${steamApiKey}`
    );
    const json = await res.json();
    setHeroesData(json);
  };

  useEffect(() => {
    getHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // OpenDota API
  // Heroes Info
  // const [heroAbilities, setHeroAbilities] = useState();
  // const getHeroAbilities = async () => {
  //   const res = await fetch(`https://api.opendota.com/api/constants/abilities`);
  //   const json = await res.json();
  //   setHeroAbilities([json]);
  // };

  // useEffect(() => {
  //   getHeroAbilities();
  // }, []);

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
        <h5 className='short-'>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
        </h5>
      </StyledHeader>
      <StyledGridContainer>
        <div className='heroes-grid'>
          {heroesData &&
            heroesData.result.heroes.map((hero, index) => {
              const replaced = hero.name.replace('npc_dota_hero_', '');
              return (
                <img
                  src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${replaced}.png`}
                  alt=''
                />
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
  h5 {
    width: 50%;
  }
`;

const StyledGridContainer = styled.div`
  background: ${accent};
  padding: 1rem;
  .heroes-grid {
    width: 60%;
    margin: 5rem auto;
    display: flex;

    flex-wrap: wrap;
    justify-content: center;
    padding: 0rem 1rem;
    gap: 1rem;
    img {
      width: 225px;
      height: 127px;
      cursor: pointer;
    }
  }
`;

export default Heroes;
