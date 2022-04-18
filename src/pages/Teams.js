import React from 'react';
import styled from 'styled-components';
import Card from '../components/playerCard/Card';

// Utility
import { primary } from '../Utility/Colors';
import '../Utility/dota2heroes.css';

// Players photos
import Puppey from '../img/playerCards/puppey.png';
import Sumail from '../img/playerCards/sumail.png';
import Nisha from '../img/playerCards/nisha.png';
import Yapzor from '../img/playerCards/yapzor.png';
import iceiceice from '../img/playerCards/iceiceice.png';

const Teams = () => {
  return (
    <>
      <BackgroundStyle>
        <Card
          className='player-card'
          cardColor='desaturated-red'
          topText='THE SINNERS'
          buttonText='READ MORE'
          age={22}
          cardType='player'
          location='Romania'
          nickname='Rein.'
          name='Alexandru Butnaru'
          position='Safelane (1)'
          signatureHeroes={[
            'templar_assassin',
            'skeleton_king_alt1',
            'monkey_king_alt1',
          ]}
          src={Sumail}
        />
        <Card
          className='player-card'
          cardColor='orange'
          topText='THE SINNERS'
          buttonText='READ MORE'
          age={22}
          cardType='player'
          location='Romania'
          nickname='oxymoron365'
          name='Gelu Horotan'
          position='Midlane (2)'
          signatureHeroes={[
            'queenofpain_alt1',
            'nevermore_alt1',
            'invoker_persona1',
          ]}
          src={Nisha}
        />
        <Card
          className='player-card'
          cardColor='magenta'
          topText='THE SINNERS'
          buttonText='READ MORE'
          age={22}
          cardType='player'
          location='Romania'
          nickname='gnx'
          name='Ronald Solticzki'
          position='Offlane (3)'
          signatureHeroes={['timbersaw', 'tidehunter', 'furion']}
          src={iceiceice}
        />
        <Card
          className='player-card'
          cardColor='pink'
          topText='THE SINNERS'
          buttonText='READ MORE'
          age={22}
          cardType='player'
          location='Romania'
          nickname='Yapz0r'
          name='Yazied Jaradat'
          position='Soft Support (4)'
          signatureHeroes={['rubick_alt1', 'earthshaker_alt2', 'enigma']}
          src={Yapzor}
        />
        <Card
          className='player-card'
          cardColor='lightblue'
          topText='THE SINNERS'
          buttonText='READ MORE'
          age={22}
          cardType='player'
          location='Romania'
          nickname='Puppey'
          name='Clement Ivanov'
          position='Hard Support (5)'
          signatureHeroes={['chen', 'enigma', 'bane']}
          src={Puppey}
        />
      </BackgroundStyle>
    </>
  );
};

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: ${primary};
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 0 4rem;
  grid-auto-rows: 1fr;
  gap: 5rem;

  .player-card {
    min-height: 100%;
  }
`;

export default Teams;
