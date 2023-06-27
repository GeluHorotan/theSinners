import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

// Colors
import {
  accent,
  blue,
  lightGreen,
  primary,
  saturatedRed,
  secondary,
} from "../Utility/Colors";
import Input from "../components/Input";

// Functions
import { getAttrImg } from "../Functions/getAttrImg";

const Heroes = () => {
  // Steam Valve API / Dota2.com API
  // Dota 2

  const [linkState, setLinkState] = useState();
  const [inputSearch, setInputSearch] = useState();
  const [activeComplexity, setActiveComplexity] = useState(4);
  const [activeAttribute, setActiveAttribute] = useState(4);
  const [filteredHeroes, setFilteredHeroes] = useState(0);
  const [heroesList, setHeroesList] = useState();
  const getListHeroes = async () => {
    const res = await fetch(`/.netlify/functions/helloWorld/`);
    const json = await res.json();

    setHeroesList(json.result.data.heroes);
    setFilteredHeroes(json.result.data.heroes);
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

  if (heroesList) {
    heroesList.sort((a, b) => a.name_loc.localeCompare(b.name_loc));
  }

  const filterButtons = [
    [
      { name: "str", aLevel: 0 },
      { name: "agi", aLevel: 1 },
      { name: "int", aLevel: 2 },
      { name: "uni", aLevel: 3 },
    ],
    [{ cLevel: 1 }, { cLevel: 2 }, { cLevel: 3 }],
  ];

  const filterAttr = (attr) => {
    if (activeAttribute === attr) {
      if (activeComplexity !== 4) {
        const filtered = heroesList.filter(
          (hero) => hero.complexity === activeComplexity
        );
        setFilteredHeroes(filtered);
        setActiveAttribute(4);
      } else {
        setActiveAttribute(4);
        setFilteredHeroes(heroesList);
      }
    } else {
      if (activeComplexity !== 4) {
        setActiveAttribute(attr);
        const filtered = heroesList.filter(
          (hero) =>
            hero.primary_attr === attr && hero.complexity === activeComplexity
        );
        setFilteredHeroes(filtered);
      } else {
        setActiveAttribute(attr);
        const filtered = heroesList.filter(
          (hero) => hero.primary_attr === attr
        );
        setFilteredHeroes(filtered);
      }
    }
  };

  const filterComplexity = (cLevel) => {
    if (activeComplexity === cLevel) {
      if (activeAttribute !== 4) {
        const filtered = heroesList.filter(
          (hero) => hero.primary_attr === activeAttribute
        );
        setFilteredHeroes(filtered);
        setActiveComplexity(4);
      } else {
        setActiveComplexity(4);
        setFilteredHeroes(heroesList);
      }
    } else {
      if (activeAttribute !== 4) {
        setActiveComplexity(cLevel);
        const filtered = heroesList.filter(
          (hero) =>
            hero.complexity === cLevel && hero.primary_attr === activeAttribute
        );
        setFilteredHeroes(filtered);
      } else {
        setActiveComplexity(cLevel);
        const filtered = heroesList.filter(
          (hero) => hero.complexity === cLevel
        );
        setFilteredHeroes(filtered);
      }
    }
  };

  const attrBtns = React.useRef(null);
  const complexityBtns = React.useRef(null);
  const attrBtn = React.useRef(null);
  const complexityBtn = React.useRef(null);

  const searchHero = (e) => {
    setInputSearch(e.target.value);

    if (e.target.value.length !== 0) {
      attrBtns.current.style.pointerEvents = "none";
      complexityBtns.current.style.pointerEvents = "none";

      const sHero = heroesList.filter((hero) =>
        hero.name_loc.toLowerCase().includes(e.target.value)
      );
      setFilteredHeroes(sHero);
    }
    if (e.target.value.length === 0) {
      setFilteredHeroes(heroesList);
      attrBtns.current.style.pointerEvents = "all";
      complexityBtns.current.style.pointerEvents = "all";

      if (activeAttribute !== 4) {
        const filtered = heroesList.filter(
          (hero) => hero.primary_attr === activeAttribute
        );
        setFilteredHeroes(filtered);
      }
      if (activeComplexity !== 4) {
        const filtered = heroesList.filter(
          (hero) => hero.complexity === activeComplexity
        );
        setFilteredHeroes(filtered);
      }
      if (activeComplexity !== 4 && activeAttribute !== 4) {
        const filtered = heroesList.filter(
          (hero) =>
            hero.complexity === activeComplexity &&
            hero.primary_attr === activeAttribute
        );
        setFilteredHeroes(filtered);
      }
    }
  };

  const processNoResults = (message) => {
    if (filteredHeroes && filteredHeroes.length === 0) {
      return (
        <AnimatePresence>
          <motion.h2
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: "50%", opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{ duration: 0.25, type: "tween" }}
            id="heroes_no_heroes_warning"
          >
            {message}
          </motion.h2>
        </AnimatePresence>
      );
    }
  };

  return (
    <StyledWrapper>
      <StyledImageBackground>
        <div className="fade-top">
          <div className="fade-t"></div>
        </div>
        <div className="fade-bottom">
          <div className="fade-b"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            ease: "circIn",
          }}
          className="image_background_header"
        >
          {" "}
          <h1>Choose your hero</h1>
          <h5>
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </h5>
        </motion.div>
      </StyledImageBackground>
      <StyledFilter>
        <h5 className="filter_header">FILTER HEROES</h5>

        <div className="heroes_filter_details_container">
          <h6 className="heroes_com">ATTRIBUTES</h6>
          <div className="heroes_filter_complexity" ref={complexityBtns}>
            {filterButtons[0].map((a, index) => (
              <div
                className={`filter_btn ${
                  activeAttribute === a.aLevel && !inputSearch
                    ? "heroes_filter_active"
                    : ""
                } `}
                onClick={() => filterAttr(a.aLevel)}
                ref={attrBtn}
                key={index}
              >
                <img
                  src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-${a.name}-active.png`}
                  alt={`Complexity: ${a.name}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="heroes_filter_details_container">
          <h6 className="heroes_com">COMPLEXITY</h6>
          <div className="heroes_filter_complexity" ref={complexityBtns}>
            {filterButtons[1].map((c, index) => (
              <div
                className={`filter_btn  ${
                  activeComplexity !== 4 &&
                  activeComplexity >= index + 1 &&
                  !inputSearch
                    ? "heroes_filter_active"
                    : ""
                }`}
                onClick={() => filterComplexity(c.cLevel)}
                ref={complexityBtn}
                key={index}
              >
                <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                  alt={`Complexity: ${c}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="input">
          <Input
            onChange={searchHero}
            label="Search hero"
            colorTrigger={filteredHeroes}
            topOffset={"-1.2rem"}
          ></Input>
        </div>
      </StyledFilter>
      <StyledGridContainer>
        {processNoResults("No heroes match your filter")}

        <motion.div layout className="heroes-grid">
          {filteredHeroes &&
            filteredHeroes.map((hero, index) => {
              const localizedName = hero.name.replace("npc_dota_hero_", "");

              return (
                <motion.div
                  layout
                  initial={{
                    y: index % 2 === 0 ? -50 : 50,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  animate={{ x: 0, y: 0 }}
                  transition={{
                    type: "spring",

                    stifness: 300 + index,

                    duration: 1,

                    delay: index * 0.02,
                  }}
                  exit={{
                    y: index % 2 === 0 ? -10 : 10,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  key={index}
                >
                  <AnimatePresence>
                    <Link
                      to={`/hero/${localizedName}`}
                      state={{
                        currentHero: hero.id,
                        currentIndex: index,

                        prevIndex:
                          index - 1 === -1 ? heroesList.length - 1 : index - 1,

                        nextIndex:
                          index + 1 > heroesList.length - 1 ? 0 : index + 1,
                        list: heroesList,
                      }}
                    >
                      <div className="hero-card">
                        <div
                          className="heroPortrait"
                          style={{
                            backgroundImage: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${localizedName}.png)`,
                          }}
                        >
                          {" "}
                          <div
                            className="attributeFade"
                            style={{
                              background:
                                "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.733) 40%, rgb(0, 0, 0) 100%)",
                            }}
                          >
                            <div className="heroPortraitDetails">
                              {getAttrImg(hero.primary_attr)}
                              <h5>{hero.name_loc.toUpperCase()}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatePresence>
                </motion.div>
              );
            })}
        </motion.div>
      </StyledGridContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg");
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  background-size: 200% auto;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  width: 100%;
  min-height: 187.5rem;
  margin: 0 auto;
`;

const StyledImageBackground = styled.div`
  max-width: 100%;
  min-height: 55vh;
  position: relative;
  background: url("https://r4.wallpaperflare.com/wallpaper/214/767/597/abaddon-defense-of-the-ancient-dota-dota-2-wallpaper-6b36acdd63b15fd975a49ba9dd8cdc00.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 50%;

  .image_background_header {
    color: ${secondary};
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;
    text-shadow: 5px 5px 3px ${primary};
    h5 {
      width: 50%;
    }
    @media screen and (max-width: 1300px) {
      gap: 0.5rem;
      h1 {
        font-size: 3rem;
      }
      h5 {
        font-size: 1.25rem;
      }
    }
    @media screen and (max-width: 797px) {
      gap: 0;
      h1 {
        font-size: 2rem;
      }
      h5 {
        width: 75%;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
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
        rgba(0, 0, 0, 0) 55%,
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
        rgba(0, 0, 0, 0) 30%,
        rgba(24, 24, 24, 0.733) 70%,
        rgb(24, 24, 24) 100%
      );
    }
  }
`;

const StyledFilter = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;

  justify-content: space-between;
  align-items: center;
  border: 1px solid #11111190;
  box-shadow: 0px 0px 30px #00000050;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.3) 70%
  );

  .filter_header {
    color: #fff;
   @media screen and (max-width: 1100px) {
      display: none;
  }
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
   
    }
    .heroes_filter_details_container { 
      display: flex;
    flex-direction: row;
    align-items: center;
  
    }
    .heroes_filter_complexity, .heroes_filter_attributes {
      display: flex; 
    gap: 0.2rem;
    }
    .heroes_attr, .heroes_com {
      color: #808fa6;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 20px;
    }
    
  }
  @media screen and (max-width: 1300px) {
    width: 95%;
  }

   @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
    
  }

 
  @media screen and (max-width: 482px) {
    #form-container {
      width: 75%;
      .form__label {
        font-size: 1rem;
      }
    }
  }

  .filter_btn {
      width: 32px;
    height: 32px;
    margin-left: -4px;
    background-size: cover;
    background-repeat: no-repeat;
    transition-property: filter;
    transition-timing-function: ease-in-out;
    transition-duration: .1s;
    cursor: pointer;
    color: #fff;
    filter: brightness(0.5) saturate(0);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    }
   
  .heroes_filter_active {
    filter: brightness(1) saturate(1);
  }

  .input {
    width: 30%;
    @media screen and (max-width: 768px) {
      width: 60%;
  }
    @media screen and (max-width: 500px) {
      width: 100%;
  }
  }

 


`;

const StyledGridContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  #heroes_no_heroes_warning {
    display: flex;

    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 1rem 0;
    font-weight: 300;
    color: ${secondary};
    font-size: 5rem;
    @media screen and (max-width: 1000px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 799px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 525px) {
      font-size: 1.5rem;
    }
  }
  .heroes-grid {
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;

    @media screen and (max-width: 1300px) {
      gap: 2rem;
    }
    @media screen and (max-width: 750px) {
      justify-content: space-evenly;
      width: 100%;
    }

    a {
      text-decoration: none;
    }
    .heroPortrait {
      width: 14.063rem;
      height: 7.938rem;
      cursor: pointer;
      transition: 0.25s all ease-in;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 1px 1px 4px #000;
      vertical-align: middle;
      filter: saturate(0.8);
      overflow: hidden;
      .attributeFade {
        width: 100%;
        position: absolute;
        vertical-align: middle;
        /* opacity: 0; */
        transition: 0.25s all ease-in-out;
        bottom: -4rem;
        display: block;
      }

      .heroPortraitDetails {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        vertical-align: middle;
        padding: 1.5rem 0.5rem 0.5rem 0.1rem;
        position: relative;

        h5 {
          line-height: 1.5rem;
          @media screen and (max-width: 750px) {
            font-size: 1.5rem;
          }
          @media screen and (max-width: 482px) {
            font-size: 0.8rem;
          }
        }

        .attrImg {
          width: 2.625rem;
          height: 2.625rem;
          padding: 0.25rem;
          @media screen and (max-width: 750px) {
            width: 2.325rem;
            height: 2.325rem;
            padding: 0.25rem;
          }
          @media screen and (max-width: 482px) {
            width: 1.825rem;
            height: 1.825rem;
            padding: 0.25rem;
          }
        }
      }
    }
    .heroPortrait:hover {
      transform: scale(1.2);
      z-index: 15;
      vertical-align: middle;
      @media screen and (max-width: 750px) {
        transform: scale(1.1);
      }
    }
    .heroPortrait:hover .attributeFade {
      bottom: 0;
      opacity: 1;
      vertical-align: middle;
    }

    .hero-card {
      width: 14.063;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      vertical-align: middle;
    }

    @media screen and (max-width: 750px) {
      .heroPortrait {
        width: 12.813rem;
        height: 6.688rem;
      }
      .hero-card {
        width: 12.813rem;
      }
    }
    @media screen and (max-width: 482px) {
      .heroPortrait {
        width: 7.813rem;
        height: 4.188rem;
      }
      .hero-card {
        width: 7.813rem;
      }
    }
    .attrImg {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export default Heroes;
