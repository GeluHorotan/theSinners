import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";

import MatchBox from "../components/MatchBox";

// Import Functions
import { Tab } from "@headlessui/react";

// Import Components
import Menubar from "../components/Menubar";
import Standings from "../components/Standings";
import Watch from "../components/Watch";
import { Link } from "react-router-dom";
import { grey, obsidian, obsidianShadow, white } from "../Utility/Colors";
import Schedule from "../components/Schedule";

export const LeagueContext = React.createContext();
export const ItemsContext = React.createContext();
export const HeroesContext = React.createContext();
export const TeamsContext = React.createContext();

const Esports = () => {
  const [activeDivision, setActiveDivision] = useState("Division I");
  const [activeRegion, setActiveRegion] = useState(1);
  const [leagueInfo, setLeagueInfo] = useState([]);
  const [dotaItems, setDotaItems] = useState();
  const [heroesList, setHeroesList] = useState();
  const [teamList, setTeamList] = useState();

  const getDotaItems = async () => {
    const res = await fetch(`/.netlify/functions/items/`);
    const json = await res.json();
    setDotaItems((prevState) => json.result.data.itemabilities);
  };

  const getTeamList = async () => {
    const res = await fetch(`/.netlify/functions/teamList/`);
    const json = await res.json();
    setTeamList(json.teams);
  };

  const getHeroes = async () => {
    const res = await fetch(`/.netlify/functions/helloWorld/`);
    const json = await res.json();
    setHeroesList((prevState) => json.result.data.heroes);
  };

  const [leagues, setLeagues] = useState();
  const getDotaLeagues = async () => {
    const res = await fetch(`/.netlify/functions/leagues/`);
    const json = await res.json();

    setLeagues(json.leagues);
    console.log(json.leagues);

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
    getDotaItems();
    getHeroes();
    getTeamList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tab.Group>
      <WrapperStyles>
        <ItemsContext.Provider value={dotaItems}>
          <HeroesContext.Provider value={heroesList}>
            <TeamsContext.Provider value={teamList}>
              <LeagueContext.Provider value={leagues}>
                <HeaderStyles></HeaderStyles>
                <MenuStyles>
                  <Tab.List className="menubar_list">
                    <Tab
                      className={({ selected }) =>
                        selected ? "tab_active" : ""
                      }
                    >
                      <div className="menubar_label">WATCH</div>
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected ? "tab_active" : ""
                      }
                    >
                      {" "}
                      <div className="menubar_label">SCHEDULE</div>
                    </Tab>
                  </Tab.List>
                </MenuStyles>

                <ContentStyles>
                  {" "}
                  <Tab.Panels className="content">
                    <Tab.Panel>
                      <Watch leagues={leagues}></Watch>
                    </Tab.Panel>

                    <Tab.Panel>
                      <Schedule></Schedule>
                    </Tab.Panel>
                  </Tab.Panels>
                </ContentStyles>
              </LeagueContext.Provider>
            </TeamsContext.Provider>
          </HeroesContext.Provider>
        </ItemsContext.Provider>
      </WrapperStyles>
    </Tab.Group>
  );
};

const WrapperStyles = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 10vh;
  }
`;

const HeaderStyles = styled.div`
  height: 400px;
  background-image: url("https://cdn.mos.cms.futurecdn.net/GH95hpiUpqfZ6jqgbPxsM3.jpg"),
    linear-gradient(to right, rgb(192, 49, 125) 49%, rgb(67, 149, 148) 51%);
  filter: grayscale(0.8);
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
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
  top: 0;
  z-index: 8;
  @media screen and (max-width: 743px) {
    zoom: 0.8;
  }

  @media screen and (max-width: 400px) {
    zoom: 0.6;
  }

  .menubar_list {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 1.2rem;

    button {
      background: none;
      border: none;
      outline: none;
    }
    button:focus {
      outline: none;
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

      @media screen and (max-width: 743px) {
        font-size: 0.7rem;
      }

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
  background: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/bg_granite_texture_sched.jpg");
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
