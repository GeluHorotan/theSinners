import React from 'react';
import { getName } from '../Functions/getName';
import { HeroesContext } from '../pages/Esports';

const Video = ({ isHero, id, className }) => {
  const dotaHeroes = React.useContext(HeroesContext);

  const heroObject = {
    src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${
      isHero && id ? getName(dotaHeroes, id, 'hero') : ''
    }.webm`,
    mp4: `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${
      isHero && id ? getName(dotaHeroes, id, 'hero') : ''
    }.mp4`,
    default:
      'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams_override/8360138.png',
  };
  return (
    <video
      className={className}
      preload='auto'
      playsInline
      autoPlay
      loop
      muted
      key={heroObject.src}
    >
      <source type='video/webm' src={heroObject.src} />
      <source type='video/mp4' source={heroObject.mp4}></source>
    </video>
  );
};

export default Video;
