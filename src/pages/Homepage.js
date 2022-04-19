import React from 'react';
// Page Components

import Carousel from '../components/Carousel';
import SponsorsBar from '../components/SponsorsBar';
import Slider from '../components/Slider';
import Card from '../components/playerCard/Card';

// Datas
import { SliderData } from '../Data/SliderData';
import { SponsorData } from '../Data/SponsorData';

// Style
import styled from 'styled-components';

// Logos
import RazerLogo from '../img/SponsorLogos/razer.png';
import Redbull from '../img/SponsorLogos/redbull.svg';
import Logitech from '../img/SponsorLogos/logitech.png';
import Hyperx from '../img/SponsorLogos/hyperx.svg';
import Nvidia from '../img/SponsorLogos/nvidia.svg';
import Northface from '../img/SponsorLogos/northface.svg';
import Tesla from '../img/SponsorLogos/tesla.png';
import { primary } from '../Utility/Colors';

const Homepage = () => {
  return (
    <StyledPage>
      <DivStyle>
        <Carousel slides={SliderData} />
      </DivStyle>

      <StyledSponsorShowcase>
        <Slider
          slidesPerView='3'
          sliderClass='slider'
          items={SponsorData.map((item, index) => {
            return (
              <Card
                topText={item.title}
                product={item.product}
                deliveryTime={item.delivery}
                price={item.price}
                description={item.description}
                cardColor={item.color}
                cardType={item.cardType}
                buttonText={item.buttonText}
                src={item.src}
                key={index}
              />
            );
          })}
        ></Slider>
      </StyledSponsorShowcase>

      <SponsorsBar
        setSponsor1={RazerLogo}
        setSponsor2={Redbull}
        setSponsor3={Logitech}
        setSponsor4={Hyperx}
        setSponsor5={Nvidia}
        setSponsor6={Northface}
        setSponsor7={Tesla}
      ></SponsorsBar>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primary};
  display: flex;
  flex-direction: column;
`;

const DivStyle = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledSponsorShowcase = styled.div`
  width: 80%;
  margin: 0 auto;
  .player-card {
    min-height: 100%;
  }

  .swiper {
    padding: 7rem 0;
    width: 100%;
  }

  .swiper-slide {
  }
`;

export default Homepage;
