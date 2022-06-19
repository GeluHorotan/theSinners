import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Functions
import { processHeroName } from '../Functions/for Hero Component/processHeroName';
import { getAttrImg } from '../Functions/getAttrImg';
import { getAttackType } from '../Functions/for Hero Component/getAttackType';

const HeroPagination = ({ children, heroProps }) => {
  const [prevIndex, setPrevIndex] = useState();
  const [nextIndex, setNextIndex] = useState();
  const [heroesList, setHeroesList] = useState();
  const [prevHero, setPrevHero] = useState();
  const [nextHero, setNextHero] = useState();

  const getPaginationHero = async () => {
    const prevRes = await fetch(
      `/.netlify/functions/hero/?id=${heroProps.list[heroProps.prevIndex].id}`
    );
    const prevJson = await prevRes.json();
    setPrevHero(prevJson.result.data.heroes[0]);

    const nextRes = await fetch(
      `/.netlify/functions/hero/?id=${heroProps.list[heroProps.nextIndex].id}`
    );
    const nextJson = await nextRes.json();
    setNextHero(nextJson.result.data.heroes[0]);

    setHeroesList(heroProps.list);

    setPrevIndex(heroProps.prevIndex);
    setNextIndex(heroProps.nextIndex);
  };

  useEffect(() => {
    getPaginationHero();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (prevHero && nextHero && heroesList)
    return (
      <>
        <PaginationContainer>
          <Link
            to={`/hero/${processHeroName(prevHero.name)}`}
            state={{
              currentHero: prevHero.id,
              prevHero: heroesList[heroProps.currentIndex - 1],
              currentIndex: prevIndex,
              prevIndex: prevIndex - 1,
              nextIndex: prevIndex + 1,
              nextHero: heroesList[heroProps.currentIndex + 1],
              list: heroesList,
            }}
          >
            <div className='pagination_hero_container prev_hero'>
              <img
                className='pagination_hero_portrait'
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/${processHeroName(
                  prevHero.name
                )}.png`}
                alt=''
              />
              <div className='pagination_label_container label_aligner_left'>
                <p className='pagination_direction'>Previous Hero</p>

                <div className='pagination_hero_name'>{prevHero.name_loc}</div>

                <div className='pagination_attribute_container'>
                  {getAttrImg(prevHero.primary_attr)}
                  {getAttackType(prevHero.attack_capability)}
                </div>
              </div>
            </div>
          </Link>
          <Link to='/heroes' className='link_all_heroes'>
            <div className='pagination_all_heroes_container'>
              <div className='pagination_boxes_container'>
                <div className='pagination_hero_box'></div>
                <div className='pagination_hero_box'></div>
                <div className='pagination_hero_box'></div>
                <div className='pagination_hero_box'></div>
                <div className='pagination_hero_box'></div>
                <div className='pagination_hero_box'></div>
              </div>
              <p className='pagination_all_heroes_title'>All heroes</p>
            </div>
          </Link>
          <Link
            to={`/hero/${processHeroName(prevHero.name)}`}
            state={{
              currentHero: nextHero.id,
              prevHero: heroesList[heroProps.currentIndex - 1],
              currentIndex: nextIndex,
              prevIndex: nextIndex - 1,
              nextIndex: nextIndex + 1,
              nextHero: heroesList[heroProps.currentIndex + 1],
              list: heroesList,
            }}
          >
            <div className='pagination_hero_container next_hero'>
              <img
                className='pagination_hero_portrait'
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/${processHeroName(
                  nextHero.name
                )}.png`}
                alt=''
              />
              <div className='pagination_label_container'>
                <p className='pagination_direction'>Next Hero</p>

                <div className='pagination_hero_name'> {nextHero.name_loc}</div>
                <div className='pagination_attribute_container'>
                  {getAttrImg(nextHero.primary_attr)}
                  {getAttackType(nextHero.attack_capability)}
                </div>
              </div>
            </div>
          </Link>

          <div className='fade-bottom'>
            <div className='fade-b'></div>
          </div>
        </PaginationContainer>
      </>
    );
};

const PaginationContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;

  background-color: #111;
  position: relative;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;

    width: 45%;
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
        rgba(0, 0, 0, 0) 10%,
        #000000 60%,
        rgb(0, 0, 0) 100%
      );
    }
  }

  .link_all_heroes {
    width: 10%;

    .pagination_all_heroes_container {
      width: 100%;
      min-height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      align-items: center;
      box-shadow: 2px 2px 6px #000;
      transition-property: filter, transform;
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      cursor: pointer;
      &:hover {
        filter: brightness(1.6);
      }
      .pagination_all_heroes_title {
        color: #fff;

        text-transform: uppercase;
        letter-spacing: 2px;
        margin-top: 0.5rem;
        text-align: center;
      }

      .pagination_boxes_container {
        width: 6.25rem;
        height: 4.3rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        .pagination_hero_box {
          width: 2rem;
          height: 2rem;
          background-color: #9e9fa0;
        }
      }
    }
  }

  .pagination_hero_container {
    background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png');
    width: 100%;
    min-height: 10rem;
    position: relative;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;

    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 2px 2px 6px #000;
    transition-property: filter, transform;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;

    &:hover {
      filter: brightness(1.6);
    }
    &:hover .pagination_hero_portrait {
      bottom: 0;
    }
    .pagination_hero_portrait {
      position: absolute;
      bottom: -1.5rem;
      z-index: 1;
      transition-duration: 0.3s;
      width: 25rem;
    }
    .attrImg {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.85rem;
      filter: drop-shadow(1px 1px 4px black);
    }
    .pagination_label_container {
      width: 15.625rem;
      min-height: 0;
      display: flex;
      flex-direction: column;
      z-index: 2;

      .pagination_direction {
        color: #9f9f9f;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 1px 1px 4px #000;
        margin-bottom: 5px;
      }
      .pagination_attribute_container {
        display: flex;
        align-items: center;
        color: #ddd;
      }
      .pagination_hero_name {
        font-size: 1.8rem;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        white-space: pre-line;

        font-weight: bold;
        line-height: 112%;
        text-shadow: 1px 1px 4px #000;
      }
    }
  }
  .label_aligner_left {
    align-items: flex-end;
  }

  .next_hero {
    justify-content: flex-start;
    .pagination_hero_portrait {
      right: 0;
    }
  }
  .prev_hero {
    justify-content: flex-end;

    .pagination_hero_portrait {
      left: 0;
    }
  }
`;

export default HeroPagination;
