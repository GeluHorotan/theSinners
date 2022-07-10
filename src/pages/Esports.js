import React, { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';

import MatchBox from '../components/MatchBox';

// Import Functions
import { Tab } from '@headlessui/react';

// Import Components
import Menubar from '../components/Menubar';
import Standings from '../components/Standings';
import Watch from '../components/Watch';
import { Link } from 'react-router-dom';
import { grey, obsidian, obsidianShadow, white } from '../Utility/Colors';

export const LeagueContext = React.createContext();

const Esports = () => {
  const [activeDivision, setActiveDivision] = useState('Division I');
  const [activeRegion, setActiveRegion] = useState(1);
  const [leagueInfo, setLeagueInfo] = useState([]);

  const [leagues, setLeagues] = useState();
  const getDotaLeagues = async () => {
    const res = await fetch(`/.netlify/functions/leagues/`);
    const json = await res.json();

    setLeagues(json.leagues);

    json.leagues.forEach((league) => {
      setLeagueInfo((prevState) => [
        ...prevState,
        {
          name: league.info.name,
          region: league.info.region,
          node: league.node_groups[0].team_standings,
          division: league.node_groups[0].node_group_type,
        },
      ]);
    });
  };

  useEffect(() => {
    getDotaLeagues();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tab.Group>
      <WrapperStyles>
        <MenuStyles>
          <Tab.List className='menubar_list'>
            <Tab>
              <div className='menubar_label'>WATCH</div>
            </Tab>
            <Tab>
              {' '}
              <div className='menubar_label'>SCHEDULE</div>
            </Tab>
            <Tab className={({ selected }) => (selected ? 'tab_active' : '')}>
              <div className='menubar_label'>STANDINGS</div>
            </Tab>
            <Tab>
              <div className='menubar_label'>ABOUT</div>
            </Tab>
          </Tab.List>
        </MenuStyles>
        <button
          onClick={() => {
            setActiveRegion(2);
          }}
        >
          SELECT REGION 1
        </button>
        <ContentStyles>
          {' '}
          <Tab.Panels className='content'>
            <Tab.Panel>
              <LeagueContext.Provider value={leagues}>
                <Watch leagues={leagues}></Watch>
              </LeagueContext.Provider>
            </Tab.Panel>

            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>
              <Standings
                tournaments={
                  leagues &&
                  leagues.filter(
                    (tournament) =>
                      tournament.info.region === activeRegion &&
                      tournament.info.name.includes(' I ')
                  )
                }
              ></Standings>
            </Tab.Panel>
            <Tab.Panel>Content 4</Tab.Panel>
          </Tab.Panels>
        </ContentStyles>
      </WrapperStyles>
    </Tab.Group>
  );
};

const WrapperStyles = styled.div`
  width: 100%;
`;

const MenuStyles = styled.div`
  width: 100%;
  min-height: 3.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${obsidian};
  filter: ${obsidianShadow};
  position: sticky;
  /* top: 10rem; */
  z-index: 10;
  .menubar_list {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1.2rem;
    button {
      background: none;
      border: none;
    }
    .menubar_label {
      min-height: 3.5rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: ${grey};
      transition-property: color;
      transition-timing-function: ease-in-out;
      transition-duration: 0.15s;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-weight: 700;
      font-size: 0.9rem;
      margin: 0 1.2rem;
      &:hover {
        color: ${white};
      }
    }
  }
  .tab_active {
    .menubar_label {
      color: ${white};
    }
  }
`;

const ContentStyles = styled.div`
  display: flex;
  overflow: visible;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  color: ${white};
  background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/bg_granite_texture_sched.jpg');
  background-size: 100% auto;
  background-position: top, center;
  background-repeat: repeat-y;
  justify-content: center;

  display: flex;
  flex-direction: column;

  transition-property: height;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;

  .content {
    width: 100%;
    overflow: visible;
    margin: 0 auto;
  }
`;

export default Esports;
