import React from 'react';
import styled from 'styled-components';

const MatchBox = ({ match, children }) => {
  return <BoxStyles>{children}</BoxStyles>;
};
// MATCH BOX LEAGUE
//  {
//    leagues &&
//      leagues.map((league, index) => {
//        return league.series_infos.map((match, index) => {
//          return (
//            <MatchBox match={match}>
//              {league.node_groups[0].team_standings.map((team, index) => {
//                console.log(league);
//                return match.team_id_1 === team.team_id ? (
//                  <div className='team_container'>
//                    <img src={`${team.team_logo_url}`} alt='' />
//                    {team.team_name} {secondsToDhms(league.info.start_timestamp)}
//                  </div>
//                ) : match.team_id_2 === team.team_id ? (
//                  <div className='team_container'>
//                    <img src={`${team.team_logo_url}`} alt='' />
//                    {team.team_name}{' '}
//                  </div>
//                ) : (
//                  ''
//                );
//              })}{' '}
//            </MatchBox>
//          );
//        });
//      });
//  }

const BoxStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  height: 10rem;
  padding: 1rem;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  background: darkgrey;

  img {
    width: 2rem;
  }
`;

export default MatchBox;
