import { createGlobalStyle } from 'styled-components';

const NavigationDisabler = createGlobalStyle`
nav {
  display: none !important;
}
`;

export default NavigationDisabler;
