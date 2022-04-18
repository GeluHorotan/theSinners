import React from 'react';
import styled from 'styled-components';

// Components
import Card from '../components/playerCard/Card';
import Slider from '../components/Slider';

// Utility
import { primary } from '../Utility/Colors';
import '../Utility/dota2heroes.css';

import { PlayersData } from '../Data/PlayersData';

const Teams = () => {
  return (
    <BackgroundStyle>
      <WrapperStyle>
        <Slider
          slidesPerView='3'
          sliderClass='slider'
          items={PlayersData.map((player, index) => {
            return (
              <Card
                topText={player.topText}
                cardColor={player.cardColor}
                cardType={player.cardType}
                className={player.className}
                buttonText={player.buttonText}
                age={player.age}
                location={player.location}
                nickname={player.nickname}
                name={player.name}
                position={player.position}
                signatureHeroes={player.signatureHeroes}
                src={player.src}
                key={index}
              />
            );
          })}
        ></Slider>
      </WrapperStyle>
    </BackgroundStyle>
  );
};

const BackgroundStyle = styled.div`
  width: 100%;
  background: ${primary};
  height: 90vh;
`;

const WrapperStyle = styled.div`
  .player-card {
    min-height: 100%;
  }
  .slider {
    width: 100%;

    background: ${primary};
    display: flex;
    justify-content: center;
    align-items: center;

    .page {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3rem;
      width: 100%;
    }
  }
`;

export default Teams;
