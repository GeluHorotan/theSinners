import React from 'react';

export const teamFilter = (team, match) => {
  return <div>{match.team_id_1 === team.team_id ? <p>TEST</p> : ''} </div>;
};
