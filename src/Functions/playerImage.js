export const playerImage = (playerId, className, children) => {
  return (
    <img
      src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/players/${playerId}.png`}
      alt=''
      className={className}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src =
          'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/player_unknown.png';
      }}
    />
  );
};
