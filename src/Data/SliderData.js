import ti from '../img/homepageCarousel/SliderTI.jpg';
import meetus from '../img/homepageCarousel/SliderM3.jpg';
import patch from '../img/homepageCarousel/SliderPatchImg.jpg';
import heroes from '../img/homepageCarousel/SliderVoid.jpg';
import tiMobile from '../img/homepageCarousel/SliderTIMobile.jpg';
import meetusMobile from '../img/homepageCarousel/SliderM3Mobile.jpg';
import patchMobile from '../img/homepageCarousel/SliderPatchMobile.jpg';
import heroesMobile from '../img/homepageCarousel/SliderVoidMobile.jpg';

export const SliderData = [
  {
    image: `${ti}`,
    imageMobile: `${tiMobile}`,
    title: 'Dota 2 The International Championship',
    description:
      'The esports community is looking forward to the beginning of the international 2022 in Dota 2. The tournament held on 14.08.22 - 24.08.22 has already drawn a lot of attention of experts, analysts, spectators and sportsbooks.',
  },
  {
    image: `${meetus}`,
    imageMobile: `${meetusMobile}`,
    title: 'The Sinners',
    description:
      'The Sinners is a European team that was first established during the post-TI4 shuffle. The original team drew upon players from former Natus Vincere, Fnatic and Alliance squads.',
  },
  {
    image: `${patch}`,
    imageMobile: `${patchMobile}`,
    title: 'Patch v7.32B',
    description:
      'Game State Integration now requires the command-line option "-gamestateintegration" to function. This is because there can be a per-frame performance impact to using game state integration.',
  },
  {
    image: `${heroes}`,
    imageMobile: `${heroesMobile}`,
    title: 'List of dota 2 heroes',
    description: `From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.`,
  },
];
