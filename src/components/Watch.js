import React, { useState, useEffect } from 'react';
import Team from './Team';
import styled from 'styled-components';
import HashLoader from 'react-spinners/HashLoader';

// Functions
import { ordinal_suffix_of } from '../Functions/ordinal_suffix_of';

// Components
import Tabel from './Tabel';
import { obsHD, textObs } from '../Utility/Colors';
import { displayTeamRegion } from '../Functions/displayTeamRegion';

const Watch = ({ leagues }) => {
  const [loading, setLoading] = useState(true);
  const [teamList, setTeamList] = useState();
  const [teamsCounter, setTeamsCounter] = useState(8);
  const [divisionOne, setDivisionOne] = useState();

  const filterByDivision = () => {
    setDivisionOne(
      (prevState) =>
        leagues &&
        leagues.filter((league) => league.info.name.split(' ').includes('I'))
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
  }, [leagues]);

  useEffect(() => {
    getTeamList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <WrapperStyles>
      <TeamComponentStyles>
        <HashLoader loading={loading} color='white' size={55} speed={2} />
        {!loading && (
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
                                <img
                                  src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/teamlogos/${team.team_id}.png`}
                                  alt={team.name}
                                  className='team_logo'
                                />
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
      <button onClick={() => setTeamsCounter((prevState) => prevState + 5)}>
        SHOW MORE TEAMS
      </button>
    </WrapperStyles>
  );
};

const WrapperStyles = styled.div`
  width: 100%;
  height: fit-content;
`;

const TeamComponentStyles = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  display: flex;
  overflow: visible;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
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

  .tabel_container {
    .tabel_region {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .tabel_in_grid {
      min-width: 26rem;
      zoom: 0.85;
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
