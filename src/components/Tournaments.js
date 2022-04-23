import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { accent, primary, secondary } from '../Utility/Colors';

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

  return (
    <StyledTournaments>
      {tournamentData &&
        tournamentData
          .filter((tournament) => tournament.prizepool)
          .map((tournament, index) => (
            <div key={index} className='tournaments'>
              <div className='top-part'>
                <img
                  className='tournament-logo'
                  src={tournament.league.image_url}
                  alt=''
                />
              </div>

              <div className='bottom-part'>
                <h6>{tournament.serie.full_name}</h6>
                <p>{tournament.begin_at.split('T')[0]}</p>
                <p>{tournament.end}</p>
                <h5>{tournament.prizepool.split(' ')[0]} &#36;</h5>
                <div className='participants'>
                  {tournament.teams
                    .filter((team) => team.image_url)
                    .map((team, index) => (
                      <img className='team-logo' src={team.image_url} alt='' />
                    ))}
                </div>
              </div>
            </div>
          ))}
    </StyledTournaments>
  );
};

const StyledTournaments = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(16rem, 0.3fr));
  grid-gap: 5rem;
  justify-content: center;
  align-items: center;
  justify-content: center;

  width: 90%;
  margin: 0 auto;

  .tournaments {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${accent};
    border-radius: 1rem;

    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.1);
      background: ${secondary};
      color: ${primary};
    }

    .tournament-logo {
      width: 10rem;
      border-radius: 1rem;
      box-shadow: 5px 10px 5px ${primary};
      object-fit: contain;
      object-position: center center;
    }

    .top-part {
      padding: 1rem 1.6rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      width: 100%;
    }

    .bottom-part {
      padding: 1rem 1.6rem;
      width: 100%;
      transition: 0.4s all ease;

      .participants {
        display: flex;
        flex-direction: row;
        background: rgba(12, 27, 64, 0.15);
        box-shadow: 5px 10px 5px ${primary};
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 1rem;
        justify-content: space-between;
        align-items: center;

        .team-logo {
          width: 2rem;
        }
      }
    }
  }
`;

export default Tournaments;
