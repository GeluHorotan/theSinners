import React, { useState, useEffect } from 'react';

const Image = ({ className, id, isTeam, isPlayer, alt }) => {
  const [imgError, setImgError] = useState(false);

  const teamObject = {
    src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams_override/${id}.png`,
    error: `https://cdn.cloudflare.steamstatic.com/apps/dota2/teamlogos/${id}.png`,
    default: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams_override/8360138.png`,
  };

  const playerObject = {
    src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/players/${id}.png`,
    default:
      'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/player_unknown.png',
  };

  if (!imgError && teamObject && playerObject)
    return (
      <img
        src={isTeam ? teamObject.src : isPlayer ? playerObject.src : ''}
        className={className}
        alt={alt}
        onError={() => {
          setImgError(true);
        }}
      />
    );
  if (imgError && teamObject && playerObject)
    return (
      <img
        src={isTeam ? teamObject.error : isPlayer ? playerObject.default : ''}
        className={className}
        alt={alt}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = isTeam ? teamObject.default : '';
        }}
      />
    );
};

export default Image;
