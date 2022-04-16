import React from 'react';
import styled from 'styled-components';
import { PlayerCard } from '../components/playerCard/PlayerCard';

// Utility
import { primary } from '../Utility/Colors';

// Players photos
import Puppey from '../img/playerCards/puppey.png';
import Sumail from '../img/playerCards/sumail.png';
import Nisha from '../img/playerCards/nisha.png';
import Yapzor from '../img/playerCards/yapzor.png';
import iceiceice from '../img/playerCards/iceiceice.png';

const Teams = () => {
  return (
    <BackgroundStyle>
      <PlayerCard
        setInfo1=''
        setInfo2='Name: '
        setInfo3='Location: '
        setInfo4='Age: '
        setInfo5='Position: '
        setInfo6=''
        setNickname='Rein.'
        setName='Alexandru Butnaru'
        setLocation='Romania'
        setAge='24'
        setPosition='Safelane (1)'
        setSignatureHeroes='NAIX, SF, STORM SPIRIT'
        setPhoto={Sumail}
      />
      <PlayerCard
        setInfo1=''
        setInfo2='Name: '
        setInfo3='Location: '
        setInfo4='Age: '
        setInfo5='Position: '
        setInfo6=''
        setNickname='oxymoron'
        setName='Gelu Horotan'
        setLocation='Romania'
        setAge='23'
        setPosition='Midlane (2)'
        setSignatureHeroes='SF, SF, SF'
        setPhoto={Nisha}
      />
      <PlayerCard
        setInfo1=''
        setInfo2='Name: '
        setInfo3='Location: '
        setInfo4='Age: '
        setInfo5='Position: '
        setInfo6=''
        setNickname='gnx'
        setName='Ronald Solticzki'
        setLocation='Romania'
        setAge='21'
        setPosition='Offlane (3)'
        setSignatureHeroes='TIDEHUNTER, AXE, BRISTLEBACK'
        setPhoto={iceiceice}
      />
      <PlayerCard
        setInfo1=''
        setInfo2='Name: '
        setInfo3='Location: '
        setInfo4='Age: '
        setInfo5='Position: '
        setInfo6=''
        setNickname='YapzOr'
        setName='Yazied Jaradat'
        setLocation='Jordan'
        setAge='27'
        setPosition='Soft Support (4)'
        setSignatureHeroes='NAIX, SF, STORM SPIRIT'
        setPhoto={Yapzor}
      />
      <PlayerCard
        setInfo1=''
        setInfo2='Name: '
        setInfo3='Location: '
        setInfo4='Age: '
        setInfo5='Position: '
        setInfo6=''
        setNickname='Puppey'
        setName='Clement Ivanov'
        setLocation='Estonia'
        setAge='32'
        setPosition='Hard Support (5)'
        setSignatureHeroes='CRYSTAL MAIDEN, OGRE, ELROND'
        setPhoto={Puppey}
      />
    </BackgroundStyle>
  );
};

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: ${primary};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export default Teams;
