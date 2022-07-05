export const displayPlayerRole = (role) => {
  switch (role) {
    case 1:
      return 'CORE';
    case 2:
      return 'SUPPORT';
    case 4:
      return 'MID';

    default:
      return null;
  }
};
