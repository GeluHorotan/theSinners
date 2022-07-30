export const displayTeamRegion = (element, type) => {
  switch (element) {
    case 1:
      return 'NORTH AMERICA';
    case 2:
      return 'SOUTH AMERICA';
    case 3:
      return 'WESTERN EUROPE';
    case 4:
      return 'EASTERN EUROPE';
    case 5:
      return 'CHINA';
    case 6:
      return 'SOUTHEAST ASIA';

    default:
      return null;
  }
};
