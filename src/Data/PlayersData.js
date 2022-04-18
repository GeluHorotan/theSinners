import Puppey from '../img/playerCards/puppey.png';
import Sumail from '../img/playerCards/sumail.png';
import Nisha from '../img/playerCards/nisha.png';
import Yapzor from '../img/playerCards/yapzor.png';
import iceiceice from '../img/playerCards/iceiceice.png';

export const PlayersData = [
  {
    topText: 'THE SINNERS',
    cardColor: 'desaturated-red',
    cardType: 'player',
    className: 'player-card',
    buttonText: 'LEARN MORE',
    name: 'Alexandru Butnaru',
    nickname: 'Rein.',
    location: 'Romania',
    age: 24,
    position: 'Safelane (1)',
    signatureHeroes: [
      'skeleton_king_alt1',
      'templar-assassin',
      'monkey_king_alt1',
    ],
    src: `${Sumail}`,
    key: '1',
  },
  {
    topText: 'THE SINNERS',
    cardColor: 'orange',
    cardType: 'player',
    className: 'player-card',
    buttonText: 'LEARN MORE',
    name: 'Gelu Horotan',
    nickname: 'oxymoron',
    location: 'Romania',
    age: 23,
    position: 'Midlane (2)',
    signatureHeroes: ['queenofpain_alt1', 'nevermore_alt1', 'invoker_persona1'],
    src: `${Nisha}`,
    key: '2',
  },
  {
    topText: 'THE SINNERS',
    cardColor: 'magenta',
    cardType: 'player',
    className: 'player-card',
    buttonText: 'LEARN MORE',
    name: 'Daryl Koh Pei Xiang',
    nickname: 'iceiceice',
    location: 'Singapore',
    age: 31,
    position: 'Offlane (3)',
    signatureHeroes: ['timbersaw', 'tidehunter', 'natures_prophet'],
    src: `${iceiceice}`,
    key: '3',
  },
  {
    topText: 'THE SINNERS',
    cardColor: 'pink',
    cardType: 'player',
    className: 'player-card',
    buttonText: 'LEARN MORE',
    name: 'Ronald Solticzki',
    nickname: 'gnx',
    location: 'Romania',
    age: 18,
    position: 'Soft Support (4)',
    signatureHeroes: ['crystal_maiden_alt1', 'vengefulspirit', 'rubick_alt1'],
    src: `${Yapzor}`,
    key: '4',
  },
  {
    topText: 'THE SINNERS',
    cardColor: 'lightblue',
    cardType: 'player',
    className: 'player-card',
    buttonText: 'LEARN MORE',
    name: 'Clement Ivanov',
    nickname: 'Puppey',
    location: 'Estonia',
    age: 32,
    position: 'Hard Support (5)',
    signatureHeroes: ['chen', 'enchantress', 'bane'],
    src: `${Puppey}`,
    key: '5',
  },
];
