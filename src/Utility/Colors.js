import { createTheme, ThemeProvider } from '@mui/material/styles';

export const primary = '#181818';
export const secondary = '#F6EFED';
export const accent = '#202020';
export const blue = '#0C1B40';
export const brown = '#240101';
export const red = '#FE4A3B';
export const desaturatedRed = '#FF8882';
export const saturatedRed = '#FF1200';
export const gradient = 'linear-gradient (#f65166, #692336 ';

export const theme = createTheme({
  palette: {
    primary: {
      main: `${saturatedRed}`,
      darker: '#053e85',
    },
  },
});
