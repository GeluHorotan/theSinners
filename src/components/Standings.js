import React from 'react';

import Tabel from './Tabel';
import styled from 'styled-components';
import { obsH, obsHD, textObs } from '../Utility/Colors';
import { ordinal_suffix_of } from '../Functions/ordinal_suffix_of';
import Image from './Image';

const Standings = ({ children, tournaments }) => {
  const sortedTeams = [
    ...tournaments[0].node_groups[0].node_groups[0].team_standings,
  ].sort((a, b) => a.team_id - b.team_id);

  return (
    <StandingsStyles>
      <Tabel
        className='table'
        headers={[
          { name: 'Rank', class: 'team_rank_header' },
          { name: 'Team', class: 'team_team_header' },
          { name: 'Wins', class: 'team_wins_header' },
          { name: 'Losses', class: 'team_losses_header' },
        ]}
      >
        {tournaments &&
          tournaments[0].node_groups[0].node_groups[0].team_standings.map(
            (team, index) => {
              return (
                <tr>
                  <td className='table_rank_cell'>
                    {ordinal_suffix_of(team.standing)}
                  </td>
                  <td className='table_team_cell'>
                    <Image
                      isTeam
                      className={'team_logo'}
                      id={team.team_id}
                      alt={team.name}
                    ></Image>

                    {team.team_name}
                  </td>
                  <td>{team.wins}</td>
                  <td>{team.losses}</td>
                </tr>
              );
            }
          )}
      </Tabel>
      <Tabel
        className={'grid_table'}
        headers={[{ name: 'grid view', class: 'grid_header' }]}
      >
        {sortedTeams &&
          sortedTeams.map((team, index) => {
            return (
              <>
                <tr>
                  <img
                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/teamlogos/${team.team_id}.png`}
                    alt={team.name}
                    className='team_logo'
                  />
                </tr>
              </>
            );
          })}
      </Tabel>
    </StandingsStyles>
  );
};

const StandingsStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  .table {
    width: 35%;
    box-shadow: 4px 4px 16px rgb(0 0 0 / 40%);

    th {
      color: #fff;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 700;
      padding: 1rem 2rem;
    }
    td {
      background: ${obsHD};
      color: ${textObs};
      white-space: nowrap;
      padding: 1rem 2rem;
    }
    .team_team_header,
    .team_rank_header,
    .table_rank_cell {
      text-align: left;
    }
    .table_team_cell {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      flex-grow: 1;
      padding-right: 5rem;
    }
  }
  .team_logo {
    width: 2.5em;
    height: 2.5rem;
    margin-right: 1rem;
  }

  .grid_table {
    th {
      width: 100%;
      background: red;
    }
  }
`;

export default Standings;
