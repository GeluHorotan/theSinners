import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { accent } from '../Utility/Colors';

const Tournaments = () => {
  const [tournamentData, setTournamentData] = useState();

  const getTournamentData = async () => {
    const res = await fetch(
      `https://api.pandascore.co/dota2/tournaments?search[tier]=a&sort=&page=1&per_page=200&token=u6xu5Jud_xkQ8Wh_nYeWRRenor7VXNkFa4JDwfeohzbchTD6Zs8`
    );

    const json = await res.json();

    setTournamentData(json);
  };

  useEffect(() => {
    getTournamentData();
  }, []);

  console.log(tournamentData);

  return (
    <StyledTournaments>
      {tournamentData &&
        tournamentData
          .filter((tournament) => tournament.prizepool)
          .map((tournament, index) => (
            <div key={index} className='tournaments'>
              <img
                className='tournament-logo'
                src={tournament.league.image_url}
                alt=''
              />

              <div className='participants'>
                {tournament.teams.map((team, index) => (
                  <div className='team-container' key={index}>
                    <h6 className='team-name'>{team.name}</h6>
                    <img className='team-logo' src={team.image_url} alt='' />
                  </div>
                ))}
              </div>
              <div className='infos'>
                <h6>{tournament.serie.full_name}</h6>
                <p>{tournament.begin_at.split('T')[0]}</p>
                <p>{tournament.end}</p>
                <h5>{tournament.prizepool.split(' ')[0]} &#36;</h5>
              </div>
            </div>
          ))}
    </StyledTournaments>
  );
};

const StyledTournaments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: auto;

  .tournaments {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    margin: 1rem;
    background: ${accent};
    padding: 5rem;
    border-radius: 2rem;
    .infos {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;

      width: 100%;
    }
    .tournament-logo {
      width: 8rem;
      object-fit: contain;
      object-position: center center;
    }

    .participants {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      justify-content: center;
      align-items: flex-end;
      margin: 0 4rem;

      img {
        width: 4rem;
        margin: 0.5rem;
        padding: 0.5rem;
      }

      .team-container {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center !important;
        align-items: center !important;
        text-align-last: end;
      }
    }
  }
`;

export default Tournaments;
