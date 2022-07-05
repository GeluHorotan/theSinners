export const teamImage = (teamId, className, children) => {
  return (
    <img
      src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams_override/${teamId}.png`}
      className={className}
      alt=''
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams_override/8360138.png`;
      }}
    />
  );
};
