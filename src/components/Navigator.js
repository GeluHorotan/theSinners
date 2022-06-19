import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { processHeroName } from '../Functions/for Hero Component/processHeroName';
const Navigator = ({ children, heroProps }) => {
  const [prevIndex, setPrevIndex] = useState();
  const [nextIndex, setNextIndex] = useState();
  const [heroesList, setHeroesList] = useState();
  const [prevHero, setPrevHero] = useState();
  const [nextHero, setNextHero] = useState();

  const getNavigator = async () => {
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
    getNavigator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (heroesList)
    return (
      <PortableNavStyles>
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
          className='nav_container arrow_bg'
        ></Link>
        <Link to='/heroes' className='nav_container middle_nav_container'>
          <div className='middle_grid_dota'></div>
          <div className='middle_grid_dota'></div>
          <div className='middle_grid_dota'></div>
          <div className='middle_grid_dota'></div>
          <div className='middle_grid_dota'></div>
          <div className='middle_grid_dota'></div>
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
          className='nav_container arrow_bg right_arrow'
        ></Link>
      </PortableNavStyles>
    );
};

const PortableNavStyles = styled.div`
  width: 150px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 10rem;
  right: 2rem;
  z-index: 1;
  .arrow_bg {
    background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_solid_left.png');
  }
  .right_arrow {
    transform: rotate(180deg);
  }

  .nav_container {
    width: 30px;
    height: 64px;
    border: 2px solid #fff;
    position: relative;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 0.25s;
    opacity: 0.4;
    cursor: pointer;
  }
  .nav_container:hover {
    opacity: 1;
  }
  .middle_nav_container {
    width: 80px;
    height: 64px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    .middle_grid_dota {
      width: 1rem;
      height: 1rem;
      background-color: #fff;
    }
  }
`;

export default Navigator;
