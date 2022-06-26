import React from 'react';
import Tabel from './Tabel';
import styled from 'styled-components';
import { obsH } from '../Utility/Colors';

const Standings = () => {
  return (
    <StandingsStyles>
      <Tabel
        tableClass='teams_table'
        headers={[
          { name: 'Rank', className: 'header_rank' },
          { name: 'Team', className: 'header_team' },
          { name: 'Wins', className: 'header_wins' },
          { name: 'Losses', className: 'header_losses' },
        ]}
      >
        1st EG 3-4
      </Tabel>
      <Tabel></Tabel>
    </StandingsStyles>
  );
};

const StandingsStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 1rem;

  .teams_table {
    width: 45%;
    justify-content: flex-start;
    align-items: flex-start;
    background: ${obsH};
  }
`;

export default Standings;
