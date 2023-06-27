import React from "react";

export const getAttrImg = (element) => {
  switch (element) {
    case 0:
      return (
        <img
          className="attrImg"
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
          alt=""
        />
      );
    case 1:
      return (
        <img
          className="attrImg"
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
          alt=""
        />
      );
    case 2:
      return (
        <img
          className="attrImg"
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
          alt=""
        />
      );
    case 3:
      return (
        <img
          className="attrImg"
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
          alt=""
        />
      );
    default:
      return null;
  }
};
