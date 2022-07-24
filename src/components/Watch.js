import React, { useState, useEffect } from 'react';
import Team from './Team';
import styled from 'styled-components';
import HashLoader from 'react-spinners/HashLoader';

// Functions
import { ordinal_suffix_of } from '../Functions/ordinal_suffix_of';
import { motion } from 'framer-motion';
// Components
import Tabel from './Tabel';
import { obsH, obsH2, obsHD, obsidianShadow, textObs } from '../Utility/Colors';
import { displayTeamRegion } from '../Functions/displayTeamRegion';
import Button from './Button';

// Headless UI
import { Menu, Transition } from '@headlessui/react';
import UpcomingMatch from './UpcomingMatch';
import Image from './Image';
import SeriesDetails from './SeriesDetails';

const Watch = ({ leagues }) => {
  const [activeDivision, setActiveDivision] = useState('I');
  const [loading, setLoading] = useState(true);
  const [teamList, setTeamList] = useState();
  const [teamsCounter, setTeamsCounter] = useState(8);
  const [divisionOne, setDivisionOne] = useState();

  const filterByDivision = () => {
    setDivisionOne(
      (prevState) =>
        leagues &&
        leagues.filter((league) =>
          league.info.name.split(' ').includes(activeDivision)
        )
    );
    setLoading(false);
  };

  const getTeamList = async () => {
    const res = await fetch(`/.netlify/functions/teamList/`);
    const json = await res.json();
    setTeamList(json.teams);
  };

  useEffect(() => {
    filterByDivision();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leagues, activeDivision]);

  useEffect(() => {
    getTeamList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <WrapperStyles>
      <SeriesDetails></SeriesDetails>
      <UpcomingMatch leagues={leagues}></UpcomingMatch>

      <TeamComponentStyles>
        <HashLoader loading={loading} color='white' size={55} speed={2} />
        {!loading && (
          <>
            <div className='dropdown_menu'>
              {' '}
              <Menu>
                <Menu.Button className={'menu_button'}>
                  <div className='dropdown_selector'>
                    DIVISION {activeDivision}
                  </div>

                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Menu.Items className={'grid_tabels_dropdown_menu'}>
                      <Menu.Item>
                        <div
                          className='menu_options'
                          onClick={() => {
                            setActiveDivision((prevState) => 'I');
                          }}
                        >
                          DIVISION I
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <div
                          className='menu_options'
                          onClick={() => {
                            setActiveDivision((prevState) => 'II');
                          }}
                        >
                          DIVISION II
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu.Button>
              </Menu>
            </div>

            <TabelsGridStyles>
              {divisionOne &&
                divisionOne.map((league, index) => {
                  return (
                    <div className='tabel_container'>
                      <div className='tabel_region'>
                        {displayTeamRegion(league.info.region)}
                      </div>
                      <Tabel
                        eliminationMode={true}
                        className='tabel_in_grid'
                        headers={[
                          { name: 'Rank', class: 'team_rank_header' },
                          { name: 'Team', class: 'team_team_header' },
                          { name: 'Record', class: 'team_record_header' },
                        ]}
                      >
                        {league.node_groups[0].node_groups[0].team_standings.map(
                          (team, index) => {
                            return (
                              <tr>
                                <td className='tabel_rank_cell'>
                                  {ordinal_suffix_of(team.standing)}
                                </td>
                                <td className='tabel_team_cell'>
                                  <Image
                                    isTeam
                                    className={'team_logo'}
                                    id={team.team_id}
                                    alt={team.name}
                                  ></Image>

                                  {team.team_name}
                                </td>
                                <td className='tabel_record_cell'>
                                  {team.wins} - {team.losses}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </Tabel>
                    </div>
                  );
                })}
            </TabelsGridStyles>
          </>
        )}

        {teamList &&
          teamList.map((team, index) => {
            if (teamsCounter > index)
              return (
                <Team
                  leagues={leagues}
                  teamId={team.id}
                  teamName={team.name}
                ></Team>
              );
          })}
      </TeamComponentStyles>
      <Button
        setClassName='load_more_button'
        background={obsH}
        bradius={'0.5rem'}
        isRipple
        action={() => {
          setTeamsCounter((prevState) => prevState + 5);
        }}
      >
        LOAD MORE
      </Button>
    </WrapperStyles>
  );
};

const WrapperStyles = styled.div`
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .load_more_button {
    margin: 5rem auto;
  }
`;

const TeamComponentStyles = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  overflow: visible;
  flex-direction: column;
  align-items: center;

  .dropdown_menu {
    width: 75%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    .menu_button {
      position: relative;
      width: 8rem;
      height: 30px;
      background: ${obsH2};
      color: white;
      letter-spacing: 1px;
      background-color: #5e6976;
      padding-right: 2rem;
      border-radius: 3px;
      border: none;
      align-self: flex-end;
      z-index: 1;
      box-shadow: 4px 4px 8px rgb(0 0 0 / 30%);
      cursor: pointer;
    }
    .grid_tabels_dropdown_menu {
      background: #2e3339;
      display: flex;
      width: 100%;
      height: 76px;
      flex-direction: column;
      position: absolute;
      left: 0;
      margin-top: 1rem;
      z-index: 1;
      border-radius: 3px;
      align-items: flex-start;
      justify-content: space-evenly;
      pointer-events: initial;
      box-shadow: 6px 6px 8px rgb(0 0 0 / 60%);
      .menu_options {
        width: 100%;
        height: 38px;
        padding: 0px 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        cursor: pointer;
        user-select: none;
        filter: brightness(0.8);
        transition: background-color, filter 150ms ease-in-out;
        &:hover {
          background-color: #41474e;
          filter: brightness(1);
        }
      }
    }
  }
`;

const TabelsGridStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  width: 75%;
  align-self: center;
  justify-items: center;
  margin: 0 auto;
  grid-row-gap: 8rem;
  grid-column-gap: 5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    zoom: 0.8;
    width: 100%;
    display: block;
    text-size-adjust: none;
  }
  @media screen and (max-width: 1550px) {
    zoom: 0.8;
    width: 85%;
    display: block;
    text-size-adjust: none;
  }
  @media screen and (max-width: 1200px) {
    zoom: 0.7;
    display: block;
    text-size-adjust: none;
  }
  @media screen and (max-width: 668px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    width: 100%;
  }

  .tabel_container {
    .tabel_region {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .tabel_in_grid {
      min-width: 30rem;
      zoom: 0.85;
      display: block;
      text-size-adjust: none;
      box-shadow: 4px 4px 16px rgb(0 0 0 / 40%);

      th {
        color: #fff;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 700;
        padding: 1rem 1rem;
      }
      td {
        background: ${obsHD};
        color: ${textObs};
        white-space: pre-wrap;
        text-align: left;
      }
      .team_record_header,
      .tabel_record_cell,
      .tabel_rank_cell {
        text-align: center;
      }
      .team_team_header,
      .team_rank_header {
        text-align: left;
      }
      .tabel_team_cell {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 650;
        flex-grow: 1;
        font-size: 1rem;
      }
      .team_logo {
        width: 2.5em;
        height: 2.5rem;
        margin-right: 0.5rem;
      }
    }

    .grid_tabel {
      th {
        width: 100%;
      }
    }
  }
`;

export default Watch;
