import React, { useState, useEffect } from 'react';
import { getName } from '../Functions/getName';
import { ItemsContext } from '../pages/Esports';

const Image = ({ className, id, isTeam, isPlayer, isItem, alt, elementId }) => {
  const [imgError, setImgError] = useState(false);

  const dotaItems = React.useContext(ItemsContext);

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

  const itemObject = {
    src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/${
      isItem && id ? getName(dotaItems, id, 'item') : ''
    }.png`,
    default:
      'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams_override/8360138.png',
  };

  if (!imgError && teamObject && playerObject && itemObject)
    return (
      <img
        src={
          isTeam
            ? teamObject.src
            : isPlayer
            ? playerObject.src
            : isItem
            ? itemObject.src
            : ''
        }
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
        src={
          isTeam
            ? teamObject.error
            : isPlayer
            ? playerObject.default
            : isItem
            ? itemObject.default
            : ''
        }
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
